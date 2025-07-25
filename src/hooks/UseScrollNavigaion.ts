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
      quotes: -68,
    };

    const yOffset = yOffsetMap[id] ?? 0;
    const element = document.getElementById(id);

    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // ✅ Optional: clean up hash after scroll
      window.history.replaceState(null, '', `/`);
    }

    if (setMenuOpen) setMenuOpen(false);
    if (setActiveSection) setActiveSection(id);
  };

  return handleScrollNavigation;
};
