import React, { useState } from 'react';

const menuData = [
    { category: 'ramen', name: 'Shoyu Ramen Classic', jp: '醤油ラーメン', desc: 'Kaldu ayam & dashi jernih berbumbu kecap asin premium Kikkoman.', price: 65000, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=75', popular: true },
    { category: 'ramen', name: 'Miso Ramen Hokkaido', jp: '北海道味噌ラーメン', desc: 'Pasta miso putih & merah fermentasi autentik berpadu kaldu babi.', price: 72000, img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&q=75', popular: true, spicy: true },
    { category: 'ramen', name: 'Tonkotsu Deluxe', jp: '特上豚骨ラーメン', desc: 'Kaldu tulang babi murni 18 jam, creamy & kaya umami.', price: 89000, img: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&q=75', popular: true, chef: true },
    { category: 'ramen', name: 'Tantan Men Spicy', jp: '担々麺', desc: 'Ramen Sichuan khas dengan pasta wijen & cabai mala.', price: 75000, img: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&q=75', spicy: true, new: true },
    { category: 'ramen', name: 'Vegetarian Shio', jp: '塩ラーメン・ベジタリアン', desc: 'Kaldu konbu & shiitake jernih dengan sentuhan garam laut premium.', price: 62000, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=75', veg: true },
    { category: 'donburi', name: 'Gyudon Premium', jp: '牛丼プレミアム', desc: 'Irisan daging sapi wagyu lokal ditumis dengan bawang dan saus dashi manis.', price: 78000, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=75', popular: true },
    { category: 'donburi', name: 'Oyakodon Spesial', jp: '親子丼スペシャル', desc: 'Ayam kampung & telur omega-3 masak dalam saus dashi manis.', price: 65000, img: 'https://images.unsplash.com/photo-1761984336917-615bc6f7d4fa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', new: true },
    { category: 'side', name: 'Yaki Gyoza (6 pcs)', jp: '焼き餃子', desc: 'Kulit tipis renyah dengan isian daging babi & kol segar.', price: 38000, img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=75', popular: true },
    { category: 'side', name: 'Chicken Karaage', jp: '鶏の唐揚げ', desc: 'Potongan ayam paha bermarinated saus shoyu & jahe.', price: 45000, img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=75', popular: true },
    { category: 'dessert', name: 'Matcha Cheesecake', jp: '抹茶チーズケーキ', desc: 'Cheesecake lembut dengan matcha Uji grade A.', price: 42000, img: 'https://images.unsplash.com/photo-1736195676924-162ed0fac50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', new: true },
    { category: 'dessert', name: 'Dorayaki Spesial', jp: 'どら焼き', desc: 'Pancake Jepang lembut berisi anko buatan sendiri.', price: 28000, img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=75' },
    { category: 'drink', name: 'Matcha Latte Premium', jp: '抹茶ラテ', desc: 'Matcha ceremonial grade Uji, Kyoto, dipadukan susu full cream oat.', price: 32000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=75', popular: true },
    { category: 'drink', name: 'Ramune Soda Jepang', jp: 'ラムネ', desc: 'Minuman soda berkarbonat khas Jepang dalam botol unik.', price: 25000, img: 'https://images.unsplash.com/photo-1604259596747-2377448d916d?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', new: true }
];

const Menu = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        { key: 'all', label: 'Semua Menu' },
        { key: 'ramen', label: '🍜 Ramen' },
        { key: 'donburi', label: '🍚 Donburi' },
        { key: 'side', label: '🥟 Gyoza & Side' },
        { key: 'dessert', label: '🍡 Dessert' },
        { key: 'drink', label: '🍵 Minuman' }
    ];

    const filteredMenu = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);

    const orderWA = (name, price) => {
        const msg = encodeURIComponent(`Halo Jonkira Ramen! 🍜\n\nSaya ingin memesan:\n• ${name} x1 = Rp${price.toLocaleString('id-ID')}\n\nMohon konfirmasinya. Terima kasih! 🙏🏻`);
        window.open(`https://wa.me/6289678924234?text=${msg}`, '_blank');
    };

    return (
        <section id="menu">
            <div className="container">
                <div className="section-header reveal">
                    <div className="section-eyebrow"><span className="section-eyebrow-dot"></span>Pilihan Terbaik Kami<span className="section-eyebrow-dot"></span></div>
                    <h2 className="section-title">Menu <em>Jonkira</em></h2>
                    <p className="section-subtitle">Dari ramen klasik hingga kreasi modern, setiap hidangan menggunakan bahan pilihan premium.</p>
                    <div className="section-divider"><div className="section-divider-line"></div><span className="section-divider-kanji">麺</span><div className="section-divider-line"></div></div>
                </div>
                <div className="menu-filter">
                    {categories.map(cat => (
                        <button key={cat.key} className={`filter-btn ${filter === cat.key ? 'active' : ''}`} onClick={() => setFilter(cat.key)}>{cat.label}</button>
                    ))}
                </div>
                <div className="menu-grid">
                    {filteredMenu.map((item, idx) => (
                        <div className="menu-card" key={idx} data-category={item.category}>
                            <div className="menu-card-img">
                                <img src={item.img} alt={item.name} loading="lazy" />
                                <div className="menu-card-img-overlay"></div>
                                <div className="menu-badges">
                                    {item.popular && <span className="badge badge-popular">Popular</span>}
                                    {item.new && <span className="badge badge-new">Baru</span>}
                                    {item.spicy && <span className="badge badge-spicy">🌶 Pedas</span>}
                                    {item.veg && <span className="badge badge-veg">🌱 Veg</span>}
                                    {item.chef && <span className="badge badge-new">Chef's</span>}
                                </div>
                            </div>
                            <div className="menu-card-body">
                                <div className="menu-card-category">{item.category === 'ramen' ? 'Ramen' : item.category === 'donburi' ? 'Donburi' : item.category === 'side' ? 'Gyoza & Side' : item.category === 'dessert' ? 'Dessert Jepang' : 'Minuman'}</div>
                                <div className="menu-card-name">{item.name}</div>
                                <div className="menu-card-jp">{item.jp}</div>
                                <p className="menu-card-desc">{item.desc}</p>
                                <div className="menu-card-footer">
                                    <div className="menu-price">Rp{item.price.toLocaleString('id-ID')}</div>
                                    <button className="btn-order" onClick={() => orderWA(item.name, item.price)}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;