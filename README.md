# Kopi Candu

Landing page sederhana bertema kedai kopi dengan navbar responsif.

## Demo
- Live URL: https://format-icon.edgeone.dev/

## Fitur
- Navbar fixed di bagian atas.
- Menu hamburger untuk tampilan tablet/mobile.
- Sidebar menu bisa ditutup saat klik di luar area menu.
- Menggunakan Feather Icons dan Google Fonts (Poppins).

## Struktur Proyek
```text
.
|- index.html
|- css/
|  |- style.css
|- js/
   |- script.js
```

## Teknologi
- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Menjalankan Secara Lokal
Karena ini proyek statis, cukup buka `index.html` di browser.

Opsional (disarankan) pakai live server:
1. Install ekstensi **Live Server** di VS Code.
2. Klik kanan `index.html`.
3. Pilih **Open with Live Server**.

## Deploy dengan GitHub + EdgeOne
Alur umum:
1. Push project ke repository GitHub.
2. Masuk ke EdgeOne dan buat project baru (static site/pages).
3. Hubungkan EdgeOne ke repository GitHub kamu.
4. Set branch deploy (biasanya `main`).
5. Build command bisa dikosongkan untuk proyek statis.
6. Output directory biasanya root project (`/`) karena file utama `index.html` ada di root.
7. Deploy dan gunakan domain bawaan EdgeOne atau custom domain.
