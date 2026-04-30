🍜 Jonkira Ramen - Landing Page Restoran Jepang
Sebuah website landing page modern untuk restoran Jepang bernama Jonkira Ramen. Dibangun dengan React JS dan Tailwind CSS, website ini menampilkan berbagai informasi penting restoran seperti menu, galeri, informasi kontak, dan sistem reservasi online yang terintegrasi dengan WhatsApp.

🔗 Demo Langsung: jonkira.vercel.app

✨ Fitur Utama
📱 Tampilan Responsif — Desain yang optimal di semua perangkat (desktop, tablet, mobile).

🌓 Dark / Light Mode — Tema yang dapat diubah sesuai preferensi pengguna [20†L5-L7].

🍽️ Menu Interaktif — Menampilkan daftar menu lengkap dengan kategori (Ramen, Donburi, Side Dish) [17†L3-L22].

🖼️ Galeri Foto dengan Lightbox — Menampilkan foto-foto makanan dan suasana restoran secara elegan [23†L32-L35].

📞 Reservasi via WhatsApp — Form reservasi yang langsung terhubung ke WhatsApp restoran [18†L12-L16].

💬 Tombol WhatsApp Mengambang — Memudahkan pengunjung untuk bertanya atau memesan [19†L3-L4].

📨 Formulir Kontak (Formspree) — Kirim pesan langsung dari website tanpa backend [14†L13-L17].

📊 Status Buka/Tutup Real-time — Navbar secara otomatis menampilkan status buka/tutup restoran berdasarkan jadwal operasional [25†L6-L13].

🎞️ Promo Strip Berjalan — Menampilkan promo-promo menarik dengan efek scrolling tanpa henti [26†L6-L7].

⚡ Animasi Scroll — Efek animasi subtle saat pengguna menggulir halaman [10†L12-L15].

⚙️ Teknologi yang Digunakan
React JS (v18.2.0) — Library JavaScript untuk membangun antarmuka pengguna [11†L4].

Vite — Build tool yang cepat untuk development dan production [11†L5-L6].

Tailwind CSS — Framework CSS utility-first (digunakan untuk styling).

Formspree — Backendless form API untuk menangani pengiriman email dari formulir kontak [14†L14].

EmailJS — Library untuk mengirim email langsung dari aplikasi frontend [11†L4].

🚀 Cara Menjalankan Proyek
Prasyarat
Pastikan Node.js dan npm sudah terinstall di komputer Anda.

Langkah-langkah
Clone repositori ini

bash
git clone https://github.com/jejen-dev/Jonkira.git
cd Jonkira
Install dependensi

bash
npm install
Jalankan mode development

bash
npm run dev
Website akan terbuka di http://localhost:5173 secara otomatis.

Build untuk production

bash
npm run build
🗂️ Struktur Proyek
text
Jonkira/
├── src/
│   ├── components/     # Komponen-komponen React (About, Hero, Menu, dll)
│   ├── context/        # Context API untuk tema dark/light mode
│   ├── hooks/          # Custom hooks (scroll reveal animation)
│   ├── App.jsx         # Komponen utama dan routing sederhana
│   ├── App.css         # Styling global dan animasi CSS
│   ├── main.jsx        # Entry point aplikasi
│   └── index.css       # Styling dasar
├── index.html          # Template utama HTML
├── package.json        # Daftar dependensi dan script
├── vite.config.js      # Konfigurasi Vite
└── README.md           # Dokumentasi proyek (file ini)
📄 Lisensi
Proyek ini bersifat open-source dan dapat digunakan untuk keperluan belajar maupun komersial.

