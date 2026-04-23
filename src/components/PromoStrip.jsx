import React from 'react';

const PromoStrip = () => {
    const items = [
        "Chef's Special: Tonkotsu Deluxe",
        "Gratis Gyoza untuk Pemesanan di atas Rp150.000",
        "Happy Hour 14:00 – 17:00 Setiap Hari",
        "Matcha Latte Premium Terbaik di Jakarta",
        "Tersedia Paket Keluarga & Group"
    ];
    // Duplicate for infinite scroll
    const allItems = [...items, ...items];

    return (
        <div className="promo-strip">
            <div className="promo-track">
                {allItems.map((item, idx) => (
                    <div className="promo-item" key={idx}>
                        <span className="promo-item-dot">✦</span> {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromoStrip;