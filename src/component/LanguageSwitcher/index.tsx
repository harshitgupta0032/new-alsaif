import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="language-switcher px-3 py-2 cursor-pointer border rounded-md shadow-sm focus:outline-none focus:ring-2  focus:border-blue-500 text-sm">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value as "en" | "ar")}
        className=" text-white "
      >
        <option className="cursor-pointer text-blue-400" value="en">
          EN
        </option>
        <option className="cursor-pointer text-blue-400" value="ar">
          AR
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
