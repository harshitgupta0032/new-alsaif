import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Label is now optional
  error?: string;
  touched?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, touched, ...props }) => {
  const hasError = touched && error;
  const id = props.id || props.name;

  // Conditionally set the min-height based on the presence of the label prop.
  // I've interpreted "175px" from your request as "75px". Let me know if that's wrong!
  const containerMinHeight = label ? 'min-h-[75px]' : 'min-h-[60px]';

  return (
    <div className={`w-full ${containerMinHeight}`}>
      {/* Only render the label if it's provided */}
      {label && (
        <label htmlFor={id} className="block text-sm 2xl:text-lg mb-[1px]">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        {...props}
        // This includes a fix to make validation borders visible
        className={`w-full bg-white text-xs 2xl:text-[24px] px-3 py-2 2xl:py-3 text-black placeholder:text-black/80 rounded-md focus:outline-none focus:ring-2 border-2 ${hasError ? 'border-red-500 ring-red-500' : 'border-transparent ring-blue-400'} ${props.className || ''}`}
      />
      {hasError && <div className="text-red-500 text-[12px] 2xl:text-xs mt-[2px]">{error}</div>}
    </div>
  );
};

export default Input; 