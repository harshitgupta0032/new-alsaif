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
  const containerHeight = label ? 'h-[180px] 2xl:h-[210px]' : 'h-[90px] 2xl:h-[140px]';

  return (
    <div className={`w-full ${containerHeight}`}>
      {label && (
        <label htmlFor={id} className="block text-sm 2xl:text-lg mb-[3px] text-black/60">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className={`w-full bg-white text-xs 2xl:text-[17px] px-2 py-2 2xl:py-3 text-black/80 placeholder:text-black/40 placeholder:text-[13px] placeholder:font-[500] rounded-md focus:outline-none focus:ring-2  ${hasError ? '' : 'ring-blue-400'} ${props.className || ''}`}
      />
      {hasError && <div className="text-red-500 ps-2 text-[13px] ">{error}</div>}
    </div>
  );
};

export default Textarea; 