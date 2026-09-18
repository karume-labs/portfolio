import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '@/data/navigation-items';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(NAVIGATION_ITEMS[0].href);

  useEffect(() => {
    const visibleSections = new Set<string>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = `/#${entry.target.id}`;
        if (entry.isIntersecting) {
          visibleSections.add(id);
        } else {
          visibleSections.delete(id);
        }
      });

      // Check if at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('/');
        return;
      }

      // Find the first visible section in the order of NAVIGATION_ITEMS
      for (const item of NAVIGATION_ITEMS) {
        if (visibleSections.has(item.href)) {
          setActiveSection(item.href);
          return;
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -40% 0px',
    });

    NAVIGATION_ITEMS.forEach((item) => {
      if (item.href.startsWith('/#')) {
        const id = item.href.substring(2);
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
