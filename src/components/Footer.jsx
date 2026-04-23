import React from 'react';

const Footer = () => {
    const handleNewsletter = (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input[type="email"]');
        if (input.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            const btn = e.target.querySelector('button');
            btn.textContent = '✓';
            btn.style.background = '#2E7D32';
            input.value = '';
            setTimeout(() => {
                btn.textContent = 'Daftar';
                btn.style.background = '';
            }, 2500);
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#hero" className="logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                            <div className="logo-kanji">麺</div>
                            <div className="logo-text"><span className="name">JONKIRA RAMEN</span><span className="tagline">魂のラーメン • Soul Ramen</span></div>
                        </a>
                        <p>Setiap mangkuk adalah janji kami – kaldu penuh cinta, mie segar setiap hari, dan kehangatan yang selalu membuat Anda kembali lagi.</p>
                        <div className="footer-newsletter">
                            <div className="footer-newsletter-label">Newsletter – Promo & Update Terbaru</div>
                            <form className="newsletter-form" onSubmit={handleNewsletter}>
                                <input type="email" placeholder="Email Anda" required />
                                <button type="submit">Daftar</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-col"><div className="footer-col-title">Navigasi</div>
                        <a href="#hero">Beranda</a><a href="#chefs-special">Chef's Special</a><a href="#menu">Menu</a>
                        <a href="#about">Tentang Kami</a><a href="#gallery">Galeri</a><a href="#reservation">Reservasi</a><a href="#contact">Kontak</a>
                    </div>
                    <div className="footer-col"><div className="footer-col-title">Menu Unggulan</div>
                        <a href="#menu">Tonkotsu Deluxe</a><a href="#menu">Miso Ramen Hokkaido</a><a href="#menu">Shoyu Ramen Classic</a>
                        <a href="#menu">Tantan Men Spicy</a><a href="#menu">Yaki Gyoza</a><a href="#menu">Matcha Cheesecake</a>
                    </div>
                    <div className="footer-col"><div className="footer-col-title">Jam Buka</div>
                        <div className="footer-hours-row"><span className="day">Sen – Kam</span><span className="time">11:00–22:00</span></div>
                        <div className="footer-hours-row"><span className="day">Jumat</span><span className="time">11:00–23:00</span></div>
                        <div className="footer-hours-row"><span className="day">Sabtu</span><span className="time">10:00–23:00</span></div>
                        <div className="footer-hours-row"><span className="day">Minggu</span><span className="time">10:00–21:00</span></div>
                        <div className="footer-col-title" style={{ marginTop: '16px' }}>Ikuti Kami</div>
                        <div className="social-links" style={{ marginTop: '8px', paddingTop: 0, border: 'none' }}>
                            <a
                                href="https://www.instagram.com/onyourjae_n?igsh=Y3FpMDFlNDhocWdq"
                                target="_blank"
                                className="social-link"
                                aria-label="Instagram"
                                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a
                                href="https://www.tiktok.com/@jeco1only?_r=1&_t=ZS-95m4hiO1fRl"
                                target="_blank"
                                className="social-link"
                                aria-label="TikTok"
                                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.59a8.27 8.27 0 004.84 1.54V6.69a4.85 4.85 0 01-1.07-.0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Jonkira Ramen. All rights reserved. 魂のラーメン</p>
                <div className="footer-bottom-links"><a href="#">Kebijakan Privasi</a><a href="#">Syarat & Ketentuan</a><a href="#">Sitemap</a></div>
            </div>
        </footer>
    );
};

export default Footer;