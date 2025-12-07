// src/pages/EmailListsDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';

// Mock data based on provided screenshots
const mockStats = [
  { label: 'Total Lists', value: 7, subText: '74 Total Contacts' },
  { label: 'Daily Email Limit', value: 300, subText: '3 Active Accounts' },
  { label: 'Emails Sent Today', value: 0, subText: '0% of capacity' },
  { label: 'Avg. Quality Score', value: '40%', status: 'poor' },
];

const mockLists = [
  { name: 'Newsletter Subscribers', contacts: 3500, status: 'Active', openRate: '24%' },
  { name: 'final test', contacts: 5, status: 'Poor', openRate: '0%' },
  { name: 'madhu', contacts: 24, status: 'Active', openRate: '0%' },
];

const EmailListsDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-row-spaced">
        <h1>Dashboard</h1>
        <Button onClick={() => navigate('/email-lists')}>
          View All Lists 📧
        </Button>
      </div>

      {/* Stats Grid */}
      <section className="stats-grid">
        {mockStats.map((stat, index) => (
          <Card key={index} className="stat-card">
            <p className="stat-label">{stat.label}</p>
            <h2 className={`stat-value stat-status-${stat.status || 'default'}`}>{stat.value}</h2>
            <p className="stat-subtext">{stat.subText}</p>
          </Card>
        ))}
      </section>

      {/* Lists Summary */}
      <section style={{ marginTop: 'var(--space-xl)' }}>
        <Card title="Active Lists Summary">
          <div className="lists-summary-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-lg)',
          }}>
            {mockLists.map((list, index) => (
              <div key={index} className={`list-item list-status-${list.status.toLowerCase()}`} style={{
                padding: 'var(--space-md)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--border-color)',
                backgroundColor: list.status === 'Poor' ? '#fefcf3' : '#f6fff8'
              }}>
                <h4 className="list-name">{list.name}</h4>
                <p>{list.contacts} Valid Contacts</p>
                <p className="open-rate">{list.openRate} Open Rate</p>
              </div>
            ))}
          </div>
          <Button variant="secondary" onClick={() => navigate('/email-lists')}>View All Lists</Button>
        </Card>
      </section>
    </div>
  );
};

export default EmailListsDashboard;