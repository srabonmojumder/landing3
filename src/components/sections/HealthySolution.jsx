'use client';

import React from 'react';
import {
  CheckCircle2,
  Heart,
  ShoppingCart,
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  ArrowRight,
  Leaf,
} from 'lucide-react';

export default function HealthySolution({ onOrderClick }) {
  const superfoodBenefits = [
    {
      icon: <Sparkles size={22} />,
      title: 'উচ্চমাত্রার আয়রন ও ক্যালসিয়াম',
      desc: 'প্রাকৃতিক আয়রন রক্তে হিমোগ্লোবিন বাড়িয়ে রক্তস্বল্পতা দূর করে এবং ক্যালসিয়াম শিশুর হাড় ও দাঁতের মজবুত গঠনে ভূমিকা রাখে।',
      metric: 'হিমোগ্লোবিন ও হাড়ের শক্তি',
    },
    {
      icon: <Zap size={22} />,
      title: 'শূন্য রিফাইন সুগার ও স্থায়ী এনার্জি',
      desc: 'সম্পূর্ণ কৃত্রিম চিনিমুক্ত হওয়ায় এটি কোনো ক্ষতিকর সুগার স্পাইক দেয় না, বরং শিশুকে সারাদিন প্রাকৃতিক প্রাণবন্ততায় রাখে।',
      metric: '১০০% নো অ্যাডেড সুগার',
    },
    {
      icon: <Activity size={22} />,
      title: 'ন্যাচারাল ফাইবার ও সহজ হজম',
      desc: 'প্রাকৃতিক ডায়েটারি ফাইবার শিশুর পেটের সমস্যা ও কোষ্ঠকাঠিন্য দূর করে এবং খাদ্য হজমে ও রুচি বৃদ্ধিতে দারুণ সহায়তা করে।',
      metric: 'উন্নত মেটাবলিজম',
    },
    {
      icon: <Heart size={22} />,
      title: 'নাস্তা ও টিফিনে শিশুর প্রিয় খাবার',
      desc: 'সকালের পাউরুটি, পরোটা, ওটস কিংবা গরম দুধের সাথে ডেট জ্যাম সহজে মিশিয়ে দেওয়া যায় — শিশুরা প্লেট চেটেপুটে আনন্দ নিয়ে খায়।',
      metric: 'চমৎকার প্রাকৃতিক স্বাদ',
    },
  ];

  return (
    <section className="section-wrapper healthy-solution-section" id="healthy-solution">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="modern-eyebrow-badge">
            <span className="pulse-dot" />
            <span>প্রাকৃতিক সমাধান ও সুস্বাদু পুষ্টি</span>
          </div>

          <h2 className="section-headline">
            স্বাদে ও পুষ্টিগুণে ভরপুর খাবারই শিশুর <span className="highlight-emerald">সুস্থতার একমাত্র উপায়</span>
          </h2>
          <p className="section-subtext">
            মায়ের মমতা আর আন্তর্জাতিক পুষ্টিমান অনুসরণ করে তৈরি খাঁটি ডেট জ্যাম — যা কোনো ক্ষতিকর
            উপাদান ছাড়াই আপনার সন্তানকে দেবে প্রাকৃতিক পুষ্টি ও দীর্ঘস্থায়ী শক্তি।
          </p>
        </div>

        {/* Bento Solution Grid */}
        <div className="solution-bento-grid">
          {/* Visual Showcase Card */}
          <div className="solution-visual-card reveal-on-scroll delay-100">
            <div className="visual-inner">
              <img
                src="/images/happy-mom-kid-chef.jpg"
                alt="হাসিখুশি মা ও শিশুর পুষ্টিকর ডেট জ্যাম উপভোগ"
                className="solution-img"
              />
              <div className="solution-visual-overlay">
                <div className="overlay-pill">
                  <Leaf size={15} />
                  <span>১০০% প্রাকৃতিক ও অর্গানিক</span>
                </div>
                <h3>প্রতিটি চামচে মায়ের মমতা ও সেরা পুষ্টির নিশ্চয়তা</h3>
                <p>কোনো প্রিজারভেটিভ বা ক্ষতিকর উপাদান নেই</p>
              </div>
            </div>
          </div>

          {/* 4 Superfood Benefit Cards */}
          <div className="solution-cards-col">
            {superfoodBenefits.map((item, index) => (
              <div
                key={index}
                className={`superfood-card reveal-on-scroll delay-${(index + 2) * 50}`}
              >
                <div className="card-header-row">
                  <div className="benefit-icon-box">{item.icon}</div>
                  <span className="benefit-metric-tag">{item.metric}</span>
                </div>
                <h4 className="benefit-title">{item.title}</h4>
                <p className="benefit-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nutritionist Quote Banner */}
        <div className="nutritionist-callout reveal-on-scroll delay-250">
          <div className="callout-icon">💡</div>
          <div className="callout-text">
            <strong>পুষ্টিবিদদের পরামর্শ:</strong> প্রক্রিয়াজাত সাদা চিনির পরিবর্তে সন্তানকে প্রাকৃতিক
            খেঁজুরের ফ্রুক্টোজ ও ফাইবারে অভ্যস্ত করুন — এটি শিশুদের মস্তিষ্কের সেল সতেজ রাখে ও রোগ প্রতিরোধ বাড়ায়।
          </div>
        </div>

        {/* Center CTA Button */}
        <div className="center-cta-box reveal-on-scroll delay-300">
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
            <span>১০০% ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন</span>
          </div>
        </div>
      </div>
    </section>
  );
}

