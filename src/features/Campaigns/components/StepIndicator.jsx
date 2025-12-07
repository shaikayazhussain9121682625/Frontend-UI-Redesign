// src/features/Campaigns/components/StepIndicator.jsx
import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({ steps, currentStep }) => {
    return (
        <div className="step-indicator-container">
            {steps.map((step, index) => (
                <div key={index} className={`step-item ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}>
                    <div className="step-number">{index + 1}</div>
                    <div className="step-label">{step.label}</div>
                    {index < steps.length - 1 && <div className="step-line"></div>}
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;