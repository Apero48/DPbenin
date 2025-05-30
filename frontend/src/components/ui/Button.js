import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  as = 'button',
  to = '',
  href = '',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700',
    outline: 'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50',
    'outline-white': 'bg-transparent border border-white text-white hover:bg-white/10',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 rounded',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-lg',
  };
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (as === 'link' && to) {
    return (
      <Link to={to} className={allStyles} {...props}>
        {children}
      </Link>
    );
  }
  
  if (as === 'a' && href) {
    return (
      <a href={href} className={allStyles} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={allStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;