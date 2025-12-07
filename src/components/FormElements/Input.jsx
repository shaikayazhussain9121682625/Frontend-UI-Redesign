// src/components/FormElements/Input.jsx
import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false, ...props }) => (
    <div className="form-group">
        {label && <label>{label}{required && <span className="required-star">*</span>}</label>}
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="custom-input"
            {...props}
        />
    </div>
);

export default Input;