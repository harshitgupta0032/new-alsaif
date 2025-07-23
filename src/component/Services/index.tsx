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
    iconBg: "bg-[#006fba]",
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
      className="py-10 flex justify-center items-center  min-h-screen bg-white text-center"
    >
      <div className="text-center w-11/12 md:w-5/6">
        <h2 className="text-black text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold mb-4">
          <span className="font-bold text-[#006fba]">
            Tailored Transportation Solutions for Every Industry
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg mb-5 pb-8">
          From logistics to construction, our fleet delivers efficiency and
          reliability.
        </p>

        <div className=" flex justify-center items-start flex-wrap sm:grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {/* <div className=" flex flex-wrap  gap-4 lg:gap-6"> */}
          {services.map((service) => (
            <div
              key={service.title}
              className={`group rounded-2xl shadow-sm p-5 sm:p-6 text-left flex flex-col gap-3 h-auto md:h-[480px] md:min-w-auto  sm:w-full  transition hover:shadow-2xl ${service.bgColor} relative`}
            >
              <div className="flex items-center justify-start gap-3 mb-1 ">
                <div
                  className={`w-10 h-10 sm:size-9 lg:size-11 flex items-center justify-center rounded-full  ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg lg:text-2xl font-semibold text-neutral-800 ">
                  {service.title}
                </h3>
              </div>
              <div className=" mt-2">
                <p className="-tracking-tighter text-sm lg:text-base  text-black/50 mb-4 2xl:mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm lg:text-base text-black/40 -tracking-tight"
                    >
                      <FaCheckCircle className="text-green-500 w-4 h-5 mr-2  flex-shrink-0" />
                      <h1>{point}</h1>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex justify-center items-center">
                <Button
                  onClick={() =>
                    ScrollNavigation({ name: "Contact", href: "#contact" })
                  }
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
