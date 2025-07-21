'use client';

import { useScrollNavigation } from '@/hooks/UseScrollNavigaion';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaTruck, FaYoutube } from 'react-icons/fa';

const QuickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'About', href: '#about' },
  { name: 'Get Quote', href: '#get-quotes' },
];

const ContactInfo = [
  { icon: <FaPhoneAlt className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: '+966-XXX-XXXX' },
  { icon: <FaEnvelope className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: 'info@alsaiftransport.com' },
  { icon: <FaMapMarkerAlt className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: 'Saudi Arabia' },
  { icon: <FaClock className="text-blue-400 w-5 h-5 flex-shrink-0" />, text: '24/7 Support' },
];

const socialMediaLinks = [
  { icon: <FaFacebookF className='2xl:size-5' />, href: 'https://www.facebook.com/profile.php?id=100091362270977' },
  { icon: <FaTwitter className='2xl:size-5' />, href: 'https://x.com/ExpressAlsaif' },
  { icon: <FaInstagram className='2xl:size-5' />, href: 'https://www.instagram.com/alsaif.express/' },
  { icon: <FaYoutube className='2xl:size-5' />, href: 'https://www.youtube.com/channel/UCJknqftupTB8XHYDeWK0ahw' },
];

const Footer = () => {

  const ScrollNavigation = useScrollNavigation();
  // Handle scroll navigation for quick links

  const handleQuickLinkClick = (link: { name: string; href: string }) => {
    ScrollNavigation({ name: link.name, href: link.href });
  };

  return (
    <footer className="bg-black/80 text-white pt-12 pb-6 px-4 sm:px-10 md:px-32 ">
      <div className="w-full mx-auto  grid grid-cols-1 sm:flex sm:justify-between sm:items-start sm:flex-wrap md:flex md:justify-between md:items-start 2xl:justify-center 2xl:gap-75 gap-10 pb-8 border-b-2 border-neutral-800">
        {/* Brand & Socials */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-xl">
              <FaTruck className="text-2xl text-white" />
            </div>
            <div>
              <span className="font-bold text-2xl">Alsaif Transport</span>
              <div className="text-neutral-400 text-sm -mt-1">Premium Transportation Services</div>
            </div>
          </div>
          <p className="text-neutral-300 text-sm 2xl:text-[17px] mb-4 mt-2 max-w-xs">
            Al Saif Group specializes in providing top-tier transportation services, logistics solutions, and real estate for clients across Saudi Arabia and the Middle East. With a fleet of over +5000 Trucks, we deliver innovative and customized solutions to meet your business needs. Established in 1963, we are a trusted partner in logistics, warehousing, and transportation.
          </p>
          <div className="flex gap-3 mt-4">
            {socialMediaLinks.map((link, index) => (
              <Link key={index} href={link.href} target='_blank' className="bg-neutral-800 hover:bg-blue-600 p-2 2xl:size-12 flex justify-center items-center rounded-full transition">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-neutral-300 ">
            {QuickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}
                  className="hover:text-white transition 2xl:text-lg"
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
          <h4 className="font-bold text-lg mb-4">Contact Info</h4>
          {/* Contact Info */}
          <ul className="space-y-3 text-neutral-300">
            {ContactInfo.map((info, index) => (
              <li key={index} className="flex items-center gap-3 2xl:text-lg">
                {info.icon}
                <span>{info.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 text-center text-neutral-400 text-sm 2xl:text-lg flex flex-col md:flex-row items-center justify-center gap-1">
        <span> &copy; {new Date().getFullYear()} Al Saif Transportation, All Rights Reserved. </span>
        <span className="mx-2 hidden md:block">|</span>
        <Link href="/" className="hover:text-white transition">Privacy Policy</Link>
        <span className="mx-2 hidden md:block">|</span>
        <Link href="/" className="hover:text-white transition">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer; 