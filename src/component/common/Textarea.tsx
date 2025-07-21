import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  touched?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, touched, ...props }) => {
  const hasError = touched && error;
  const id = props.id || props.name;
  // Set a fixed height for the textarea container
  // I've interpreted "120px" from your request as "120px". Let me know if that's wrong!
  const containerHeight = label ? 'h-[180px]' : 'h-[9 0px]';

  return (
    <div className={`w-full ${containerHeight}`}>
      {label && (
        <label htmlFor={id} className="block text-sm 2xl:text-lg mb-[1px]">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className={`w-full text-sm text-black placeholder:text-black/80 bg-white px-3 py-1 rounded-md resize-none focus:outline-none focus:ring-2 ${hasError ? 'border-red-500 ring-red-500' : 'border-transparent ring-blue-400'} ${props.className || ''}`}
      />
      {hasError && <div className="text-red-500 text-[11px] 2xl:text-xs ">{error}</div>}
    </div>
  );
};

export default Textarea; 