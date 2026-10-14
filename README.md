<div align="center">

# Clipper

**Smart Video Clipping Tool — Landing Page**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

*Clip smarter, not harder. Dibuat dengan hati di Indonesia.*

[Live Demo](#) · [Screenshots](#screenshots) · [Fitur](#fitur-landing-page) · [Teknologi](#teknologi)

</div>

---

## Tentang Proyek

**Clipper** adalah landing page profesional untuk aplikasi video clipping berbasis AI. Didesain dengan pendekatan **light mode minimalis modern**, halaman ini menampilkan semua fitur unggulan produk dengan visual yang premium dan interaktif.

Landing page ini dibangun **100% vanilla** — tanpa framework, tanpa library eksternal — hanya HTML, CSS, dan JavaScript murni.

---

## Fitur Landing Page

### Desain
- **Light mode minimalis** dengan aksen indigo/violet premium
- **Glassmorphism navbar** — transparan saat atas, solid saat scroll
- **Gradient text & blob animations** pada hero section
- **Micro-animations** di setiap elemen interaktif
- **Fully responsive** — dari iPhone SE (375px) hingga desktop 1440px+

### Seksi Halaman

| Seksi | Deskripsi |
|---|---|
| **Hero** | Headline, CTA, mockup UI animasi, social proof |
| **Trust Strip** | Platform yang didukung (YouTube, TikTok, dll) |
| **Features** | 7 feature cards dengan icon SVG dan hover effect |
| **How It Works** | 3 langkah visual dengan animasi |
| **Stats** | Counter animasi (97%, 10x, 2400+, 30+) |
| **Demo Interaktif** | Simulasi AI clip dengan playhead & marker timeline |
| **Pricing** | 3 tier + toggle bulanan/tahunan |
| **Testimonials** | Auto-scroll carousel infinite |
| **Komunitas** | Section bergabung komunitas + preview chat |
| **CTA** | Call to action dengan gradient background |
| **Footer** | 4-kolom dengan social links |

### Interaktivitas JavaScript

- **AI Demo Simulation** — klik tombol, playhead scan video, highlight muncul satu per satu
- **QR Code Modal** — buka/tutup dengan animasi spring, klik luar/Escape untuk tutup
- **Pricing Toggle** — switch bulanan ke tahunan dengan harga berubah real-time
- **Counter Animasi** — angka count-up saat elemen masuk viewport
- **Scroll Reveal** — elemen fade-in bertahap saat di-scroll
- **Parallax Blob** — latar hero bergerak ikut kursor mouse
- **Active Nav Highlight** — link navbar berubah sesuai seksi yang sedang dilihat
- **Ripple Effect** — semua tombol punya ripple saat diklik
- **Hamburger Menu** — mobile-friendly dengan animasi dropdown

---

## Screenshots

> Hero section, Features grid, Interactive demo, Community QR modal
> *(tambahkan screenshot di sini)*

---

## Struktur Proyek

```
clipper_landingpage/
├── index.html          # Struktur halaman (HTML5 semantik)
├── style.css           # Styling (1400+ baris Vanilla CSS)
├── script.js           # Interaktivitas (Vanilla JS ES6+)
├── community_qr.jpg    # QR code komunitas
└── README.md
```

---

## Cara Menjalankan

### Langsung buka di browser

```bash
# Windows
start index.html

# macOS / Linux
open index.html
```

### Dengan local server (direkomendasikan)

```bash
# npx serve
npx -y serve .

# Python
python -m http.server 8080

# Node http-server
npx http-server . -p 8080
```

Buka browser ke `http://localhost:3000`

---

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `>= 1280px` | Desktop & laptop |
| `<= 1280px` | Laptop kecil |
| `<= 1024px` | Tablet landscape |
| `<= 768px` | Tablet portrait & HP landscape |
| `<= 480px` | HP portrait |
| `<= 375px` | iPhone SE & HP kecil |

---

## Fitur Produk Clipper

1. **AI Scene Detection** — Deteksi momen terbaik otomatis (akurasi 97.4%)
2. **Trim Presisi Frame** — Potong video dengan akurasi per-frame
3. **Export Multi-Format** — MP4, GIF, WebM, MOV, AVI
4. **Subtitle Generator** — Auto-generate subtitle 30+ bahasa
5. **Real-time Preview** — Lihat perubahan tanpa render ulang
6. **Batch Processing** — Proses ratusan video sekaligus
7. **Cloud Sync** — Simpan & akses dari mana saja

---

## Design System

```css
/* Color Palette */
--c-primary:    #4f46e5;  /* Indigo        */
--c-accent:     #6366f1;  /* Violet        */
--c-success:    #10b981;  /* Emerald       */
--c-text:       #0f1623;  /* Near Black    */
--c-text-2:     #4a5568;  /* Gray 600      */
--c-bg:         #ffffff;  /* White         */
--c-bg-subtle:  #f8f9fc;  /* Off White     */

/* Typography */
font-family: 'Plus Jakarta Sans', 'Inter', system-ui;
```

---

## Teknologi

- **HTML5** — Semantic markup, accessibility attributes (aria-*)
- **CSS3** — Custom properties, Grid, Flexbox, Animations, Backdrop-filter
- **JavaScript ES6+** — Intersection Observer API, DOM manipulation, CSS transitions
- **Google Fonts** — Plus Jakarta Sans, Inter

---

## Lisensi

Proyek ini menggunakan lisensi **MIT** — bebas digunakan, dimodifikasi, dan didistribusikan.

---

<div align="center">

**Dibuat dengan semangat untuk komunitas kreator konten Indonesia**

Kalau kamu suka proyek ini, jangan lupa kasih **Star**!

</div>
