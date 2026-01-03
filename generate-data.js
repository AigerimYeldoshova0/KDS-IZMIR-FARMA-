const mysql = require("mysql2/promise");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "354657",
  database: "medicine_app",
});

const cities = [
  { name: "Adana", population: 2200000, plateCode: "01", region: "Akdeniz" },
  {
    name: "Adıyaman",
    population: 630000,
    plateCode: "02",
    region: "Güneydoğu Anadolu",
  },
  {
    name: "Afyonkarahisar",
    population: 730000,
    plateCode: "03",
    region: "Ege",
  },
  { name: "Ağrı", population: 540000, plateCode: "04", region: "Doğu Anadolu" },
  {
    name: "Aksaray",
    population: 420000,
    plateCode: "68",
    region: "İç Anadolu",
  },
  { name: "Amasya", population: 330000, plateCode: "05", region: "Karadeniz" },
  {
    name: "Ankara",
    population: 5500000,
    plateCode: "06",
    region: "İç Anadolu",
  },
  { name: "Antalya", population: 2500000, plateCode: "07", region: "Akdeniz" },
  {
    name: "Ardahan",
    population: 98000,
    plateCode: "75",
    region: "Doğu Anadolu",
  },
  { name: "Artvin", population: 170000, plateCode: "08", region: "Karadeniz" },
  { name: "Aydın", population: 1100000, plateCode: "09", region: "Ege" },
  {
    name: "Balıkesir",
    population: 1200000,
    plateCode: "10",
    region: "Marmara",
  },
  { name: "Bartın", population: 200000, plateCode: "74", region: "Karadeniz" },
  {
    name: "Batman",
    population: 620000,
    plateCode: "72",
    region: "Güneydoğu Anadolu",
  },
  { name: "Bayburt", population: 82000, plateCode: "69", region: "Karadeniz" },
  { name: "Bilecik", population: 220000, plateCode: "11", region: "Marmara" },
  {
    name: "Bingöl",
    population: 280000,
    plateCode: "12",
    region: "Doğu Anadolu",
  },
  {
    name: "Bitlis",
    population: 350000,
    plateCode: "13",
    region: "Doğu Anadolu",
  },
  { name: "Bolu", population: 310000, plateCode: "14", region: "Karadeniz" },
  { name: "Burdur", population: 270000, plateCode: "15", region: "Akdeniz" },
  { name: "Bursa", population: 3000000, plateCode: "16", region: "Marmara" },
  { name: "Çanakkale", population: 540000, plateCode: "17", region: "Marmara" },
  {
    name: "Çankırı",
    population: 190000,
    plateCode: "18",
    region: "İç Anadolu",
  },
  { name: "Çorum", population: 530000, plateCode: "19", region: "Karadeniz" },
  { name: "Denizli", population: 1000000, plateCode: "20", region: "Ege" },
  {
    name: "Diyarbakır",
    population: 1700000,
    plateCode: "21",
    region: "Güneydoğu Anadolu",
  },
  { name: "Düzce", population: 390000, plateCode: "81", region: "Karadeniz" },
  { name: "Edirne", population: 410000, plateCode: "22", region: "Marmara" },
  {
    name: "Elazığ",
    population: 590000,
    plateCode: "23",
    region: "Doğu Anadolu",
  },
  {
    name: "Erzincan",
    population: 230000,
    plateCode: "24",
    region: "Doğu Anadolu",
  },
  {
    name: "Erzurum",
    population: 760000,
    plateCode: "25",
    region: "Doğu Anadolu",
  },
  {
    name: "Eskişehir",
    population: 870000,
    plateCode: "26",
    region: "İç Anadolu",
  },
  {
    name: "Gaziantep",
    population: 2100000,
    plateCode: "27",
    region: "Güneydoğu Anadolu",
  },
  { name: "Giresun", population: 450000, plateCode: "28", region: "Karadeniz" },
  {
    name: "Gümüşhane",
    population: 150000,
    plateCode: "29",
    region: "Karadeniz",
  },
  {
    name: "Hakkari",
    population: 280000,
    plateCode: "30",
    region: "Doğu Anadolu",
  },
  { name: "Hatay", population: 1600000, plateCode: "31", region: "Akdeniz" },
  {
    name: "Iğdır",
    population: 200000,
    plateCode: "76",
    region: "Doğu Anadolu",
  },
  { name: "Isparta", population: 440000, plateCode: "32", region: "Akdeniz" },
  {
    name: "İstanbul",
    population: 15000000,
    plateCode: "34",
    region: "Marmara",
  },
  { name: "İzmir", population: 4300000, plateCode: "35", region: "Ege" },
  {
    name: "Kahramanmaraş",
    population: 1100000,
    plateCode: "46",
    region: "Akdeniz",
  },
  { name: "Karabük", population: 250000, plateCode: "78", region: "Karadeniz" },
  {
    name: "Karaman",
    population: 250000,
    plateCode: "70",
    region: "İç Anadolu",
  },
  { name: "Kars", population: 290000, plateCode: "36", region: "Doğu Anadolu" },
  {
    name: "Kastamonu",
    population: 380000,
    plateCode: "37",
    region: "Karadeniz",
  },
  {
    name: "Kayseri",
    population: 1400000,
    plateCode: "38",
    region: "İç Anadolu",
  },
  {
    name: "Kırıkkale",
    population: 280000,
    plateCode: "71",
    region: "İç Anadolu",
  },
  {
    name: "Kırklareli",
    population: 360000,
    plateCode: "39",
    region: "Marmara",
  },
  {
    name: "Kırşehir",
    population: 240000,
    plateCode: "40",
    region: "İç Anadolu",
  },
  {
    name: "Kilis",
    population: 140000,
    plateCode: "79",
    region: "Güneydoğu Anadolu",
  },
  { name: "Kocaeli", population: 1900000, plateCode: "41", region: "Marmara" },
  { name: "Konya", population: 2200000, plateCode: "42", region: "İç Anadolu" },
  { name: "Kütahya", population: 580000, plateCode: "43", region: "Ege" },
  {
    name: "Malatya",
    population: 800000,
    plateCode: "44",
    region: "Doğu Anadolu",
  },
  { name: "Manisa", population: 1400000, plateCode: "45", region: "Ege" },
  {
    name: "Mardin",
    population: 840000,
    plateCode: "47",
    region: "Güneydoğu Anadolu",
  },
  { name: "Mersin", population: 1800000, plateCode: "33", region: "Akdeniz" },
  { name: "Muğla", population: 980000, plateCode: "48", region: "Ege" },
  { name: "Muş", population: 410000, plateCode: "49", region: "Doğu Anadolu" },
  {
    name: "Nevşehir",
    population: 300000,
    plateCode: "50",
    region: "İç Anadolu",
  },
  { name: "Niğde", population: 360000, plateCode: "51", region: "İç Anadolu" },
  { name: "Ordu", population: 760000, plateCode: "52", region: "Karadeniz" },
  { name: "Osmaniye", population: 540000, plateCode: "80", region: "Akdeniz" },
  { name: "Rize", population: 340000, plateCode: "53", region: "Karadeniz" },
  { name: "Sakarya", population: 1000000, plateCode: "54", region: "Marmara" },
  { name: "Samsun", population: 1300000, plateCode: "55", region: "Karadeniz" },
  {
    name: "Siirt",
    population: 330000,
    plateCode: "56",
    region: "Güneydoğu Anadolu",
  },
  { name: "Sinop", population: 220000, plateCode: "57", region: "Karadeniz" },
  { name: "Sivas", population: 640000, plateCode: "58", region: "İç Anadolu" },
  {
    name: "Şanlıurfa",
    population: 2100000,
    plateCode: "63",
    region: "Güneydoğu Anadolu",
  },
  {
    name: "Şırnak",
    population: 540000,
    plateCode: "73",
    region: "Güneydoğu Anadolu",
  },
  { name: "Tekirdağ", population: 1100000, plateCode: "59", region: "Marmara" },
  { name: "Tokat", population: 600000, plateCode: "60", region: "Karadeniz" },
  { name: "Trabzon", population: 810000, plateCode: "61", region: "Karadeniz" },
  {
    name: "Tunceli",
    population: 84000,
    plateCode: "62",
    region: "Doğu Anadolu",
  },
  { name: "Uşak", population: 370000, plateCode: "64", region: "Ege" },
  { name: "Van", population: 1200000, plateCode: "65", region: "Doğu Anadolu" },
  { name: "Yalova", population: 270000, plateCode: "77", region: "Marmara" },
  { name: "Yozgat", population: 420000, plateCode: "66", region: "İç Anadolu" },
  {
    name: "Zonguldak",
    population: 600000,
    plateCode: "67",
    region: "Karadeniz",
  },
];

