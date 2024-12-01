# Movie Hub

Movie Hub adalah aplikasi website yang memungkinkan pengguna untuk menjelajahi daftar film lengkap dengan detail seperti trailer, aktor, dan deskripsi. Aplikasi ini dilengkapi fitur pencarian, ulasan, sistem manajemen konten (CMS) untuk admin, dan sekarang mendukung fitur login pengguna.

---

## Fitur Utama

- **Login dan Registrasi Pengguna:**
  - Pengguna dapat membuat akun dan login untuk mengakses fitur khusus seperti memberikan ulasan dan rating.
- **Pencarian Film:**
  - Berdasarkan nama, genre, dan tahun rilis.
- **Halaman Ulasan:**
  - Pengguna dapat memberikan rating bintang dan ulasan untuk setiap film.
- **CMS Admin:**
  - Mengelola data film, genre, dan aktor dengan antarmuka yang mudah digunakan.

---

## Teknologi yang Digunakan

- **Frontend:** React.js
- **Backend:** Laravel
- **Database:** PostgreSQL (Nama database: `Movie_DB`)

---

## Cara Instalasi

### Persyaratan:

- **Node.js** dan **npm** (untuk React)
- **PHP** dan **Composer** (untuk Laravel)
- **PostgreSQL** (untuk database)

### Langkah Instalasi:

1. **Clone Repository:**
   ```bash
   git clone https://github.com/username/movie-hub.git
2. **Buka File di VSCode**
3. **Buka Terminal di VSCode**
4. **Masuk Ke Folder Tempat File Disimpan**
    ```bash
    cd /tempat file disimpan
5. **Install Node.js (versi : 10.8.3)**  
   Download node.js di google chrome menggunakan browser anda dan pilih yang versi v20.18.2, setelah itu install node.js tersebut.Lalu cek apakah node.js sudah terinstall atau belum di terminal dengan cara:
   - link tutorial : [Link](https://www.geeksforgeeks.org/install-node-js-on-windows/)
   ```bash
   npm -v
6. **Install Composer**  
   Note: Untuk menginstall Composer anda harus menginstall PHP minimum versi 8.2 terlebih dahulu. jika anda belum menginstall php sebelumnya anda dapat mengikuti tutorial di link ini [Link](https://webhostmu.com/cara-install-xampp/).  
   Install Composer dengan melalui terminal dengan cara:
   ```bash
   composer install
7. **Salin File `.env.example` Menjadi `.env`:**
     ```bash
     cp .env.example .env
     ```
8. **Atur Konfigurasi Database di File `.env`:**
     ```env
     DB_CONNECTION=pgsql
     DB_HOST=127.0.0.1
     DB_PORT=5432
     DB_DATABASE=Movie_DB
     DB_USERNAME=postgres
     DB_PASSWORD=yourpassword
     ```
9. **Generate Key Aplikasi:**
     ```bash
     php artisan key:generate
     ```
10. **Jalankan Migrasi Untuk Membuat Tabel:**
     ```bash
     php artisan migrate
     ```
11. **Install Laravel Breeze**
    Install laravel Breeze untuk fitur login dengan cara
    ```bash
    composer require laravel/breeze --dev
    php artisan breeze:install
---
## Menjalankan Aplikasi
Untuk dapat menjalankan aplikasi anda dapat mengikuti langkah langkah dibawah:
1. Buka Postgresql lalu buat dataBase dengan nama Movie_DB
2. Masukan dataset ke database
3. Buka Terminal di VSCode lalu masukan perintah
   ```bash
   npm run dev  
4. Buka terminal lain di VSCode lalu masukan perintah
   ```bash
   php artisan serve
---
## Struktur Folder
```bash
laravel-inertia-project/
  ├── app/
  ├── bootstrap/
  ├── config/
  ├── database/
  ├── node_modules/
  ├── public/
  ├── resources/
  ├── routes/
  ├── storage/
  ├── vendor/
  ├── .editorconfig
  ├── .env
  ├── .env.example
  ├── .gitattributes
  ├── .gitignore
  ├── artisan
  ├── composer.json
  ├── composer.lock
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── phpunit.xml
  ├── postcss.config.js
  ├── README.md
  ├── tailwind.config.js
  └── vite.config.js
  ```
