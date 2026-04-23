import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id.replace('c-', '')]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert('Mohon isi nama, email, dan pesan Anda.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Masukkan alamat email yang valid.');
            return;
        }
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSent(false), 3000);
        }, 1200);
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-eyebrow"><span className="section-eyebrow-dot"></span>Hubungi Kami<span className="section-eyebrow-dot"></span></div>
                    <h2 className="section-title">Temukan <em>Jonkira</em></h2>
                    <p className="section-subtitle">Kami dengan senang hati menjawab pertanyaan dan saran Anda.</p>
                    <div className="section-divider"><div className="section-divider-line"></div><span className="section-divider-kanji">所</span><div className="section-divider-line"></div></div>
                </div>
                <div className="contact-layout">
                    <div className="reveal-left">
                        <div className="contact-info-card">
                            <h3>Info Kontak</h3>
                            <div className="contact-item"><div className="contact-icon">📍</div><div><div className="contact-label">Alamat</div><div className="contact-value">Boulevard Raya No.21 no. 20, Jaka Setia<br /></div>Kec. Bekasi Sel, Kota Bekasi.</div></div>
                            <div className="contact-item"><div className="contact-icon">📞</div><div><div className="contact-label">Telepon</div><div className="contact-value"><a href="tel:+6289678924234">+62 89678924234</a></div></div></div>
                            <div className="contact-item"><div className="contact-icon">📧</div><div><div className="contact-label">Email</div><div className="contact-value"><a href="mailto:jejen.profile@gmail.com">Jonkira</a></div></div></div>
                            <div className="contact-item"><div className="contact-icon">🕐</div><div><div className="contact-label">Jam Buka</div><div className="contact-value">Sen–Kam: 11:00–22:00<br />Jum: 11:00–23:00<br />Sab: 10:00–23:00<br />Min: 10:00–21:00</div></div></div>
                            <div className="social-links">
                                <a href="https://www.instagram.com/onyourjae_n?igsh=Y3FpMDFlNDhocWdq" target="_blank" className="social-link" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
                                <a href="https://www.tiktok.com/@jeco1only?_r=1&_t=ZS-95m4hiO1fRl" target="_blank" className="social-link" aria-label="TikTok"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.59a8.27 8.27 0 004.84 1.54V6.69a4.85 4.85 0 01-1.07-.0z" /></svg></a>
                                <a href="https://www.facebook.com/share/1J4PCNTXZC/" target="_blank" className="social-link" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
                                <a href="https://gofood.link/a/EyVgD67" target="_blank" className="social-link" aria-label="GoFood">🛵</a>
                            </div>
                        </div>
                    </div>
                    <div className="reveal-right">
                        <div className="map-wrap">
                            <iframe
                                title="Lokasi Jonkira Ramen Halal"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126908.60970214856!2d106.82202269726561!3d-6.277657899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d63e6edf8eb%3A0xe0159be881153ef!2sJonkira%20Ramen%20Halal!5e0!3m2!1sen!2sid!4v1776933723716!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
                <div className="contact-form-section">
                    <div className="contact-form-wrap">
                        <div className="reveal-left">
                            <p className="contact-form-lead">Kirim Pesan<br />untuk <em>Kami</em></p>
                            <p className="contact-form-sub">Punya pertanyaan, saran, atau ingin berkolaborasi? Kami selalu senang mendengar dari Anda.</p>
                        </div>
                        <div className="reveal-right">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group"><label htmlFor="c-name">Nama *</label><input type="text" id="c-name" value={formData.name} onChange={handleChange} required /></div>
                                    <div className="form-group"><label htmlFor="c-email">Email *</label><input type="email" id="c-email" value={formData.email} onChange={handleChange} required /></div>
                                </div>
                                <div className="form-group"><label htmlFor="c-subject">Subjek</label><input type="text" id="c-subject" value={formData.subject} onChange={handleChange} /></div>
                                <div className="form-group"><label htmlFor="c-message">Pesan *</label><textarea id="c-message" value={formData.message} onChange={handleChange} style={{ minHeight: '120px' }} required></textarea></div>
                                <button type="submit" className="form-submit" disabled={sending}>
                                    {sending ? 'Mengirim...' : sent ? '✓ Pesan Terkirim!' : 'Kirim Pesan →'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;