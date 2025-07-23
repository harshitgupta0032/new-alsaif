import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Label is now optional
  error?: string;
  touched?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, touched, ...props }) => {
  const hasError = touched && error;
  const id = props.id || props.name;

  const containerMinHeight = label ? "min-h-[75px]" : "min-h-[60px]";

  return (
    <div className={`w-full flex flex-col ${containerMinHeight}`}>
      {/* Only render the label if it's provided */}
      {label && (
        <label
          htmlFor={id}
          className="block px-2 text-gray-500 text-sm mb-[3px]"
        >
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        {...props}
        className={`w-full bg-white text-sm p-3 text-black outline-none focus:ring-2 border-2 border-gray-300 ${
          props.className || ""
        }`}
      />
      <div className="text-red-500 h-5 text-sm px-2 mt-[3px]">
        {hasError && 
        <>{error}</>
        }
      </div>
    </div>
  );
};

export default Input;