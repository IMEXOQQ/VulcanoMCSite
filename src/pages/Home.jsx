import React, { useState, useEffect } from 'react';
import { NEWS_DATA } from '../data/mockData';

const Home = () => {
    const [status, setStatus] = useState(null);
    useEffect(() => {
        fetch('https://api.mcsrvstat.us/3/vulcanomc.ru')
            .then(res => res.json()).then(data => setStatus(data));
    }, []);

    return (
        <div className="page">
            <header className="hero">
                <h1>VulcanoMC</h1>
                <p>Твое приключение начинается здесь!</p>
                <div className="status-widget">
                    <div className={`indicator ${status?.online ? 'online' : 'offline'}`}></div>
                    <span>{status ? (status.online ? `В сети: ${status.players.online}` : 'Офлайн') : 'Загрузка...'}</span>
                    <span className="ip">vulcanomc.ru</span>
                </div>
            </header>
            <h2>Последние новости</h2>
            <div className="news-grid">
            {[...NEWS_DATA].sort((a, b) => new Date(b.date) - new Date(a.date)).map(item => (
                <div key={item.id} className="news-card">
                    <h3>{item.title}</h3>
                        <span className="date">{item.date}</span>
                    <p>{item.content}</p>
                </div>
            ))}
            </div>
            <style>{`
                .hero { text-align: center; padding: 4rem 1rem; background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('./bg.jpg'); background-size: cover; background-position: center; border-radius: 12px; margin-bottom: 3rem; border: 1px solid var(--primary-color); }
                .hero h1 { font-size: 3rem; margin-bottom: 1rem; color: var(--secondary-color); }
                .status-widget { display: inline-flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.8); padding: 10px 20px; border-radius: 30px; margin-top: 2rem; border: 1px solid var(--primary-color); }
                .indicator { width: 12px; height: 12px; border-radius: 50%; }
                .online { background: #4caf50; box-shadow: 0 0 10px #4caf50; }
                .offline { background: #f44336; }
                .ip { font-weight: bold; color: var(--primary-color); margin-left: 10px; }

                .news-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 1.5rem; }
                .news-card { background: var(--surface-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--primary-color); }
                .news-card h3 { color: var(--secondary-color); margin-bottom: 0.5rem; }
                .date { font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 1rem; }
            `}</style>
        </div>
    );
};

export default Home;
