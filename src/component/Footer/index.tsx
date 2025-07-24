'use client';

import { useScrollNavigation } from '@/hooks/UseScrollNavigaion';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaTruck, FaYoutube } from 'react-icons/fa';





const Footer = () => {

  const ScrollNavigation = useScrollNavigation();
  // Handle scroll navigation for quick links

  const handleQuickLinkClick = (link: { name: string; href: string }) => {
    ScrollNavigation({ name: link.name, href: link.href });
  };

  const {t} = useTranslation('common');

  const QuickLinks = [

  { name: t('navbar_home'), href: '#home' },
  { name: t('navbar_services'), href: '#services' },
  { name: t('navbar_fleet'), href: '#fleet' },
  { name: t('navbar_about'), href: '#about' },
  { name: t('navbar_quotes'), href: '#get-quotes' },
];
const ContactInfo = [
  { icon: <FaPhoneAlt className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: '+966596003333' },
  { icon: <FaEnvelope className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: 'social.media@alsaifexpress.com' },
  { icon: <FaMapMarkerAlt className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: t('saudi_arabia') },
  { icon: <FaClock className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: t('support') },
];

const socialMediaLinks = [
  { icon: <FaFacebookF className='2xl:size-5' />, href: 'https://www.facebook.com/profile.php?id=100091362270977' },
  { icon: <FaTwitter className='2xl:size-5' />, href: 'https://x.com/ExpressAlsaif' },
  { icon: <FaInstagram className='2xl:size-5' />, href: 'https://www.instagram.com/alsaif.express/' },
  { icon: <FaYoutube className='2xl:size-5' />, href: 'https://www.youtube.com/channel/UCJknqftupTB8XHYDeWK0ahw' },
];

  return (
    <footer className="bg-[#006fba] text-white pt-12 pb-6 px-4 sm:px-10 md:px-32 ">
      <div className="w-full mx-auto  grid grid-cols-1 sm:flex sm:justify-between sm:items-start sm:flex-wrap md:flex md:justify-between md:items-start  gap-10 pb-8 border-b-1 border-gray-400">
        {/* Brand & Socials */}
        <div>
          <button
            onClick={() => ScrollNavigation({ name: 'Home', href: '#home' })}
            className='h-[42px] cursor-pointer'
          >
            <img src="./companylogo.webp" alt="Alsaif Transport Logo" className='h-full object-contain' />
          </button>
          <p className="text-white/90 text-sm mb-4 mt-2 max-w-xs">
            {t('footer_description')}
          </p>
          <div className="flex gap-3 mt-4">
            {socialMediaLinks.map((link, index) => (
              <Link key={index} href={link.href} target='_blank' className="bg-blue-500 hover:bg-blue-600 p-2 flex justify-center items-center rounded-full transition">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">{t('quick_links')}</h4>
          <ul className="space-y-1 text-white/90 ">
            {QuickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}
                  className="hover:text-white/70 transition text-md"
                  onClick={e => {
                    handleQuickLinkClick(link);
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                    }
                  }}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">{t('contact_info')}</h4>
          {/* Contact Info */}
          <ul className="space-y-2 text-white/90">
            {ContactInfo.map((info, index) => (
              <li key={index} className="flex items-center gap-3 2xl:text-lg">
                {info.icon}
                <span>{info.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 text-center text-white/90 text-sm flex flex-col md:flex-row items-center justify-between gap-1">
        <span> &copy; {new Date().getFullYear()} {t('copy_right_text_data')}</span>
        <div className="flex items-center gap-2">

          <Link href="/" className="hover:text-white transition">{t('policy')}</Link>
          <span className="mx-2 hidden md:block">|</span>
          <Link href="/" className="hover:text-white transition">{t('terms_of_service')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 