'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function FloatingCTA({ onOrderClick, selectedPackage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 450px and hide when at the very bottom near order form
      const scrollY = window.scrollY;
      const orderFormEl = document.getElementById('order-form-section');
      
      let isNearOrder = false;
      if (orderFormEl) {
        const rect = orderFormEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isNearOrder = true;
        }
      }

      if (scrollY > 400 && !isNearOrder) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`floating-sticky-cta ${isVisible ? 'visible' : ''}`}>
      <div className="floating-inner">
        <div className="floating-left-info">
          <img
            src="/images/date-jam-hero.jpg"
            alt="ডেট জ্যাম"
            className="floating-thumb"
          />
          <div className="floating-text-wrap">
            <div className="floating-title">
              {selectedPackage?.name || 'খাঁটি প্রিমিয়াম ডেট জ্যাম'}
            </div>
            <div className="floating-price">
              ৳{selectedPackage?.price || 490}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="floating-action-btn"
          onClick={onOrderClick}
        >
          <ShoppingBag size={18} />
          <span>অর্ডার করতে চাই</span>
        </button>
      </div>
    </div>
  );
}
