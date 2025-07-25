"use client";
import { useScrollNavigation } from "@/hooks/UseScrollNavigaion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaYoutube,
} from "react-icons/fa";

const QuickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "About", href: "#about" },
  { name: "Get Quotes", href: "#contact" },
];

const ContactInfo = [
  {
    icon: <FaPhoneAlt className="text-white w-5 h-5 flex-shrink-0" />,
    text: "+966596003333",
    href: "tel:+966596003333",
  },
  {
    icon: <FaEnvelope className="text-white w-5 h-5 flex-shrink-0" />,
    text: "social.media@alsaifexpress.com",
    href: "mailto:social.media@alsaifexpress.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-white w-5 h-5 flex-shrink-0" />,
    text: "Dammam, KSA: Al Khaldia Al Shamalia",
  },
  {
    icon: <FaClock className="text-white w-5 h-5 flex-shrink-0" />,
    text: "24/7 Support",
  },
];

const socialMediaLinks = [
  {
    icon: <FaFacebookF className="2xl:size-5" />,
    href: "https://www.facebook.com/profile.php?id=100091362270977",
  },
  {
    icon: <FaTwitter className="2xl:size-5" />,
    href: "https://x.com/ExpressAlsaif",
  },
  {
    icon: <FaInstagram className="2xl:size-5" />,
    href: "https://www.instagram.com/alsaif.express/",
  },
  {
    icon: <FaYoutube className="2xl:size-5" />,
    href: "https://www.youtube.com/channel/UCJknqftupTB8XHYDeWK0ahw",
  },
];

const Footer = () => {
  const ScrollNavigation = useScrollNavigation();
  const {t} = useTranslation();

  const handleQuickLinkClick = (link: { name: string; href: string }) => {
    ScrollNavigation({ name: link.name, href: link.href });
  };

  return (
    <footer className="bg-[#006fba] text-white pt-12 pb-6 flex justify-center items-center px-6 ">
      <div className="w-11/12 md:w-5/6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-neutral-800 pb-10">
          <div>
            <div className="flex h-[55px] w-[162px] w- items-center gap-3 mb-4">
              <Image
                src="/assets/companylogo.png"
                alt=""
                width={700}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-sm 2xl:text-[17px] mb-4 mt-2">
              {t("Al Saif Group specializes in top-tier transportation services across Saudi Arabia and the Middle East. With a fleet of 5000+ trucks, we’ve been a trusted logistics partner since 1963.")}
            </p>
            <div className="flex gap-3 mt-4">
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-600 p-2 2xl:size-12 flex justify-center items-center rounded-full transition"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t("Quick Links")}</h4>
            <ul className="space-y-2 text-white">
              {QuickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition 2xl:text-lg"
                    onClick={(e) => {
                      handleQuickLinkClick(link);
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t("Contact Info")}</h4>
            <ul className="space-y-3 text-white">
              {/* {ContactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3 2xl:text-lg">
                  {info.icon}
                  <span>{info.text}</span>
                </li>
              ))} */}
              {ContactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3 2xl:text-lg">
                  {info.icon}
                  {info.href ? (
                    <a
                      href={info.href}
                      className="hover:text-white transition"
                      {...(info.href.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span>{t(info.text)}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 text-center md:text-left text-white text-sm 2xl:text-lg flex flex-col md:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {t("Al Saif Transportation, All Rights Reserved.")}
          </span>
          <div className="flex gap-4">
            <div className="hover:text-white transition">
              {t("Privacy Policy")}
            </div>
            <span className="hidden md:block">|</span>
            <div className="hover:text-white transition">
              {t("Terms of Service")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