const medicines = [
  { name: "Parol", manufacturer: "Atabay", season: "Kış" },
  { name: "Minoset", manufacturer: "Abdi İbrahim", season: "Kış" },
  { name: "Theraflu", manufacturer: "Novartis", season: "Kış" },
  { name: "Gripin", manufacturer: "Sanofi", season: "Kış" },
  { name: "Aferin Forte", manufacturer: "Abdi İbrahim", season: "Kış" },
  { name: "Coldaway C", manufacturer: "Pfizer", season: "Kış" },
  { name: "Katarin Forte", manufacturer: "Bayer", season: "Kış" },
  { name: "Otrivine", manufacturer: "GlaxoSmithKline", season: "Kış" },
  {
    name: "Nurofen Cold & Flu",
    manufacturer: "Reckitt Benckiser",
    season: "Kış",
  },
  { name: "Benical Cold", manufacturer: "Johnson & Johnson", season: "Kış" },
  { name: "Calpol", manufacturer: "GlaxoSmithKline", season: "Kış" },
  { name: "Zaditen Şurup", manufacturer: "Novartis", season: "Kış" },
  { name: "Redoxon C", manufacturer: "Bayer", season: "Kış" },
  { name: "Ocean Nazal Sprey", manufacturer: "Pfizer", season: "Kış" },
  { name: "Zyrtec", manufacturer: "Pfizer", season: "İlkbahar" },
  { name: "Aerius", manufacturer: "Merck", season: "İlkbahar" },
  { name: "Claritine", manufacturer: "Bayer", season: "İlkbahar" },
  { name: "Telfast", manufacturer: "Sanofi", season: "İlkbahar" },
  { name: "Xyzal", manufacturer: "UCB Pharma", season: "İlkbahar" },
  { name: "Zaditen", manufacturer: "Novartis", season: "İlkbahar" },
  { name: "Avamys", manufacturer: "GlaxoSmithKline", season: "İlkbahar" },
  { name: "Nazoster", manufacturer: "Bayer", season: "İlkbahar" },
  { name: "Rhinocort Aqua", manufacturer: "AstraZeneca", season: "İlkbahar" },
  { name: "Allergodil", manufacturer: "Meda", season: "İlkbahar" },
  { name: "Fml Liquifilm", manufacturer: "Allergan", season: "İlkbahar" },
  { name: "Refresh Göz Damlası", manufacturer: "Allergan", season: "İlkbahar" },
  { name: "Ventolin", manufacturer: "GlaxoSmithKline", season: "İlkbahar" },
  { name: "Bepanthol Güneş Kremi SPF50", manufacturer: "Bayer", season: "Yaz" },
  {
    name: "La Roche-Posay Anthelios SPF50",
    manufacturer: "L'Oreal",
    season: "Yaz",
  },
  { name: "Mustela Güneş Kremi", manufacturer: "Mustela", season: "Yaz" },
  { name: "Hametan Krem", manufacturer: "Bayer", season: "Yaz" },
  { name: "Fenistil Jel", manufacturer: "Novartis", season: "Yaz" },
  { name: "Enterogermina", manufacturer: "Sanofi", season: "Yaz" },
  { name: "Diafuryl", manufacturer: "Sanofi", season: "Yaz" },
  { name: "Buscopan", manufacturer: "Boehringer Ingelheim", season: "Yaz" },
  { name: "Majezik", manufacturer: "Sanofi", season: "Yaz" },
  { name: "Arveles", manufacturer: "Pfizer", season: "Yaz" },
  { name: "Gaviscon", manufacturer: "Reckitt Benckiser", season: "Yaz" },
  { name: "Maalox", manufacturer: "Sanofi", season: "Yaz" },
  { name: "Zaditen Jel", manufacturer: "Novartis", season: "Yaz" },
  { name: "Supradyn", manufacturer: "Bayer", season: "Sonbahar" },
  { name: "Centrum", manufacturer: "Pfizer", season: "Sonbahar" },
  {
    name: "Pharmaton",
    manufacturer: "Boehringer Ingelheim",
    season: "Sonbahar",
  },
  { name: "Imuneks", manufacturer: "Abdi İbrahim", season: "Sonbahar" },
  { name: "Wellcare Immune", manufacturer: "Pfizer", season: "Sonbahar" },
  { name: "Ocean Plus", manufacturer: "Pfizer", season: "Sonbahar" },
  { name: "NBL Propolis", manufacturer: "NBL", season: "Sonbahar" },
  { name: "Redoxon D3", manufacturer: "Bayer", season: "Sonbahar" },
  { name: "Decavit", manufacturer: "Sanofi", season: "Sonbahar" },
];

