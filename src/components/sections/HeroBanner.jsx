'use client';

import React from 'react';
import { ShoppingCart, CheckCircle, Award, Sparkles } from 'lucide-react';

export default function HeroBanner({ onOrderClick }) {
  return (
    <section className="hero-banner-section">
      <div className="container hero-container">
        {/* Brand Logo Emblem */}
        <div className="brand-logo-wrap reveal-on-scroll reveal-scale">
          <img
            src="/images/logo-swad-ghor.png"
            alt="স্বাদ ঘর ন্যাচারাল ফুডস"
            className="brand-logo-img"
          />
        </div>

        {/* Main Title Matching User Image */}
        <h1 className="hero-main-title reveal-on-scroll delay-100">
          স্বাস্থ্য সচেতন বাবা মায়ের প্রথম পছন্দ
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle reveal-on-scroll delay-150">
          ১০০% প্রাকৃতিক উপাদানে তৈরি ডেট জ্যাম, আপনার সন্তানের সুস্থ বিকাশে অনন্য ভূমিকা রাখবে
        </p>

        {/* Product Visual Card with Badges */}
        <div className="hero-visual-card reveal-on-scroll delay-200">
          <div className="image-inner-wrap">
            <img
              src="/images/date-jam-hero.jpg"
              alt="খাঁটি অর্গানিক ডেট জ্যাম জার ও রুটি টোস্ট"
            />
            <div className="floating-tag">
              <CheckCircle size={16} color="#fbbf24" />
              <span>১০০% খাঁটি ও চিনিমুক্ত</span>
            </div>
            <div className="floating-tag floating-tag-right">
              <Award size={16} color="#34d399" />
              <span>শেফ সার্টিফাইড রেসিপি</span>
            </div>
          </div>
        </div>

        {/* Red Pill CTA Button */}
        <div className="hero-cta-wrapper reveal-on-scroll delay-250">
          <button
            type="button"
            className="btn-red-cta btn-pulse"
            onClick={onOrderClick}
          >
            <ShoppingCart size={22} />
            <span>অর্ডার করতে চাই</span>
          </button>
        </div>
      </div>
    </section>
  );
}
