// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => (
    <header className="app-header">
        <div className="user-info">
            Welcome, Ayaz!
        </div>
        <div className="header-actions">
            <span className="action-icon">🔔</span>
            <div className="user-avatar">R</div>
        </div>
    </header>
);

export default Header;