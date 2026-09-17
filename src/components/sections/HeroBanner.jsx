'use client';

import React from 'react';
import {
  ShoppingCart,
  CheckCircle,
  Award,
  Sparkles,
  Star,
  ShieldCheck,
  Truck,
  Leaf,
  Flame,
  ArrowRight,
} from 'lucide-react';

export default function HeroBanner({ onOrderClick }) {
  const featurePills = [
    { label: '১০০% চিনিমুক্ত', icon: <Leaf size={14} /> },
    { label: 'প্রিজারভেটিভ ছাড়া', icon: <ShieldCheck size={14} /> },
    { label: 'প্রাকৃতিক এনার্জি', icon: <Flame size={14} /> },
    { label: 'বাচ্চাদের দারুণ প্রিয়', icon: <Sparkles size={14} /> },
  ];

  return (
    <section className="hero-banner-section">
      <div className="hero-ambient-glow glow-1" />
      <div className="hero-ambient-glow glow-2" />

      <div className="container hero-container">
        {/* Top Floating Badge & Social Proof Row */}
        <div className="hero-badge-row reveal-on-scroll">
          <div className="hero-social-proof">
            <div className="avatar-cluster">
              <div className="mini-avatar av-1">রু</div>
              <div className="mini-avatar av-2">না</div>
              <div className="mini-avatar av-3">তা</div>
              <div className="mini-avatar av-4">সা</div>
            </div>
            <div className="proof-text">
              <div className="stars-mini">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" stroke="#f59e0b" />
                ))}
                <span className="rating-num">৪.৯/৫</span>
              </div>
              <span className="families-count">৩,৫০০+ পরিবার সন্তুষ্ট</span>
            </div>
          </div>
        </div>

        {/* Brand Logo Emblem */}
        <div className="brand-logo-wrap reveal-on-scroll reveal-scale">
          <div className="logo-ring">
            <img
              src="/images/logo-swad-ghor.png"
              alt="স্বাদ ঘর ন্যাচারাল ফুডস"
              className="brand-logo-img"
            />
          </div>
        </div>

        {/* Main Title with Two-Tone Accent */}
        <h1 className="hero-main-title reveal-on-scroll delay-100">
          স্বাস্থ্য সচেতন বাবা-মায়ের প্রথম পছন্দ
          <span className="hero-title-highlight">খাঁটি প্রিমিয়াম ডেট জ্যাম</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle reveal-on-scroll delay-150">
          ১০০% প্রাকৃতিক খেঁজুরের শক্তিতে তৈরি পুষ্টিকর ডেট জ্যাম — শিশুর সঠিক শারীরিক ও মানসিক বিকাশে
          অনন্য প্রাকৃতিক খাবার। সম্পূর্ণ চিনি ও ক্ষতিকর প্রিজারভেটিভ মুক্ত।
        </p>

        {/* Feature Quick-Pills */}
        <div className="hero-feature-pills reveal-on-scroll delay-200">
          {featurePills.map((pill, idx) => (
            <div key={idx} className="feature-pill-item">
              <span className="pill-icon">{pill.icon}</span>
              <span>{pill.label}</span>
            </div>
          ))}
        </div>

        {/* Product Visual Frame with Floating Glass Badges */}
        <div className="hero-visual-card reveal-on-scroll delay-250">
          <div className="image-inner-wrap">
            <img
              src="/images/date-jam-hero.jpg"
              alt="খাঁটি অর্গানিক ডেট জ্যাম জার ও রুটি টোস্ট"
              className="hero-product-img"
            />

            {/* Floating Live Indicator Badge */}
            <div className="floating-live-badge">
              <span className="live-dot" />
              <span>আজকের ফ্রেশ স্টক প্রস্তুত</span>
            </div>

            {/* Glassmorphic Tags */}
            <div className="floating-tag floating-tag-left">
              <CheckCircle size={17} color="#34d399" />
              <div>
                <strong>১০০% খাঁটি ও নিরাপদ</strong>
                <span>কোনো কৃত্রিম সুগার নেই</span>
              </div>
            </div>

            <div className="floating-tag floating-tag-right">
              <Award size={17} color="#fbbf24" />
              <div>
                <strong>শেফ সার্টিফাইড ফর্মুলা</strong>
                <span>ল্যাব টেস্টেড হাইজিন</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button Wrapper with Trust Signals */}
        <div className="hero-cta-wrapper reveal-on-scroll delay-300">
          <button
            type="button"
            className="btn-red-cta btn-pulse"
            onClick={onOrderClick}
          >
            <ShoppingCart size={22} />
            <span>অর্ডার করতে চাই</span>
            <ArrowRight size={18} />
          </button>

          <div className="cta-guarantee-note">
            <ShieldCheck size={16} />
            <span>ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে চেক করে টাকা দিন</span>
          </div>
        </div>
      </div>
    </section>
  );
}

