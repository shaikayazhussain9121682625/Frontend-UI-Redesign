// src/pages/AnalyticsPage.jsx
import React from 'react';
import Card from '../components/Card/Card';

const mockAnalytics = [
    { label: 'Emails Sent', value: '15,000' },
    { label: 'Open Rate', value: '28.5%', color: 'var(--success-color)' },
    { label: 'Click Rate', value: '4.2%', color: 'var(--primary-color)' },
    { label: 'Unsubscribe Rate', value: '0.1%', color: 'var(--error-color)' },
];

const AnalyticsPage = () => {
    return (
        <div>
            <h1>Campaign Analytics</h1>
            <p style={{color: 'var(--text-muted)'}}>Overview of all campaigns and performance metrics.</p>

            <section className="stats-grid" style={{marginBottom: 'var(--space-xl)'}}>
                {mockAnalytics.map((stat, index) => (
                    <Card key={index} className="stat-card">
                        <p className="stat-label">{stat.label}</p>
                        <h2 className="stat-value" style={{color: stat.color || 'var(--text-color)'}}>{stat.value}</h2>
                    </Card>
                ))}
            </section>

            <Card title="Recent Campaign Performance">
                <p style={{color: 'var(--text-muted)'}}>A detailed chart placeholder would go here.</p>
                <div style={{height: '300px', backgroundColor: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--border-radius-md)'}}>
                    [Placeholder for Chart Library - e.g., Recharts or Chart.js]
                </div>
            </Card>
        </div>
    );
};

export default AnalyticsPage;