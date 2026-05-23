import React from 'react';

const Map = () => (
    <div className="page">
        <h1>Онлайн карта</h1>
        <div className="map-container">
            <iframe src="http://vulcanomc.ru:8100/" className="map-frame" title="Server Map"></iframe>
        </div>
        <style>{`
            .map-container { background: var(--surface-color); height: 600px; border-radius: 12px; border: 2px solid var(--primary-color); overflow: hidden; box-shadow: var(--glow); }
            .map-frame { width: 100%; height: 100%; border: none; }
        `}</style>
    </div>
);

export default Map;
