import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  touched?: boolean;
}

const Input: React.FC<InputProps> = ({ error, touched, ...props }) => {
  const hasError = touched && error;
  return (
    <div className="w-full  min-h-[50px]">
      <input
        {...props}
        className={`w-full bg-white px-3 py-1 2xl:py-2 rounded-md focus:outline-none focus:ring-2 ${hasError ? 'border-red-500 ring-blue-400' : 'focus:ring-blue-400'} ${props.className || ''}`}
      />
      {hasError && <div className="text-red-500 text-[12px] 2xl:text-xs mt-[2px]">{error}</div>}
    </div>
  );
};

export default Input; 