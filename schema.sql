DROP DATABASE IF EXISTS medicine_app;
CREATE DATABASE medicine_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE medicine_app;

DROP TABLE IF EXISTS city_medicine_sales;
DROP TABLE IF EXISTS plates;
DROP TABLE IF EXISTS medicines;
DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  population INT NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE medicines (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) UNIQUE NOT NULL,
  manufacturer VARCHAR(100) NOT NULL,
  season ENUM('Kış', 'İlkbahar', 'Yaz', 'Sonbahar') NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE plates (
  id INT PRIMARY KEY AUTO_INCREMENT,
  city_id INT NOT NULL,
  plate_code VARCHAR(2) NOT NULL,
  region VARCHAR(50),
  FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE,
  UNIQUE KEY unique_city_plate (city_id),
  UNIQUE KEY unique_plate_code (plate_code)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE city_medicine_sales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  city_id INT NOT NULL,
  medicine_id INT NOT NULL,
  month INT NOT NULL CHECK (month >= 1 AND month <= 12),
  sales_count INT NOT NULL,
  FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE,
  FOREIGN KEY (medicine_id) REFERENCES medicines(id) ON DELETE CASCADE,
  UNIQUE KEY unique_city_medicine_month (city_id, medicine_id, month)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE INDEX idx_city_id ON city_medicine_sales(city_id);
CREATE INDEX idx_medicine_id ON city_medicine_sales(medicine_id);
CREATE INDEX idx_month ON city_medicine_sales(month);
CREATE INDEX idx_plate_city_id ON plates(city_id);

