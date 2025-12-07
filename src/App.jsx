// src/App.jsx - UPDATED
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import EmailListsDashboard from './pages/EmailListsDashboard';
import ContactListPage from './features/Contacts/ContactListPage';
import CampaignCreationPage from './features/Campaigns/CampaignCreationPage';
// NEW IMPORTS
import EmailAccountsPage from './pages/EmailAccountsPage';
import AnalyticsPage from './pages/AnalyticsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><EmailListsDashboard /></MainLayout>} />
      {/* Route for Email Lists (contacts) */}
      <Route path="/email-lists" element={<MainLayout><ContactListPage /></MainLayout>} />
      {/* Route for Campaign Creation/Form */}
      <Route path="/campaigns" element={<MainLayout><CampaignCreationPage /></MainLayout>} />
      
      {/* NEW ROUTES */}
      <Route path="/email-accounts" element={<MainLayout><EmailAccountsPage /></MainLayout>} />
      <Route path="/analytics" element={<MainLayout><AnalyticsPage /></MainLayout>} />
      
      <Route path="*" element={<MainLayout><div><h1>404 Not Found</h1></div></MainLayout>} />
    </Routes>
  );
}

export default App;