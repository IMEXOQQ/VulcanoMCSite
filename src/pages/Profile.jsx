import React from 'react';

const Profile = ({ user, onTopUp }) => (
    <div className="page">
        <div className="profile-header">
            <div className="avatar-placeholder">
                <img src={`https://mc-heads.net/avatar/${user.username}/100`} alt="Avatar" />
            </div>
            <div style={{flexGrow: 1}}>
                <h1>{user.username}</h1>
                <span className="rank-badge">{user.rank}</span>
            </div>
            <button className="buy-btn" onClick={onTopUp} style={{width: 'auto', padding: '10px 20px'}}>Пополнить баланс</button>
        </div>
        <div className="stats-grid">
            <div className="stat-card"><span>Баланс</span><h3>{user.balance} ₽</h3></div>
            <div className="stat-card"><span>Время</span><h3>12ч 45м</h3></div>
            <div className="stat-card"><span>Убийств</span><h3>142</h3></div>
            <div className="stat-card"><span>Смертей</span><h3>28</h3></div>
        </div>
        <style>{`
            .profile-header { display: flex; align-items: center; gap: 20px; background: var(--surface-color); padding: 2rem; border-radius: 12px; border: 1px solid var(--primary-color); margin-bottom: 2rem; }
            .avatar-placeholder { width: 100px; height: 100px; background: #333; border-radius: 8px; overflow: hidden; border: 2px solid var(--primary-color); }
            .rank-badge { display: inline-block; padding: 4px 12px; background: var(--primary-color); color: white; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
            .stat-card { background: var(--surface-color); padding: 1.5rem; border-radius: 8px; text-align: center; border-bottom: 3px solid #333; }
            .stat-card h3 { color: var(--secondary-color); margin-top: 5px; }
            .buy-btn { background: var(--primary-color); color: white; padding: 10px; font-weight: bold; border-radius: 4px; cursor: pointer; }
        `}</style>
    </div>
);

export default Profile;
