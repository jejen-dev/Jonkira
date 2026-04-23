import React from 'react';

const testimonials = [
    {
        name: "Siti Rahayu",
        role: "Food Blogger · Jakarta",
        text: "Tonkotsu di sini beneran juara! Kuahnya creamy banget, dagingnya empuk, dan telur ramennya sempurna. Rasanya persis kayak di Hakata, Fukuoka. Wajib balik lagi!",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
    },
    {
        name: "Budi Santoso",
        role: "Pengusaha · Tangerang",
        text: "Miso Ramen-nya luar biasa! Tempatnya juga cozy banget, vibes Jepang-nya dapet. Gyoza-nya crispy di luar, juicy di dalam. Sudah 5x ke sini dan nggak pernah kecewa.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
        name: "Rina Putri",
        role: "Designer · Bandung",
        text: "Sebagai vegetarian, susah cari ramen yang cocok. Di sini Vegetarian Shio-nya enaaaak banget! Broth-nya kaya rasa meski tanpa daging. Matcha latte-nya juga top!",
        stars: 4.5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-eyebrow"><span className="section-eyebrow-dot"></span>Kata Mereka<span className="section-eyebrow-dot"></span></div>
                    <h2 className="section-title">Cerita dari <em>Pelanggan Kami</em></h2>
                    <p className="section-subtitle">Lebih dari 15.000 pelanggan telah merasakan kehangatan ramen Jonkira.</p>
                    <div className="section-divider"><div className="section-divider-line"></div><span className="section-divider-kanji">声</span><div className="section-divider-line"></div></div>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div className="testimonial-card reveal" key={idx} style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}>
                            <div className="stars">{'★'.repeat(Math.floor(t.stars))}{t.stars % 1 ? '½' : ''}</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <img className="testimonial-avatar" src={t.avatar} alt={t.name} loading="lazy" />
                                <div><div className="testimonial-name">{t.name}</div><div className="testimonial-role">{t.role}</div></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;