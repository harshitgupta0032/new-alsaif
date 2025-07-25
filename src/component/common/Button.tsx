import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  isLoading?: boolean;
  loaderText?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  isLoading = false,
  disabled,
  ...props
}) => (
  <button
    type={type}
    className={`px-4 py-2 rounded bg-[#006fba] text-white hover:bg-blue-600 cursor-pointer font-semibold transition flex items-center justify-center gap-2 ${className}`}
    disabled={isLoading || disabled}
    {...props}
  >
    {isLoading && (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
        ></path>
      </svg>
    )}
    { children}
  </button>
);

export default Button;

