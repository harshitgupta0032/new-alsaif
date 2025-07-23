"use client";
import Image from "next/image";
import { BsShieldCheck } from "react-icons/bs";
import {
  FaBolt,
  FaShieldAlt,
  FaDollarSign,
  FaHeadset,
  FaCheckCircle,
  FaTruck,
  FaCrown,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const features = [
  {
    icon: <FaTruck className="text-white text-xl" />,
    title: "Unrivaled Fleet",
    desc: "Over +5000 modern trucks, trailers, and tippers ready for any project.",
    color: "bg-[#006fba]",
  },
  {
    icon: <IoDocumentTextOutline className="text-white text-xl" />,
    title: "Flexible Contracts",
    desc: "Competitive pricing with customizable rental plans to fit your timeline and budget.",
    color: "bg-indigo-400",
  },
  {
    icon: <VscWorkspaceTrusted className="text-white text-xl" />,
    title: "Proven Reliability",
    desc: "Regular maintenance and 24/7 support to keep your operations running smoothly.",
    color: "bg-green-600",
  },
  {
    icon: <FaCrown className="text-white text-xl" />,
    title: "Industry Leader",
    desc: "Trusted by top construction, logistics, and industrial firms across Saudi Arabia & GCC.",
    color: "bg-amber-500",
  },
];

const fleetFeatures = [
  "Latest Safety Technology",
  "GPS Tracking & Monitoring",
  "Regular Maintenance Schedule",
  "Fuel-Efficient Engines",
];

const About = () => {
  return (
    <section
      id="about"
      className=" text-black py-5 w-11/12 md:w-5/6 "
    >
      <div className="text-center">
        <h2 className="text-black text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold mb-4">
          Why <span className="text-[#006fba]">ALSAIF Transportation?</span>
        </h2>
        <p className="text-gray-400 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[18px] pb-8 mb-5">
          Partner with us for unmatched reliability and tailored solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`h-14 group  flex items-center justify-center rounded-full mb-4 cursor-pointer w-full`}
              >
                <span
                  className={`w-14 h-14 2xl:size-17 group-hover:scale-110 group-hover:shadow-xl transition-transform deration-500 flex items-center justify-center rounded-full shadow-md ${feature.color}`}
                >
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg 2xl:text-2xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm  text-gray-400 max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-start md:items-center gap-8 md:gap-12 py-10">
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">
            Modern Truck <span className="text-[#006fba]">Fleet</span>
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl leading-relaxed">
            Our modern truck fleet is equipped with advanced safety features and
            maintained to the highest standards. Every vehicle undergoes regular
            inspections to ensure optimal performance and safety.
          </p>

          <ul className="space-y-4">
            {fleetFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-800">
                <FaCheckCircle className="text-green-600 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/truck (3).jpg"
            alt="Fleet Maintenance"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
