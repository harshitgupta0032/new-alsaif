"use client";
import {
  FaTruck,
  FaShippingFast,
  FaWarehouse,
  FaCheckCircle,
} from "react-icons/fa";
import Button from "../common/Button";
import { useScrollNavigation } from "@/hooks/UseScrollNavigaion";
import QuotesModel from "../modals/QuotesModel";
import React from "react";

const services = [
  {
    title: "Truck Rentals",
    description:
      "Rent modern, heavy-duty trucks for logistics, manufacturing, or material transport, customized to your business needs. ",
    icon: <FaTruck className="text-xl lg:text-2xl text-white" />,
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-500",
    points: [
      "Diverse truck models for all cargo types. ",
      "Flexible rental terms (short or long-term). ",
      "24/7 support for uninterrupted operations.",
    ],
  },
  {
    title: "Trailer Rentals",
    description:
      "High-capacity trailers for long-haul and specialized transport, ensuring safe and timely delivery. ",
    icon: <FaShippingFast className="text-xl lg:text-2xl text-white" />,
    bgColor: "bg-green-100",
    iconBg: "bg-green-600",
    points: [
      "Flatbeds, refrigerated, and specialized trailers. ",
      "Scalable solutions for large-scale operations. ",
      "Regular maintenance for maximum reliability.",
    ],
  },
  {
    title: "Tipper Rentals",
    description:
      "Robust tippers for construction, mining, and bulk material transport, designed for heavy-duty performance.",
    icon: <FaWarehouse className="text-xl lg:text-2xl text-white" />,
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-600",
    points: [
      "High-capacity tippers for aggregates and materials. ",
      "Fully maintained for project efficiency. ",
      "Expert support for seamless operations.",
    ],
  },
];

const Services = () => {
  const ScrollNavigation = useScrollNavigation();

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section
      id="services"
      className="pt-10 flex justify-center items-center px-4 sm:px-6  min-h-screen md:px-8 lg:px-12 bg-white text-center"
    >
      <div className="text-center">
        <h2 className="text-black text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold mb-4">
          <span className="font-bold text-blue-500">
            Tailored Transportation Solutions for Every Industry
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[18px] mb-5 pb-8">
          From logistics to construction, our fleet delivers efficiency and
          reliability.
        </p>

        <div className=" flex justify-center items-start flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group rounded-2xl shadow-sm p-5 sm:p-6 text-left flex flex-col gap-3 h-auto min-h-[300px] sm:min-h-[390px] lg:min-h-[450px] 2xl:h-[550px]  mx-auto sm:w-[270px] md:w-auto transition hover:shadow-2xl ${service.bgColor} relative`}
            >
              <div className="flex items-center justify-start gap-3 mb-1 ">
                <div
                  className={`w-10 h-10 sm:size-9 lg:size-11 flex items-center justify-center rounded-full  ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-2xl 2xl:text-3xl font-semibold text-neutral-800 ">
                  {service.title}
                </h3>
              </div>
              <div className="ps-3 mt-2">
                <p className="text-xs -tracking-tighter sm:text-sm lg:text-base 2xl:text-lg text-black/50 mb-4 2xl:mb-6">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs sm:text-sm lg:text-[15px] 2xl:text-lg text-black/40 -tracking-tight"
                    >
                      <FaCheckCircle className="text-green-500 w-4 h-5 mr-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex justify-center items-center">
                <Button
                  onClick={() => setIsOpen(true)}
                  className="rounded-xl mt-4  w-full   2xl:text-lg"
                >
                  Get Quotes Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuotesModel isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
    </section>
  );
};

export default Services;
