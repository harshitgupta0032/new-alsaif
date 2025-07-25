"use client";
import React from "react";
import QuoteForm from "./QuotesForm";
import { useTranslation } from "react-i18next";

const Quotes = () => {
  const {t} = useTranslation();
  return (
    <div
      id="contact"
      className="min-h-screen pt-10 flex flex-col items-center justify-center p-4 pb-6  bg-[#006fba]"
    >
      <div className="flex flex-col w-11/12 md:w-5/6 items-center justify-center">
        <div className="">
          <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold mb-4">
            {t("Start Your Project with Al Saif Today")}
          </h2>
          <p className="text-gray-100 text-center max-w-2xl mx-auto text-sm md:text-lg mb-5 pb-8">
            {t("Request a customized quote and let our fleet drive your success.")}
          </p>
        </div>
        <QuoteForm />
      </div>
    </div>
  );
};

export default Quotes;
