import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  touched?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ error, touched, ...props }) => {
  const hasError = touched && error;
  return (
    <div className="w-full h-[120px]">
      <textarea
        {...props}
        className={`w-full text-black placeholder:text-black/80 bg-white px-3 py-1 rounded-md resize-none focus:outline-none focus:ring-2 ${hasError ? 'outline-red-500 ring-blue-400' : 'focus:ring-blue-400'} ${props.className || ''}`}
      />
      {hasError && <div className="text-red-500 text-[12px] 2xl:text-xs ">{error}</div>}
    </div>
  );
};

export default Textarea; 