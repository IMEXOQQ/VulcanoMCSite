import React from 'react';

const Navbar = ({ currentPage, setPage, user, onLogout }) => (
    <nav className="navbar">
        <div className="logo" onClick={() => setPage('home')}>Vulcano<span>MC</span></div>
        <ul className="nav-links">
            <li className={currentPage === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Главная</li>
            <li className={currentPage === 'map' ? 'active' : ''} onClick={() => setPage('map')}>Карта</li>
            <li className={currentPage === 'shop' ? 'active' : ''} onClick={() => setPage('shop')}>Донат</li>
            <li className={currentPage === 'leaderboard' ? 'active' : ''} onClick={() => setPage('leaderboard')}>Топ</li>
            {user ? (
                <>
                    <li className={currentPage === 'profile' ? 'active' : ''} onClick={() => setPage('profile')}>Профиль</li>
                    <li className="logout-btn" onClick={onLogout}>Выход</li>
                </>
            ) : (
                <li className={currentPage === 'auth' ? 'active' : ''} onClick={() => setPage('auth')}>Войти</li>
            )}
        </ul>
        <style>{`
            .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 5%; background: var(--surface-color); border-bottom: 2px solid var(--primary-color); box-shadow: var(--glow); position: sticky; top: 0; z-index: 1000; }
            .logo { font-size: 1.5rem; font-weight: bold; cursor: pointer; }
            .logo span { color: var(--primary-color); }
            .nav-links { display: flex; gap: 20px; }
            .nav-links li { cursor: pointer; font-weight: 500; transition: color 0.3s; padding: 5px 10px; }
            .nav-links li:hover, .nav-links li.active { color: var(--primary-color); }
            .logout-btn { color: var(--accent-color) !important; }
        `}</style>
    </nav>
);

export default Navbar;
