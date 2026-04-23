import React from 'react';

const Hero = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const navH = document.querySelector('.navbar')?.offsetHeight || 70;
            const topBarH = document.querySelector('.topbar')?.offsetHeight || 0;
            const y = target.getBoundingClientRect().top + window.scrollY - navH - topBarH;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <div className="hero-eyebrow-line"></div>
                        <span>Autentik Ramen Jepang Sejak 2010</span>
                    </div>
                    <h1 className="hero-title">
                        Rasa yang<br /><em>Menyentuh Jiwa</em>
                    </h1>
                    <p className="hero-jp-subtitle">魂のこもった一杯をあなたへ</p>
                    <p className="hero-subtitle">
                        Setiap mangkuk ramen kami dimasak dengan cinta, kaldu yang direbus selama 18 jam,
                        dan bahan pilihan terbaik dari Jepang & lokal premium.
                    </p>
                    <div className="hero-actions">
                        <a href="#menu" className="btn-primary" onClick={(e) => handleScroll(e, '#menu')}>
                            <span>Lihat Menu</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a href="#reservation" className="btn-outline" onClick={(e) => handleScroll(e, '#reservation')}>
                            <span>Reservasi Meja</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-kanji" aria-hidden="true">魂麺</div>
            <div className="hero-stats">
                <div className="hero-stat"><span className="hero-stat-num">18+</span><span className="hero-stat-label">Jam Kaldu</span></div>
                <div className="hero-stat"><span className="hero-stat-num">30+</span><span className="hero-stat-label">Jenis Menu</span></div>
                <div className="hero-stat"><span className="hero-stat-num">15K+</span><span className="hero-stat-label">Pelanggan Puas</span></div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;