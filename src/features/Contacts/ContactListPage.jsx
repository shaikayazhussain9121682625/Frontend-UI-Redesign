// src/features/Contacts/ContactListPage.jsx
import React from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

// Mock Data from screenshot wt9.jpg
const mockContacts = [
    { email: 'michael.leadflux@outlook.com', name: 'Michael King', title: 'CFO', company: 'Schlouch Incorporated', status: 'Active' },
    { email: 'sarah.leadflux@outlook.com', name: 'Sarah Hallquist', title: 'Chief Executive Officer', company: 'HPM, Inc.', status: 'Active' },
    { email: 'christopher.leadflux@outlook.com', name: 'Christopher Gerry', title: 'Chief Financial Officer', company: 'R.P. Marzilli & Compa...', status: 'Active' },
    { email: 'ashley.leadflux@outlook.com', name: 'Ashley Powers', title: 'Chief Financial Officer', company: 'Douglass Colony Group', status: 'Active' },
    { email: 'emily.leadflux@outlook.com', name: 'Emily Hasegawa', title: 'Principal, Chief Design Officer', company: 'ELS Architecture and Urban...', status: 'Active' },
];

const ContactTable = ({ data }) => {
    const columns = [
        { header: 'Email Address', accessor: 'email' },
        { header: 'Name', accessor: 'name' },
        { header: 'Job Title', accessor: 'title' },
        { header: 'Company', accessor: 'company' },
        { header: 'Status', accessor: 'status' },
    ];

    return (
        <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.header}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>
                                    {col.accessor === 'email' ? <a href={`mailto:${row[col.accessor]}`}>{row[col.accessor]}</a> : row[col.accessor]}
                                </td>
                            ))}
                            <td>
                                <button className="icon-btn">✏️</button>
                                <button className="icon-btn">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                <p>Showing {data.length} of {data.length} Total Contacts</p>
                <div className="contact-summary">
                    <span style={{color: 'var(--success-color)', fontWeight: 'bold'}}>5 Active</span>
                    <span style={{color: 'orange', marginLeft: 'var(--space-md)', fontWeight: 'bold'}}>0 Bounced</span>
                    <span style={{color: 'var(--error-color)', marginLeft: 'var(--space-md)', fontWeight: 'bold'}}>0 Unsubscribed</span>
                </div>
            </div>
        </div>
    );
};

const ContactListPage = () => {
    return (
        <div>
            <div className="flex-row-spaced">
                <h1>Email Lists (test360marco)</h1>
                <Button onClick={() => alert('Start Campaign with this list')}>Start Campaign</Button>
            </div>
            
            <Card>
                <ContactTable data={mockContacts} />
            </Card>
        </div>
    );
};

export default ContactListPage;