// src/pages/EmailAccountsPage.jsx
import React from 'react';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';

const mockAccounts = [
    { name: 'Outlook (Primary)', email: 'ravi@example.com', status: 'Active', dailyLimit: 300, usage: 10 },
    { name: 'Gmail (Backup)', email: 'support@example.com', status: 'Pending Verification', dailyLimit: 500, usage: 0 },
];

const EmailAccountsPage = () => {
    return (
        <div>
            <div className="flex-row-spaced">
                <h1>Email Accounts Configuration</h1>
                <Button onClick={() => alert('Opening Connect New Account Modal')}>+ Connect New Account</Button>
            </div>
            
            <Card title="Connected Sending Accounts">
                <div className="table-container" style={{boxShadow: 'none', border: 'none'}}>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Account Name</th>
                                <th>Sending Email</th>
                                <th>Status</th>
                                <th>Daily Limit</th>
                                <th>Usage Today</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockAccounts.map((account, index) => (
                                <tr key={index}>
                                    <td>{account.name}</td>
                                    <td>{account.email}</td>
                                    <td>
                                        <span style={{ 
                                            color: account.status === 'Active' ? 'var(--success-color)' : 'orange', 
                                            fontWeight: 'bold' 
                                        }}>
                                            {account.status}
                                        </span>
                                    </td>
                                    <td>{account.dailyLimit}</td>
                                    <td>{account.usage} / {account.dailyLimit}</td>
                                    <td>
                                        <button className="icon-btn">⚙️</button>
                                        <button className="icon-btn">🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default EmailAccountsPage;