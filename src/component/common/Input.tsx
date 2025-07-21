import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // We can extend this with more props like label, error, etc. in the future
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`w-full bg-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${props.className || ''}`}
    />
  );
};

export default Input; 