const seasonMonths = {
  Kış: [12, 1, 2],
  İlkbahar: [3, 4, 5],
  Yaz: [6, 7, 8],
  Sonbahar: [9, 10, 11],
};

function getSeasonMultiplier(month, medicineSeason) {
  const seasonMonthsList = seasonMonths[medicineSeason];
  return seasonMonthsList.includes(month) ? 2.0 : 0.6;
}

function calculateSales(baseSales, month, medicineSeason, cityPopulation) {
  const seasonMultiplier = getSeasonMultiplier(month, medicineSeason);
  const populationMultiplier = cityPopulation / 15000000;
  return Math.round(baseSales * seasonMultiplier * populationMultiplier);
}

async function generateData() {
  const connection = await db;
  try {
    console.log("Veritabanına bağlanıldı.");

    console.log("Şehirler ekleniyor...");
    for (const city of cities) {
      await connection.execute(
        "INSERT INTO cities (name, population) VALUES (?, ?)",
        [city.name, city.population]
      );
    }
    console.log(`${cities.length} şehir eklendi.`);

    console.log("Plaka kodları ekleniyor...");
    const [cityRowsForPlates] = await connection.execute(
      "SELECT id, name FROM cities"
    );
    const cityMap = {};
    cityRowsForPlates.forEach((city) => {
      cityMap[city.name] = city.id;
    });

    for (const city of cities) {
      const cityId = cityMap[city.name];
      if (cityId) {
        await connection.execute(
          "INSERT INTO plates (city_id, plate_code, region) VALUES (?, ?, ?)",
          [cityId, city.plateCode, city.region]
        );
      }
    }
    console.log(`${cities.length} plaka kodu eklendi.`);

    console.log("İlaçlar ekleniyor...");
    for (const medicine of medicines) {
      await connection.execute(
        "INSERT INTO medicines (name, manufacturer, season) VALUES (?, ?, ?)",
        [medicine.name, medicine.manufacturer, medicine.season]
      );
    }
    console.log(`${medicines.length} ilaç eklendi.`);

    console.log("Satış verileri oluşturuluyor...");
    const [cityRows] = await connection.execute(
      "SELECT id, population FROM cities"
    );
    const [medicineRows] = await connection.execute(
      "SELECT id, season FROM medicines"
    );

    let totalSales = 0;
    for (const city of cityRows) {
      for (const medicine of medicineRows) {
        for (let month = 1; month <= 12; month++) {
          const baseSales = Math.floor(Math.random() * 4000) + 1000;
          const salesCount = calculateSales(
            baseSales,
            month,
            medicine.season,
            city.population
          );

          await connection.execute(
            "INSERT INTO city_medicine_sales (city_id, medicine_id, month, sales_count) VALUES (?, ?, ?, ?)",
            [city.id, medicine.id, month, salesCount]
          );
          totalSales++;
        }
      }
    }
    console.log(`${totalSales} satış kaydı oluşturuldu.`);
    console.log("Veri oluşturma tamamlandı!");

    await connection.end();
  } catch (error) {
    console.error("Hata:", error);
    await connection.end();
    process.exit(1);
  }
}

generateData();
