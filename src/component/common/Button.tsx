import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, type = 'button', className = '', ...props }) => (
  <button
    type={type}
    className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer font-semibold  transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button; 