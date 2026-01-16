# İzmir Farma – Karar Destek Sistemi (KDS)

## Proje Açıklaması
Bu proje, İzmir Farma ilaç deposu için geliştirilmiş web tabanlı bir Karar Destek Sistemidir (KDS).
Sistem, geçmiş satış verilerini analiz ederek orta düzey yöneticilerin stok planlama ve talep tahmini kararlarını desteklemeyi amaçlamaktadır.

---

## Senaryo Tanımı
İlaç deposu yöneticileri, farklı şehirlerde ve farklı ilaçlarda satışların nasıl dağıldığını görmekte zorlanmaktadır.
Bu sistem sayesinde yöneticiler;
- Şehir bazlı satışları,
- İlaç performanslarını,
- Mevsimsel ve aylık satış değişimlerini
tek bir ekrandan analiz edebilmektedir.

---

## Sistem Özellikleri
- Türkiye haritası üzerinden 81 ilin satış analizi
- Şehir seçimine göre ilaç listesi
- En çok satan Top 5 ilacın bar grafik ile gösterimi
- Seçilen ilaca ait:
  - 12 aylık satış grafiği
  - Mevsimsel satış dağılımı
  - Pazar payı (halka grafik)
- Karar destek özeti alanı

---

## Kullanılan Teknolojiler
### Frontend
- Vue.js
- Chart.js
- HTML / CSS / JavaScript

### Backend
- Node.js
- Express.js

### Veritabanı
- MySQL

---

## Veritabanı Yapısı
- `cities`: Şehir bilgileri
- `medicines`: İlaç bilgileri
- `city_medicine_sales`: Şehir–ilaç bazlı satış verileri

---

## API Endpoint Listesi
- `GET /cities` → Şehir listesini getirir
- `GET /medicines?cityId=` → Seçilen şehre ait ilaçları getirir
- `GET /sales?cityId=&medicineId=` → Seçilen ilaca ait satış verilerini getirir

---

## Kurulum Adımları

### Backend
### Backend
- Node.js kuruludur
- Gerekli paketler: npm install
- Sunucu: node app.js

### Frontend
- Proje klasörüne girilir
- npm install
- npm run dev
## Ortam Değişkenleri
.env.example dosyası veritabanı bağlantı bilgilerini içermektedir.
Gerçek bilgiler gizlilik nedeniyle paylaşılmamıştır.
## ER Diyagramı
Veritabanı yapısı ve ER Diyagramı proje raporu içerisinde detaylı olarak açıklanmıştır.
