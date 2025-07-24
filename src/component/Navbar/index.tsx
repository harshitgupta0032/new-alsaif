'use client';
import React, { useState, useRef, useEffect } from 'react';
import Button from '../common/Button';
import { useScrollNavigation } from '@/hooks/UseScrollNavigaion';
import QuotesModel from '../modals/ContactUsModal';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);


  const ScrollNavigation = useScrollNavigation(setMenuOpen, setActiveSection);

  const { t } = useTranslation('common');


  const navLinks = [
    { name: t('navbar_home'), href: '#home' },
    { name: t('navbar_services'), href: '#services' },
    { name: t('navbar_fleet'), href: '#fleet' },
    { name: t('navbar_about'), href: '#about' },
    { name: t('navbar_contact'), href: '#contact' },
  ];

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
    <nav className="bg-[#006fba] shadow-md  top-0 left-0 ">
      <div className="mx-auto flex flex-wrap w-11/12 md:w-5/6 items-center justify-between h-[80px]">
        {/* Logo and Brand */}
        <button
          onClick={() => ScrollNavigation({ name: 'Home', href: '#home' })}
          className='h-[42px] cursor-pointer'
        >
          <img src="./companylogo.webp" alt="Alsaif Transport Logo" className='h-full object-contain' />
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
          className={`md:static md:flex items-center w-2/3 md:w-auto  transition-transform duration-500 z-50 text-black/70 md:text-white px-3 
            fixed top-0 right-0 h-full bg-white shadow-lg md:shadow-none md:bg-transparent
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0`}
        >
          {/* Close button for mobile drawer */}
          <button
            aria-label="Close menu"
            className="absolute top-4 right-4 md:hidden text-2xl text-gray-700 hover:text-[#006fba] focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>


          <ul className="flex flex-col md:flex-row items-start md:items-center gap-3 lg:gap-[27px] pt-10 ps-2 md:pt-0 md:ps-0">
            {navLinks.map((link) => (
              <li key={link.name}
                className="">
                <button
                  type="button"
                  className={`block font-semibold cursor-pointer text-sm sm:text-base md:text-[14px] lg:text-base rounded transition-colors
                    ${activeSection === link.href.replace('#', '') ? 'text-blue-300' : ' hover:text-blue-200'}`}
                  onClick={() => {
                    if (link.name === 'Contact') {
                      setIsModalOpen(true);
                    } else {
                      ScrollNavigation(link)
                    }
                  }}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <Button
                type="button"
                name=""
                className="rounded-full bg-blue-500 hover:bg-blue-600 text-sm md:text-[10px] lg:text-[14px] mt-4 md:mt-0  md:px-[5px] lg:px-[16px] "
                onClick={() => {
                  ScrollNavigation({ name: 'Get Quotes', href: '#get-quotes' });
                  // setIsModalOpen(true);
                }}
              >
                {t('get_quotes_button')}
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
