const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "354657",
  database: "medicine_app",
});

db.connect((err) => {
  if (err) {
    console.error("Veritabanı bağlantı hatası:", err);
    return;
  }
  console.log("Veritabanına bağlanıldı.");
});

app.get("/api/medicines", (req, res) => {
  const { city } = req.query;

  if (city) {
    const query = `
      SELECT 
        m.id,
        m.name,
        m.manufacturer,
        cms.month,
        cms.sales_count
      FROM medicines m
      INNER JOIN city_medicine_sales cms ON m.id = cms.medicine_id
      INNER JOIN cities c ON cms.city_id = c.id
      WHERE c.name = ?
      ORDER BY m.id, cms.month
    `;

    db.query(query, [city], (err, results) => {
      if (err) {
        console.error("Veritabanı hatası:", err);
        return res.status(500).json({ error: "Veritabanı hatası." });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ error: "Şehir bulunamadı veya veri yok." });
      }

      const medicinesMap = {};
      results.forEach((row) => {
        if (!medicinesMap[row.id]) {
          medicinesMap[row.id] = {
            id: row.id,
            name: row.name,
            manufacturer: row.manufacturer,
            monthlySales: [],
          };
        }
        medicinesMap[row.id].monthlySales.push(row.sales_count);
      });

      const medicines = Object.values(medicinesMap);

      res.json({
        city: city,
        medicines: medicines,
      });
    });
  } else {
    const query = `
      SELECT 
        m.id,
        m.name,
        m.manufacturer,
        cms.month,
        SUM(cms.sales_count) as sales_count
      FROM medicines m
      INNER JOIN city_medicine_sales cms ON m.id = cms.medicine_id
      GROUP BY m.id, m.name, m.manufacturer, cms.month
      ORDER BY m.id, cms.month
    `;

    db.query(query, (err, results) => {
      if (err) {
        console.error("Veritabanı hatası:", err);
        return res.status(500).json({ error: "Veritabanı hatası." });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: "Veri bulunamadı." });
      }

      const medicinesMap = {};
      results.forEach((row) => {
        if (!medicinesMap[row.id]) {
          medicinesMap[row.id] = {
            id: row.id,
            name: row.name,
            manufacturer: row.manufacturer,
            monthlySales: [],
          };
        }
        medicinesMap[row.id].monthlySales.push(parseInt(row.sales_count));
      });

      const medicines = Object.values(medicinesMap);

      res.json({
        country: "Türkiye",
        medicines: medicines,
      });
    });
  }
});

app.get("/api/medicines/total-sales", (req, res) => {
  const query = `
    SELECT 
      c.name as city,
      SUM(cms.sales_count) as totalSales
    FROM cities c
    INNER JOIN city_medicine_sales cms ON c.id = cms.city_id
    GROUP BY c.id, c.name
    ORDER BY totalSales DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Veritabanı hatası:", err);
      return res.status(500).json({ error: "Veritabanı hatası." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Veri bulunamadı." });
    }

    const cities = results.map((row) => ({
      city: row.city,
      totalSales: parseInt(row.totalSales),
    }));

    res.json({
      cities: cities,
    });
  });
});

app.get("/api/medicines/:id", (req, res) => {
  const { id } = req.params;
  const { city } = req.query;

  if (city) {
    const query = `
      SELECT 
        m.id,
        m.name,
        m.manufacturer,
        cms.month,
        cms.sales_count
      FROM medicines m
      INNER JOIN city_medicine_sales cms ON m.id = cms.medicine_id
      INNER JOIN cities c ON cms.city_id = c.id
      WHERE m.id = ? AND c.name = ?
      ORDER BY cms.month
    `;

    db.query(query, [id, city], (err, results) => {
      if (err) {
        console.error("Veritabanı hatası:", err);
        return res.status(500).json({ error: "Veritabanı hatası." });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ error: "İlaç veya şehir bulunamadı veya veri yok." });
      }

      const monthlySales = results.map((row) => row.sales_count);

      const medicine = {
        id: results[0].id,
        name: results[0].name,
        manufacturer: results[0].manufacturer,
        monthlySales: monthlySales,
      };

      res.json({
        city: city,
        medicine: medicine,
      });
    });
  } else {
    const query = `
      SELECT 
        m.id,
        m.name,
        m.manufacturer,
        cms.month,
        SUM(cms.sales_count) as sales_count
      FROM medicines m
      INNER JOIN city_medicine_sales cms ON m.id = cms.medicine_id
      WHERE m.id = ?
      GROUP BY m.id, m.name, m.manufacturer, cms.month
      ORDER BY cms.month
    `;

    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Veritabanı hatası:", err);
        return res.status(500).json({ error: "Veritabanı hatası." });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ error: "İlaç bulunamadı veya veri yok." });
      }

      const monthlySales = results.map((row) => parseInt(row.sales_count));

      const medicine = {
        id: results[0].id,
        name: results[0].name,
        manufacturer: results[0].manufacturer,
        monthlySales: monthlySales,
      };

      res.json({
        country: "Türkiye",
        medicine: medicine,
      });
    });
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
