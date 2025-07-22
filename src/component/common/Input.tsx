import React from "react";

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
  const containerMinHeight = label ? "min-h-[75px]" : "min-h-[60px]";

  return (
    <div className={`w-full flex flex-col ${containerMinHeight}`}>
      {/* Only render the label if it's provided */}
      {label && (
        <label
          htmlFor={id}
          className="block px-2 text-gray-500 text-sm 2xl:text-lg mb-[1px]"
        >
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        {...props}
        // This includes a fix to make validation borders visible
        className={`w-full bg-white  px-3 py-3  text-black rounded-md outline-none focus:ring-2 border-2 border-gray-300 ${
          props.className || ""
        }`}
      />
      {hasError && (
        <div className="text-red-500 text-sm px-2 mt-[2px]">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;