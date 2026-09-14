'use client';

import { useEffect } from 'react';

/**
 * High-performance hook that triggers smooth scroll reveals
 * using native browser IntersectionObserver.
 */
export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: prefersReducedMotion ? 0 : 0.08,
    };

    let observer;
    try {
      observer = new IntersectionObserver(observerCallback, observerOptions);
    } catch (e) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      elements.forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    observeElements();
    const timer = setTimeout(observeElements, 150);

    let mutationObserver;
    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver(() => {
        observeElements();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, []);
}
