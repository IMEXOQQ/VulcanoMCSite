import React from 'react';
import { SHOP_ITEMS } from '../data/mockData';

const Shop = ({ onBuy, balance }) => (
    <div className="page">
        <div className="shop-header">
            <h1>Спонсорство</h1>
            <div className="balance-indicator">Баланс: <span>{balance} ₽</span></div>
        </div>
        <div className="items-grid">
            {SHOP_ITEMS.map(item => (
                <div key={item.id} className="item-card">
                    <img src={item.image} className="tier-img" alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <div className="item-footer">
                        <span className="price">{item.price} ₽</span>
                        <button className="buy-btn" onClick={() => onBuy(item)}>Купить</button>
                    </div>
                </div>
            ))}
        </div>
        <style>{`
            .shop-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
            .balance-indicator { background: var(--surface-color); padding: 10px 20px; border-radius: 8px; border: 1px solid var(--secondary-color); }
            .balance-indicator span { color: var(--secondary-color); font-weight: bold; }
            .items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
            .item-card { background: var(--surface-color); padding: 1.5rem; border-radius: 12px; position: relative; border: 1px solid #333; transition: all 0.3s ease; display: flex; flex-direction: column; align-items: center; text-align: center; }
            .item-card:hover { transform: translateY(-10px); border-color: var(--secondary-color); }
            .tier-img { width: 80px; height: 80px; margin-bottom: 1rem; object-fit: contain; }
            .item-footer { display: flex; flex-direction: column; gap: 10px; margin-top: auto; width: 100%; padding-top: 1rem; }
            .price { font-size: 1.2rem; font-weight: bold; color: white; }
            .buy-btn { background: var(--primary-color); color: white; padding: 10px; font-weight: bold; width: 100%; }
        `}</style>
    </div>
);

export default Shop;
