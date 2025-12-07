// src/features/Campaigns/CampaignCreationPage.jsx
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/FormElements/Input';
import StepIndicator from './components/StepIndicator';

// Mock data
const mockLists = [
    { id: 1, name: 'test360marco', contacts: 5 },
    { id: 2, name: 'Newsletter Subscribers', contacts: 3500 },
];

const steps = [
    { label: 'Campaign Details' },
    { label: 'Choose Approach' },
    { label: 'Review & Launch' },
];

const CampaignCreationPage = () => {
    const [step, setStep] = useState(0);
    const [campaignDetails, setCampaignDetails] = useState({
        name: 'Land Scaping',
        targetListId: 1,
    });

    const handleNext = () => setStep(prev => Math.min(prev + 1, steps.length - 1));
    const handleBack = () => setStep(prev => Math.max(prev - 1, 0));
    
    // --- Step Content Components ---

    const Step1 = () => (
        <div className="step-content-grid">
            <div className="step-form-area">
                <Card title="Basic Information">
                    <Input
                        label="Campaign Name"
                        value={campaignDetails.name}
                        onChange={(e) => setCampaignDetails({...campaignDetails, name: e.target.value})}
                        placeholder="e.g., Q4 Lead Nurturing"
                        required
                    />
                    
                    <div className="form-group">
                        <label>Target Audience *</label>
                        <select
                            className="custom-input"
                            value={campaignDetails.targetListId}
                            onChange={(e) => setCampaignDetails({...campaignDetails, targetListId: Number(e.target.value)})}
                        >
                            {mockLists.map(list => (
                                <option key={list.id} value={list.id}>
                                    {list.name} ({list.contacts} contacts)
                                </option>
                            ))}
                        </select>
                    </div>
                </Card>
                
                <div className="form-actions">
                    <Button onClick={handleNext}>Next: Choose Approach →</Button>
                </div>
            </div>

            <Card title="Summary" className="step-preview-area">
                <p><strong>Campaign Name:</strong> {campaignDetails.name}</p>
                <p><strong>Target Audience:</strong> {mockLists.find(l => l.id === campaignDetails.targetListId)?.name || 'N/A'}</p>
                <p><strong>Estimated Contacts:</strong> {mockLists.find(l => l.id === campaignDetails.targetListId)?.contacts || 0}</p>
            </Card>
        </div>
    );

    const Step2 = () => (
        <div className="step-content-grid">
            <div className="step-form-area">
                <Card title="Select Email Type">
                    <h2>Choose Your Email Approach</h2>
                    <p style={{color: 'var(--text-muted)'}}>Select how you want to build your campaign emails.</p>
                    
                    <div className="option-card" style={{padding: 'var(--space-md)', border: '1px solid var(--primary-color)', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', marginBottom: 'var(--space-md)'}}>
                        <h4>Template Builder (Selected)</h4>
                        <p style={{fontSize: '0.9em'}}>Use our drag-and-drop editor for fast, visual setup.</p>
                    </div>
                    <div className="option-card" style={{padding: 'var(--space-md)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', cursor: 'pointer'}}>
                        <h4>Plain Text Email</h4>
                        <p style={{fontSize: '0.9em'}}>Ideal for personalized, conversational emails.</p>
                    </div>
                </Card>

                <div className="form-actions">
                    <Button variant="secondary" onClick={handleBack} style={{ marginRight: 'var(--space-md)' }}>← Back</Button>
                    <Button onClick={handleNext}>Next: Review →</Button>
                </div>
            </div>
             <Card title="Visual Editor" className="step-preview-area">
                <p style={{color: 'var(--text-muted)'}}>The email design editor will appear here once the approach is finalized.</p>
             </Card>
        </div>
    );

    const Step3 = () => (
        <div className="step-content-grid">
            <div className="step-form-area">
                <h2>Review and Launch</h2>
                <Card title="Final Review" style={{marginBottom: 'var(--space-md)'}}>
                    <p>Campaign: <strong>{campaignDetails.name}</strong></p>
                    <p>Audience: **{mockLists.find(l => l.id === campaignDetails.targetListId)?.name}**</p>
                    <p>Emails: **5** (Total Emails)</p>
                    <p style={{ color: 'var(--success-color)', fontWeight: 'bold' }}>Validation Status: All setup checks passed.</p>
                </Card>

                <div className="form-actions">
                    <Button variant="secondary" onClick={handleBack} style={{ marginRight: 'var(--space-md)' }}>← Back</Button>
                    <Button onClick={() => alert('Campaign Launched!')}>Launch Campaign 🚀</Button>
                </div>
            </div>
             <Card title="Next Steps" className="step-preview-area">
                <p>1. **Monitor Analytics:** Check the campaign status in the Analytics section.</p>
                <p>2. **Test:** Send a test email before launching to a large audience.</p>
            </Card>
        </div>
    );

    const StepComponent = [Step1, Step2, Step3][step];

    return (
        <div>
            <h1>Create New Campaign</h1>
            <StepIndicator steps={steps} currentStep={step} />
            <StepComponent />
        </div>
    );
};

export default CampaignCreationPage;