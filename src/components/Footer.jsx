import React from 'react';

const Footer = () => (
    <footer className="footer">
        <p>VulcanoMC</p>
        <div className="footer-links">
            <span>Правила </span>
            <span>Поддержка </span>
            <span>Discord</span>
        </div>
        <style>{`
            .footer { background: #0a0a0a; padding: 2rem 5%; text-align: center; border-top: 1px solid #222; margin-top: 3rem; }
            .footer-links { display: flex; justify-content: center; gap: 20px; font-size: 0.8rem; color: var(--primary-color); margin-top: 10px; }
            .footer-links span { cursor: pointer; }
            .footer-links span:hover { text-decoration: underline; }
        `}</style>
    </footer>
);

export default Footer;
