import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-images reveal-left">
                        <div className="about-img-large"><img src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80" alt="Interior Jonkira Ramen" loading="lazy" /></div>
                        <div className="about-img-sm"><img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=75" alt="Chef memasak ramen" loading="lazy" /></div>
                        <div className="about-img-sm"><img src="https://images.unsplash.com/photo-1706128999187-327ac1ef054e?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Detail bahan ramen" loading="lazy" /></div>
                        <div className="about-years"><strong>14</strong><span>Tahun<br />Berpengalaman</span></div>
                    </div>
                    <div className="about-content reveal-right">
                        <span className="label">✦ Tentang Kami</span>
                        <h2>Dari Hakata<br />ke Jakarta, dengan <em>Jiwa</em></h2>
                        <p>Jonkira Ramen lahir pada 2010 dari impian seorang anak muda Jakarta yang jatuh cinta dengan semangkuk ramen di sebuah kedai kecil di Hakata, Fukuoka. Nama "Jonkira" – kombinasi nama sang pendiri dengan kata Jepang "kira" (輝ら, cahaya bersinar) – menjadi janji: setiap mangkuk harus menerangi hari Anda.</p>
                        <blockquote className="about-philosophy">"Satu mangkuk ramen yang baik bukan sekadar makanan – ia adalah cerita, kehangatan, dan jiwa yang mengalir bersama kaldu selama 18 jam."</blockquote>
                        <p>Kami menggunakan mie segar berkualitas tinggi yang dibuat setiap pagi, kaldu yang tidak pernah dikompromikan, dan topping premium yang dipilih dengan cermat.</p>
                        <div className="about-values">
                            <div className="value-card"><span className="value-icon">🍜</span><span className="value-label">Mie Segar Harian</span></div>
                            <div className="value-card"><span className="value-icon">⏱️</span><span className="value-label">Kaldu 18 Jam</span></div>
                            <div className="value-card"><span className="value-icon">🌿</span><span className="value-label">Bahan Premium</span></div>
                        </div>
                        <div className="chef-info">
                            <img className="chef-photo" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&q=80" alt="Head Chef" loading="lazy" />
                            <div><div className="chef-name">Chef Hiroshi Tanaka</div><div className="chef-title">Head Chef & Co-Founder</div><div className="chef-desc">Lulusan culinary school Tokyo dengan 20 tahun pengalaman.</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;