import React, { useState, useEffect } from 'react';

const Reservation = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', guests: '', notes: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('res-date')?.setAttribute('min', today);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id.replace('res-', '')]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, date, time, guests, notes } = formData;
        if (!name || !phone || !date || !time || !guests) {
            alert('Mohon lengkapi semua field yang wajib diisi (*).');
            return;
        }
        const msg = encodeURIComponent(
            `Reservasi Jonkira Ramen 🍜\n\nNama: ${name}\nTelepon: ${phone}\nTanggal: ${date}\nJam: ${time}\nTamu: ${guests}${notes ? `\nPermintaan: ${notes}` : ''}\n\nMohon konfirmasinya. Terima kasih!`
        );
        window.open(`https://wa.me/6289678924234?text=${msg}`, '_blank');
        setSubmitted(true);
    };

    // Jam operasional untuk highlight hari ini
    const weekdays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const todayIndex = new Date().getDay();
    const hours = [
        { day: 'Senin', time: '11:00 – 22:00' },
        { day: 'Selasa', time: '11:00 – 22:00' },
        { day: 'Rabu', time: '11:00 – 22:00' },
        { day: 'Kamis', time: '11:00 – 22:00' },
        { day: 'Jumat', time: '11:00 – 23:00' },
        { day: 'Sabtu', time: '10:00 – 23:00' },
        { day: 'Minggu', time: '10:00 – 21:00' }
    ];

    return (
        <section id="reservation">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-eyebrow"><span className="section-eyebrow-dot"></span>Reservasi Meja<span className="section-eyebrow-dot"></span></div>
                    <h2 className="section-title">Pesan Meja <em>Anda</em></h2>
                    <p className="section-subtitle">Pastikan pengalaman makan malam Anda bersama kami sempurna dengan reservasi terlebih dahulu.</p>
                    <div className="section-divider"><div className="section-divider-line"></div><span className="section-divider-kanji">予</span><div className="section-divider-line"></div></div>
                </div>
                <div className="reservation-layout">
                    <div className="reveal-left">
                        <div className="reservation-info">
                            <span className="label">Informasi Reservasi</span>
                            <h2>Nikmati Momen<br />Tak Terlupakan</h2>
                            <p>Kami menerima reservasi untuk makan siang dan malam. Untuk kelompok di atas 10 orang, hubungi kami langsung via telepon atau WhatsApp.</p>
                            <div className="hours-table">
                                {hours.map((h, idx) => (
                                    <div key={idx} className={`hours-row ${weekdays[todayIndex] === h.day ? 'today' : ''}`}>
                                        <span className="day">{h.day}</span><span className="time">{h.time}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="wa-btn-wrap">
                                <a href="https://wa.me/6289678924234?text=Halo%20Jonkira%20Ramen!%20Saya%20ingin%20melakukan%20reservasi%20meja." target="_blank" className="btn-whatsapp">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    Reservasi via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-form reveal-right">
                        {!submitted ? (
                            <>
                                <h3 className="form-title">🍜 Form Reservasi Online</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group"><label htmlFor="res-name">Nama Lengkap *</label><input type="text" id="res-name" onChange={handleChange} required /></div>
                                        <div className="form-group"><label htmlFor="res-phone">Nomor HP / WA *</label><input type="tel" id="res-phone" onChange={handleChange} required /></div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group"><label htmlFor="res-date">Tanggal *</label><input type="date" id="res-date" onChange={handleChange} required /></div>
                                        <div className="form-group"><label htmlFor="res-time">Jam *</label>
                                            <select id="res-time" onChange={handleChange} required>
                                                <option value="">Pilih Jam</option>
                                                <option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option>
                                                <option>13:00</option><option>13:30</option><option>14:00</option><option>18:00</option>
                                                <option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option>
                                                <option>20:30</option><option>21:00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="res-guests">Jumlah Tamu *</label>
                                        <select id="res-guests" onChange={handleChange} required>
                                            <option value="">Pilih Jumlah</option>
                                            <option>1 orang</option><option>2 orang</option><option>3 orang</option><option>4 orang</option>
                                            <option>5 orang</option><option>6 orang</option><option>7–10 orang</option>
                                            <option>Lebih dari 10 orang (hubungi kami)</option>
                                        </select>
                                    </div>
                                    <div className="form-group"><label htmlFor="res-notes">Permintaan Khusus</label><textarea id="res-notes" onChange={handleChange}></textarea></div>
                                    <button type="submit" className="form-submit">Kirim Reservasi</button>
                                </form>
                            </>
                        ) : (
                            <div className="form-success">
                                <div className="success-icon">🎉</div>
                                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', marginBottom: '8px' }}>Reservasi Terkirim!</h3>
                                <p>Tim kami akan menghubungi Anda dalam 30 menit untuk konfirmasi. Sampai jumpa di Jonkira! 🍜</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;