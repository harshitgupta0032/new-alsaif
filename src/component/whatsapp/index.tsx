"use client";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Whatsapp = () => {
  const router = useRouter();

  const handleClick = async () => {
    if (navigator.userAgent.includes("WhatsApp")) {
      window.open(`whatsapp://send?phone=7525011203`);
    } else {
      window.open("https://web.whatsapp.com/send?phone=7525011203", "_blank");
    }
  };

  return (
    <div className="fixed bottom-4 right-2 md:right-4 z-50  rounded-full flex items-center justify-center shadow-lg transition">
      <div onClick={handleClick} className="p-0 relative cursor-pointer">
        <FaCircle className="text-red-600 size-2 md:size-3 absolute top-1 md:top-[-4px] right-[-2px]" />
        <div className=" bg-green-400 p-[4px] md:p-2 flex justify-center items-center size-10 md:size-16 rounded-full">
          <SiWhatsapp className="md:size-9 size-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
