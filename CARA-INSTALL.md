# Panduan Instalasi & Pengaturan - Stream Drama

Panduan ini akan membantu Anda menginstal, mengonfigurasi, dan menjalankan aplikasi **Stream Drama** di komputer lokal Anda.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal beberapa perangkat lunak berikut di sistem Anda:
- **Node.js** (direkomendasikan versi v18.0.0 atau lebih baru)
- **npm** (biasanya terpasang bersama Node.js) atau **yarn** / **pnpm**
- **Git** (opsional, untuk melakukan clone repositori)

## Langkah 1: Clone Repositori atau Ekstrak File

Jika Anda menggunakan repositori git, clone repositori ke komputer lokal Anda:
```bash
git clone <url-repositori-anda>
cd stream-drama
```
*(Jika Anda sudah memiliki file project secara lokal, cukup buka terminal dan arahkan ke folder project tersebut).*

## Langkah 2: Instalasi Dependensi (Package)

Instal semua paket yang diperlukan untuk menjalankan aplikasi (seperti Next.js, React, Tailwind CSS, dll.).

Jalankan salah satu perintah berikut tergantung pada package manager yang Anda gunakan:

```bash
# Menggunakan npm
npm install

# Menggunakan yarn
yarn install

# Menggunakan pnpm
pnpm install
```

## Langkah 3: Menjalankan Server Pengembangan (Development)

Untuk memulai aplikasi dalam mode pengembangan (development), di mana setiap perubahan kode akan langsung terlihat (hot-reloading):

```bash
# Menggunakan npm
npm run dev

# Menggunakan yarn
yarn dev

# Menggunakan pnpm
pnpm dev
```

Setelah server berjalan, buka web browser Anda dan kunjungi:
**http://localhost:3000**

## Langkah 4: Membangun Aplikasi untuk Produksi (Build for Production)

Saat Anda siap meluncurkan aplikasi atau ingin menguji versi produksi yang sudah dioptimasi sepenuhnya secara lokal, Anda perlu mem-build project tersebut.

1. **Build aplikasi:**
   ```bash
   npm run build
   ```
   *Perintah ini akan mengkompilasi kode React dan menyiapkan bundle yang sudah dioptimasi oleh Next.js.*

2. **Jalankan server produksi:**
   ```bash
   npm run start
   ```

3. Kunjungi **http://localhost:3000** untuk melihat situs Anda yang sudah siap produksi.

## Pemecahan Masalah (Troubleshooting)

- **Port Sudah Digunakan:** Jika port `3000` sudah dipakai oleh aplikasi lain, Next.js biasanya akan mencoba memakai port `3001` secara otomatis atau memberitahu Anda. Anda dapat memaksa pemakaian port tertentu dengan perintah `npm run dev -- -p 4000`.
- **Eror Versi Node:** Pastikan versi Node Anda kompatibel dengan Next.js 16+. Anda bisa mengecek versi saat ini dengan perintah `node -v` di terminal.
- **Module Not Found:** Jika Anda melihat pesan eror tentang modul yang hilang (seperti `Cannot find module 'lucide-react'`), coba hapus folder `node_modules` dan file `package-lock.json` Anda, lalu jalankan `npm install` kembali.
