import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Map from './pages/Map';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import './App.css';

const App = () => {
    const [page, setPage] = useState('home');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    
    const handleLogin = (username) => {
        const u = {
            username: username || 'Player', 
            balance: 1000, 
            rank: 'Игрок'
        };
        setUser(u); 
        localStorage.setItem('user', JSON.stringify(u)); 
        setPage('profile'); 
    };
    
    const handleLogout = () => { 
        setUser(null); 
        localStorage.removeItem('user'); 
        setPage('home'); 
    };
    
    const handleTopUp = () => {
        const amount = prompt('Введите сумму пополнения (₽):', '500');
        if (amount && !isNaN(amount) && amount > 0) {
            const updated = {...user, balance: user.balance + parseInt(amount)};
            setUser(updated);
            localStorage.setItem('user', JSON.stringify(updated));
            alert(`Баланс успешно пополнен на ${amount} ₽!`);
        }
    };

    const handleBuy = (item) => {
        if (!user) return alert('Войдите в аккаунт!');
        if (user.balance < item.price) return alert('Недостаточно средств!');
        
        const newRank = item.name.includes(':') ? item.name.split(': ')[1] : item.name;
        
        const updated = {
            ...user, 
            balance: user.balance - item.price,
            rank: newRank
        };
        
        setUser(updated); 
        localStorage.setItem('user', JSON.stringify(updated));
        alert(`Успешно куплено: ${item.name}`);
    };

    return (
        <div className="app-container">
            <Navbar currentPage={page} setPage={setPage} user={user} onLogout={handleLogout} />
            <div className="page-content">
                {page === 'home' && <Home />}
                {page === 'map' && <Map />}
                {page === 'shop' && <Shop onBuy={handleBuy} balance={user?.balance || 0} />}
                {page === 'leaderboard' && <Leaderboard />}
                {page === 'auth' && <Auth onLogin={handleLogin} />}
                {page === 'profile' && user && <Profile user={user} onTopUp={handleTopUp} />}
            </div>
            <Footer />
        </div>
    );
};

export default App;
