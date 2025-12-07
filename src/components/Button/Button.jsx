// src/components/Button/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', ...props }) => (
  <button className={`btn btn-${variant}`} onClick={onClick} {...props}>
    {children}
  </button>
);

export default Button;