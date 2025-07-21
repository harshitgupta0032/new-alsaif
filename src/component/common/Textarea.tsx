import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // We can extend this with more props like label, error, etc. in the future
}

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <textarea
      {...props}
      className={`w-full bg-white px-3 py-2 rounded-md resize-none focus:outline-none focus:ring-2 min-h[120px] focus:ring-blue-400 ${props.className || ''}`}
    />
  );
};

export default Textarea; 