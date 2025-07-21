'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaTruck } from 'react-icons/fa';
import Button from '../common/Button';
import { useScrollNavigation } from '@/hooks/UseScrollNavigaion';
import QuotesModel from '../modals/QuotesModel';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const drawerRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  

  const ScrollNavigation = useScrollNavigation(setMenuOpen, setActiveSection);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
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
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run on mount in case user is not at top
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="bg-blue-50 shadow-md w-full top-0 left-0 border-b border-gray-200">
      <div className="mx-auto flex flex-wrap items-center justify-between 2xl:justify-between px-4 sm:px-6 md:px-8 lg:px-32 2xl:px-25 w-full  py-2 md:py-3 2xl:py-4">
        {/* Logo and Brand */}
        <button
          type="button"
          className="flex items-center gap-2 bg-transparent border-none outline-none cursor-pointer"
          onClick={() => ScrollNavigation({ name: 'Home', href: '#home' })}
        >
          <div className="bg-blue-500 p-2 sm:p-3 rounded-xl">
            <FaTruck className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-white" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-base sm:text-lg lg:text-xl 2xl:text-2xl text-neutral-900">
              Alsaif Transport
            </span>
            <span className="text-xs sm:text-sm 2xl:text-[14px] text-neutral-500">
              Premium truck service
            </span>
          </div>
        </button>

        {/* Hamburger Icon for Mobile */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded focus:outline-none transition-transform duration-300 focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6 text-neutral-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Drawer / Links */}
        <div
          ref={drawerRef}
          className={`md:static md:flex items-center w-2/3 md:w-auto  transition-transform duration-500 z-50
            fixed top-0 right-0 h-full bg-white shadow-lg md:shadow-none md:bg-transparent
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0`}
        >
          {/* Close button for mobile drawer */}
          <button
            aria-label="Close menu"
            className="absolute top-4 right-4 md:hidden text-2xl text-gray-700 hover:text-blue-500 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          <ul className="flex flex-col md:flex-row md:space-x-3 lg:space-x-5 items-start md:items-center mt-20 md:mt-0 ps-4 md:ps-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  type="button"
                  className={`block px-2 py-2 font-[520] cursor-pointer text-sm sm:text-base 2xl:text-[21px] rounded transition-colors
                    ${activeSection === link.href.replace('#', '') ? 'text-blue-500' : 'text-neutral-600 hover:text-blue-500'}`}
                  onClick={() => ScrollNavigation(link)}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <Button
                type="button"
                name=""
                className="rounded-full text-sm 2xl:text-[17px] mt-4 md:mt-0 2xl:py-[7px]"
                onClick={() => setIsModalOpen(true)}
              >
                Get Quotes
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <QuotesModel isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />

    </nav>
  );
};

export default Navbar;
