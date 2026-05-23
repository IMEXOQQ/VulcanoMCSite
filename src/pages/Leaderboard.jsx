import React from 'react';
import { LEADERBOARD_DATA } from '../data/mockData';

const Leaderboard = () => (
    <div className="page">
        <h1>Топ игроков</h1>
        <div className="table-container">
            <table className="leaderboard-table">
                <thead><tr><th>#</th><th>Игрок</th><th>Счет</th><th>Убийства</th></tr></thead>
                <tbody>
                    {LEADERBOARD_DATA.map((p, i) => (
                        <tr key={p.id}>
                            <td>{i+1}</td>
                            <td className="player-cell"><img src={`https://mc-heads.net/avatar/${p.username}/24`} alt={p.username} /> {p.username}</td>
                            <td>{p.score}</td>
                            <td>{p.kills}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <style>{`
            .table-container { background: var(--surface-color); border-radius: 12px; overflow: hidden; border: 1px solid #333; }
            .leaderboard-table { width: 100%; border-collapse: collapse; }
            .leaderboard-table th, .leaderboard-table td { padding: 1rem; text-align: left; }
            .leaderboard-table th { background: #252525; color: var(--text-muted); }
            .leaderboard-table tr { border-bottom: 1px solid #333; }
            .player-cell { display: flex; align-items: center; gap: 10px; }
            .player-cell img { border-radius: 4px; }
        `}</style>
    </div>
);

export default Leaderboard;
