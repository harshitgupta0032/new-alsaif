'use client';

import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const languageOptions = [
    { value: "en", label: "En" },
    { value: "ar", label: "Ar" },
  ];

  return (
    <div className="language-switcher cursor-pointer border rounded-md shadow-sm focus:outline-none focus:ring-2  focus:border-blue-500 text-sm px-1">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value as "en" | "ar")}
        className=" text-white cursor-pointer border-0  px-3 py-2 outline-0"
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value} className="bg-white text-black cursor-pointer">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;