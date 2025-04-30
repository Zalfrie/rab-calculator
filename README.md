Kalkulator RAB Konstruksi
Aplikasi web untuk menghitung estimasi biaya proyek konstruksi (Rencana Anggaran Biaya) menggunakan Vue.js, Tailwind CSS, dan Supabase (PostgreSQL).
Fitur

Tambah, hapus, dan lihat item biaya (deskripsi, jumlah, harga satuan, kategori).
Kategori item: Material, Tenaga Kerja, Lain-lain.
Hitung total biaya secara real-time.
Format mata uang Rupiah (IDR).
Penyimpanan data di Supabase.

Prasyarat

Koneksi internet untuk mengakses CDN (Vue.js, Tailwind CSS, Supabase).
Akun Supabase untuk backend dan database.

Instalasi

Clone Repository
git clone
cd rab-calculator


Setup Supabase

Buat proyek di Supabase.
Dapatkan SUPABASE_URL dan SUPABASE_KEY dari pengaturan proyek.
Buat tabel rab_items dengan skema berikut (lihat supabase.sql):CREATE TABLE rab_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    description TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price INTEGER NOT NULL,
    category TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


Update src/app.js dengan SUPABASE_URL dan SUPABASE_KEY Anda.


Jalankan Aplikasi

Host proyek menggunakan server lokal, misalnya dengan ekstensi Live Server di VSCode atau:npx http-server


Buka http://localhost:8080 di browser.

Lisensi
MIT License
