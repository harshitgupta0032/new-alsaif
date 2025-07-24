// import React from 'react';

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   label?: string; // Label is now optional
//   error?: string;
//   touched?: boolean;
// }

// const Input: React.FC<InputProps> = ({ label, error, touched, ...props }) => {
//   const hasError = touched && error;
//   const id = props.id || props.name;

//   const containerMinHeight = label ? 'min-h-[75px] 2xl:min-h-[105px]' : 'min-h-[60px] 2xl:min-h-[80px]';

//   return (
//     <div className={`w-full ${containerMinHeight}`}>
//       {/* Only render the label if it's provided */}
//       {label && (
//         <label htmlFor={id} className="block text-sm 2xl:text-lg mb-[1px]">
//           {label}
//           {props.required && <span className="text-red-500">*</span>}
//         </label>
//       )}
//       <input
//         id={id}
//         {...props}
//         // This includes a fix to make validation borders visible
//         className={`w-full bg-white text-xs 2xl:text-[17px] px-3 py-2 2xl:py-3 text-black placeholder:text-black/80 rounded-md focus:outline-none focus:ring-2  ${hasError ? '' : 'border-transparent ring-blue-400'} ${props.className || ''}`}
//       />
//       {hasError && <div className="text-red-500 text-[12px] 2xl:text-[14px] mt-[2px]">{error}</div>}
//     </div>
//   );
// };

// export default Input; 



import React from 'react';
import { useTranslation } from 'react-i18next';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, touched, ...props }) => {
  const hasError = touched && error;
  const id = props.id || props.name;
  const {i18n, t} = useTranslation('common')

  const containerMinHeight = label ? 'min-h-[105px]' : 'min-h-[60px] 2xl:min-h-[80px]';

  return (
    <div className={`w-full order border-red-900  ${containerMinHeight}`}>
      {label && (
        <label htmlFor={id} className="block mb-[3px] text-black/60">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        {...props}
        className={`w-full bg-white text-xs 2xl:text-[17px] px-2  h-[50px] 2xl:py-3 text-black/80 placeholder:text-black/40 placeholder:text-[14px] placeholder:font-450 rounded-md focus:outline-none focus:ring-2 ${
          hasError
            ? ''
            : 'focus:ring-blue-400'
        } ${props.className || ''}`}
      />
      {hasError && <div className="text-red-500 text-[13px] ps-2  mt-[2px]">{error}</div>}
    </div>
  );
};

export default Input;
