import { Dispatch, SetStateAction } from 'react';

export const useScrollNavigation = (
  setMenuOpen?: Dispatch<SetStateAction<boolean>>,
  setActiveSection?: Dispatch<SetStateAction<string>>
) => {
  const handleScrollNavigation = (link: { name: string; href: string }) => {
    const id = link.href.replace('#', '');
    const yOffsetMap: Record<string, number> = {
      home: -80,
      services: -80,
      fleet: -60,
      about: -100,
      contact: -80,
      'get-quotes': -68,
    };
    const yOffset = yOffsetMap[id] ?? -80;
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', id === 'home' ? '/' : `/${id}`);
    }
    // Close menu if setMenuOpen is provided
    if (setMenuOpen) {
      setMenuOpen(false);
    }
    if (setActiveSection) {
      setActiveSection(id);
    }
  };
  return handleScrollNavigation;
};