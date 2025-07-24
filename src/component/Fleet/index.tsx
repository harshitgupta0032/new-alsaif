"use client";
import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";



const Fleet = () => {
  
  const {t} = useTranslation('common');

  const fleetData = [
  {
    title: t("our_premium_fleet_service_1_title"),
    description: t("our_premium_fleet_service_1_description"),
    image: "/assets/truck (6).jpg",
  },
  {
    title: t("our_premium_fleet_service_2_title"),
    description: t("our_premium_fleet_service_2_description"),
    image: "/assets/truck (1).jpg",
  },
  {
    title: t("our_premium_fleet_service_3_title"),
    description: t("our_premium_fleet_service_3_description"),
    image: "/assets/truck (7).jpg",
  },
  {
    title: t("our_premium_fleet_service_4_title"),
    description: t("our_premium_fleet_service_4_description"),
    image: "/assets/truck (8).jpg",
  },
];

  const stats = [
    { value: "150", label: t('our_premium_fleet_vehicles_in_fleet_text'), color: "text-blue-600" },
    { value: "99%", label: t('our_premium_fleet_uptime_percentage_text'), color: "text-green-600" },
    { value: "5000", label: t('our_premium_fleet_happy_customers_text'), color: "text-purple-600" },
    { value: "24h", label: t('our_premium_fleet_hour_support_text'), color: "text-red-600" },
  ];
  return (
    <section
      id="fleet"
      className="py-13 bg-[#f9fbff] text-center w-11/12 md:w-5/6"
    >

      <h2 className="text-[#006fba] text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold  mb-4">
        {t('our_premium_fleet_title')}
      </h2>
      <p className="text-gray-400 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[18px] pb-8 mb-5">
        {t('our_premium_fleet_description')}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {fleetData.map((item, idx) => (
          <div key={idx} className="">
            <div className="rounded-2xl overflow-hidden bg-white shadow group hover:shadow-xl transition flex flex-col mb-5 h-[300px] w-full sm:w-[300px] md:w-auto ">
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 2xl:px-3 text-left flex-1">
                <h3 className="text-lg 2xl:text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-sm 2xl:text-[17px] text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow py-6 text-center flex flex-col items-center justify-center mb-5 w-full sm:w-[300px] md:w-auto">
              <h3
                className={`text-3xl 2xl:text-4xl font-bold ${stats[idx].color}`}
              >
                {stats[idx].value}
              </h3>
              <p className="text-sm 2xl:text-lg text-gray-700 mt-2">
                {stats[idx].label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fleet;
