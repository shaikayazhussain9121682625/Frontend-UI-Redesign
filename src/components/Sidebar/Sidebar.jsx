// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navItems = [
        { path: '/', label: 'Dashboard', icon: '🏠' },
        { path: '/email-lists', label: 'Email Lists', icon: '📧' },
        { path: '/email-accounts', label: 'Email Accounts', icon: '👤' },
        { path: '/campaigns', label: 'Email Campaigns', icon: '🚀' },
        { path: '/analytics', label: 'Analytics', icon: '📊' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3 className="app-logo">360AIRO</h3>
            </div>
            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            <div className="sidebar-footer">
                <NavLink to="/logout" className="nav-item">
                    <span className="nav-icon">➡️</span> Logout
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;