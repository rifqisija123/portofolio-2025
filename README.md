# Portofolio V5
Halo semuanya!
Perkenalkan, saya Rifqi Ainur Rahman Tarmono, dan pada kesempatan kali ini, saya ingin berbagi proyek website portofolio yang telah saya kembangkan khusus di tahun baru 2025 ini.

Tech Stack yang digunakan:
- ReactJS
- Tailwind CSS
- AOS
- Firebase
- Framer Motion
- Lucide
- Material UI
- SweetAlert2

# Tutorial Menjalankan Project

Berikut ini adalah panduan sederhana untuk menjalankan project ini.

## Persiapan

Pastikan Anda sudah menginstal:

- **Node.js** 

## Langkah-Langkah Menjalankan Project

1. **Download project ini:**

   ```bash
   git clone https://github.com/EkiZR/Portofolio_V5.git
   ```

2. **Install semua kebutuhan:**

   ```bash
   npm install
   ```
   atau dengan cara
   
    ```bash
   npm install --legacy-peer-deps
   ```

4. **Jalankan project:**
   
   ```bash
   npm run dev
   ```

6. **Buka di browser:**

   Akses aplikasi di browser Anda melalui link yang muncul di terminal.

## Membuat Versi Siap Produksi

Untuk membuat versi siap produksi (production build):

1. Jalankan perintah build:

   ```bash
   npm run build
   ```

2. File hasil build akan tersimpan di folder `dist`. Anda dapat mengunggah folder ini ke server hosting Anda.

## Catatan

Jika ada masalah saat menjalankan project, pastikan:

- Node.js sudah terinstal dengan benar.
- Anda berada di folder project yang benar.
- Semua kebutuhan terinstal tanpa error.

## Konfigurasi Firebase

Untuk melakukan konfigurasi Firebase dalam project ini, ikuti langkah berikut:

1. **Tambahkan Firebase ke Project:**
   - Buka [Firebase Console](https://console.firebase.google.com/).
   - Buat project baru atau gunakan project yang sudah ada.

2. **Pilih Firestore Database**
   - Create Database

3. **Pergi Ke Project Setting**
    - Klik pada bagian : ![Screenshot 2024-12-30 214204](https://github.com/user-attachments/assets/43243cad-b414-4dd9-8793-d15c401c82fe)
    - Nanti copy isi firebas confignya ![image](https://github.com/user-attachments/assets/6d0e158c-1ae0-40c1-8b41-9e53a1c4ccbb)

4. **Pergi Ke Rules**
   - Ubah rulesnya jadi true

5. **Buka file firebase.js dan firebase-comment.js** 
   - Ganti isi firebaseConfig dengan config firebase anda



    
      


