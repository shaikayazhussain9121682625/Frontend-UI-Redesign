// src/layouts/MainLayout.jsx - UPDATED
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import AIChatbot from '../components/AIChatbot/AIChatbot'; // NEW IMPORT
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header />
        <div className="page-content">
          {children}
        </div>
      </div>
      <AIChatbot /> {/* CHATBOT ADDED HERE */}
    </div>
  );
};

export default MainLayout;