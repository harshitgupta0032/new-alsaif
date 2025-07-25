import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillPatchCheckFill } from "react-icons/bs";
const ThankYouGreet = ({ modal }: { modal?: boolean }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {modal ? (
        <>
          <div>
            <BsFillPatchCheckFill className="text-[#006fba]" size={80} />
          </div>
          <p className="text-sm md:text-md font-medium text-gray-800 text-center my-5">
            {t("We will contact you as soon as possible")}
          </p>
          <div className="text-[#006fba] md:text-lg text-center font-semibold">
            {t("Thank you! Your message has been sent.")}
          </div>
        </>
      ) : (
        <>
          <div>
            <BsFillPatchCheckFill className="text-[#006fba]" size={100} />
          </div>
          <p className="text-sm md:text-lg font-medium text-gray-800 text-center my-4">
            {t("We will contact you as soon as possible")}
          </p>
          <div className="text-[#006fba] md:text-2xl text-center font-semibold">
            {t("Thank you! Your message has been sent.")}
          </div>
        </>
      )}
    </div>
  );
};

export default ThankYouGreet;
