import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            onLogin(username);
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

    return (
        <div className="page auth-page">
            <div className="auth-card">
                <h1>Авторизация</h1>
                <p>Введите данные для входа в личный кабинет</p>
                
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label>Никнейм</label>
                        <input 
                            type="text" 
                            placeholder="Ваш ник в Minecraft" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-btn">Войти</button>
                </form>
                
                <div className="auth-hint">
                    <p>Для демо-входа можно ввести любые данные</p>
                </div>
            </div>

            <style>{`
                .auth-page {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 60vh;
                }
                .auth-card {
                    background: var(--surface-color);
                    padding: 2.5rem;
                    border-radius: 12px;
                    border: 1px solid var(--primary-color);
                    box-shadow: var(--glow);
                    width: 100%;
                    max-width: 400px;
                    text-align: center;
                }
                .auth-card h1 {
                    color: var(--secondary-color);
                    margin-bottom: 0.5rem;
                }
                .auth-card p {
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                    font-size: 0.9rem;
                }
                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .form-group {
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .form-group label {
                    font-size: 0.9rem;
                    color: var(--text-color);
                }
                .form-group input {
                    padding: 12px;
                    background: #121212;
                    border: 1px solid #333;
                    border-radius: 6px;
                    color: white;
                    outline: none;
                    transition: border-color 0.3s;
                }
                .form-group input:focus {
                    border-color: var(--primary-color);
                }
                .login-btn {
                    background: var(--primary-color);
                    color: white;
                    padding: 12px;
                    font-weight: bold;
                    font-size: 1rem;
                    margin-top: 1rem;
                    border-radius: 6px;
                }
                .login-btn:hover {
                    background: #e64600;
                    transform: translateY(-2px);
                }
                .auth-hint {
                    margin-top: 1.5rem;
                    font-size: 0.8rem;
                    color: var(--text-muted);
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};

export default Auth;
