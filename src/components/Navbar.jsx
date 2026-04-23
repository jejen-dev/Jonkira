import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [status, setStatus] = useState({ text: 'Memeriksa...', open: false });

    useEffect(() => {
        const updateStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();
            const min = now.getMinutes();
            const time = hour + min / 60;
            const schedule = {
                0: [10, 21], 1: [11, 22], 2: [11, 22], 3: [11, 22],
                4: [11, 22], 5: [11, 23], 6: [10, 23]
            };
            const [open, close] = schedule[day];
            const isOpen = time >= open && time < close;
            setStatus({
                open: isOpen,
                text: isOpen ? `Buka · Tutup ${close}:00` : `Tutup · Buka ${schedule[(day + 1) % 7][0]}:00`
            });
        };
        updateStatus();
        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const navH = document.querySelector('.navbar')?.offsetHeight || 70;
            const topBarH = document.querySelector('.topbar')?.offsetHeight || 0;
            const y = target.getBoundingClientRect().top + window.scrollY - navH - topBarH;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <nav className="navbar" id="navbar">
            <div className="navbar-inner">
                <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
                    <div className="logo-kanji">麺</div>
                    <div className="logo-text">
                        <span className="name">JONKIRA RAMEN</span>
                        <span className="tagline">魂のラーメン • Soul Ramen</span>
                    </div>
                </a>

                <ul className="nav-links">
                    <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Beranda</a></li>
                    <li><a href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>Menu</a></li>
                    <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Tentang Kami</a></li>
                    <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Galeri</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Kontak</a></li>
                </ul>

                <div className="nav-actions">
                    <div className={`status-badge ${status.open ? 'open' : 'closed'}`}>
                        <span className="status-dot"></span>
                        <span id="statusText">{status.text}</span>
                    </div>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDark ? '🌙' : '☀️'}
                    </button>
                    <a href="#reservation" className="btn-reserve-nav" onClick={(e) => handleNavClick(e, '#reservation')}>Reservasi</a>
                    <button className={`hamburger ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Beranda</a>
                <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>Menu</a>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Tentang Kami</a>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Galeri</a>
                <a href="#reservation" onClick={(e) => handleNavClick(e, '#reservation')}>Reservasi</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Kontak</a>
            </div>
        </nav>
    );
};

export default Navbar;