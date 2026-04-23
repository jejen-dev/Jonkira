import React, { useState, useEffect } from 'react';

const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=85', thumb: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=75', caption: 'Tonkotsu Ramen – Signature Dish', className: 'tall' },
    { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=85', thumb: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=70', caption: 'Interior Jonkira Ramen – Nuansa Jepang', className: '' },
    { src: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&q=85', thumb: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&q=70', caption: "Chef's Special – Tonkotsu Deluxe", className: '' },
    { src: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=85', thumb: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600&q=70', caption: 'Miso Ramen Hokkaido', className: 'wide' },
    { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=85', thumb: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=70', caption: 'Yaki Gyoza – Crispy & Juicy', className: '' },
    { src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=85', thumb: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=70', caption: 'Matcha Latte Premium – Ritual Pagi', className: '' },
    { src: 'https://images.unsplash.com/photo-1736195676924-162ed0fac50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumb: 'https://images.unsplash.com/photo-1736195676924-162ed0fac50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Matcha Cheesecake – Dessert Istimewa', className: '' }
];

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxOpen]);

    return (
        <section id="gallery">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-eyebrow"><span className="section-eyebrow-dot"></span>Momen Berharga<span className="section-eyebrow-dot"></span></div>
                    <h2 className="section-title">Galeri <em>Jonkira</em></h2>
                    <p className="section-subtitle">Setiap sudut restoran kami menceritakan kisah cinta terhadap budaya Jepang.</p>
                    <div className="section-divider"><div className="section-divider-line"></div><span className="section-divider-kanji">美</span><div className="section-divider-line"></div></div>
                </div>
                <div className="gallery-grid reveal">
                    {galleryItems.map((item, idx) => (
                        <div key={idx} className={`gallery-item ${item.className}`} onClick={() => openLightbox(idx)}>
                            <img src={item.thumb} alt={item.caption} loading="lazy" />
                            <div className="gallery-item-overlay">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lightboxOpen && (
                <div className="lightbox open" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                    <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
                    <img className="lightbox-img" src={galleryItems[currentIndex].src} alt={galleryItems[currentIndex].caption} onClick={(e) => e.stopPropagation()} />
                    <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
                    <div className="lightbox-caption">{galleryItems[currentIndex].caption}</div>
                </div>
            )}
        </section>
    );
};

export default Gallery;