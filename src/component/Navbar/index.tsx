"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "../common/Button";
import { useScrollNavigation } from "@/hooks/UseScrollNavigaion";
import QuotesModel from "../modals/QuotesModel";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact", openModal: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { t } = useTranslation();

  const ScrollNavigation = useScrollNavigation(setMenuOpen, setActiveSection);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    function onScroll() {
      let currentSection = sectionIds[0];
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // You can adjust the offset as needed
          if (rect.top <= 120 && rect.bottom > 120) {
            currentSection = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(currentSection);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="bg-[#006fba] shadow-md flex justify-center items-center w-full top-0 left-0 border-b border-[#006fba]">
      <div className="flex justify-between h-20 items-center w-11/12 md:w-5/6">
        <button
          type="button"
          className="flex items-center h-12 justify-center gap-2 lg:gap-3 bg-transparent border-none outline-none cursor-pointer"
          onClick={() => ScrollNavigation({ name: "Home", href: "#home" })}
        >
          <Image
            src="/assets/companylogo.png"
            alt=""
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </button>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded focus:outline-none transition-transform duration-300 focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6 cursor-pointer text-neutral-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          ref={drawerRef}
          className={`md:static md:flex pt-20 px-6 md:pt-0 md:px-0 items-center w-64 md:w-auto  transition-transform duration-500 z-50
            fixed top-0 right-0 h-full bg-white shadow-lg md:shadow-none md:bg-transparent
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0`}
        >
          <button
            aria-label="Close menu"
            className="absolute top-4 cursor-pointer right-4 md:hidden text-2xl text-gray-700 hover:text-[#006fba] focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          <ul className="flex flex-col md:flex-row gap-7 md:gap-5 lg:gap-7 items-start md:items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <h1
                  className={`block  font-semibold cursor-pointer text-md  rounded transition-colors
                    ${
                      activeSection === link.href.replace("#", "")
                        ? "text-blue-300"
                        : "text-black md:text-white hover:text-blue-300"
                    }`}
                  onClick={() => {
                    if (link.openModal) {
                      setMenuOpen(false);
                      setIsModalOpen(true);
                    } else {
                      ScrollNavigation(link);
                    }
                  }}
                >
                  {t(link.name)}
                </h1>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <Button
                type="button"
                name=""
                className="rounded-full bg-blue-500 text-sm 2xl:text-[17px] mt-7 md:mt-0 2xl:py-[7px]"
                // onClick={() => setIsModalOpen(true)}
                onClick={() =>
                  ScrollNavigation({ name: "Contact", href: "#contact" })
                }
              >
                {t("Get Quotes")}
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <QuotesModel
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
