'use client';

import React from 'react';
import {
  AlertTriangle,
  XCircle,
  ShoppingCart,
  ShieldAlert,
  Brain,
  BatteryLow,
  Skull,
  ArrowRight,
} from 'lucide-react';

export default function HealthWarning({ onOrderClick }) {
  const hazardCards = [
    {
      icon: <Skull size={22} />,
      title: 'অতিরিক্ত সাদা চিনি ও সুগার স্পাইক',
      desc: 'প্রক্রিয়াজাত খাবারে থাকা রিফাইন সুগার শিশুদের দাঁতের স্থায়ী ক্ষয়, মেজাজ খিটখিটে হওয়া এবং শৈশবেই স্থূলতার ঝুঁকি বহুগুণ বাড়িয়ে দেয়।',
      tag: 'মারাত্মক ক্ষতিকর',
    },
    {
      icon: <ShieldAlert size={22} />,
      title: 'কৃত্রিম প্রিজারভেটিভ ও ফুড কালার',
      desc: 'কৃত্রিম রাসায়নিক প্রিজারভেটিভ শিশুর শরীরের রোগ প্রতিরোধ ক্ষমতা (Immunity) আশঙ্কাজনকভাবে দুর্বল করে ও পেটের স্থায়ী ক্ষতি করে।',
      tag: 'কেমিক্যাল লোড',
    },
    {
      icon: <Brain size={22} />,
      title: 'মেধা ও মানসিক বিকাশে বড় বাধা',
      desc: 'জাঙ্ক ফুডের বিষাক্ত উপাদান শিশুর মস্তিষ্কের কার্যক্ষমতা ব্যাহত করে, যার ফলে পড়াশোনায় একাগ্রতা কমে এবং স্মরণশক্তি দুর্বল হয়।',
      tag: 'মেধা বিপর্যয়',
    },
    {
      icon: <BatteryLow size={22} />,
      title: 'সুগার ক্র্যাশ ও অল্পতেই দ্রুত ক্লান্তি',
      desc: 'বাজারের জ্যামে শর্ট-টার্ম সুগার স্পাইকের পরপরই এনার্জি ক্র্যাশ ঘটে — ফলে শিশু অলস হয়ে পড়ে এবং কোনো কাজে উদ্যম পায় না।',
      tag: 'স্থায়ী ক্লান্তি',
    },
  ];

  return (
    <section className="section-wrapper health-warning-section" id="health-warning">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="modern-eyebrow-badge badge-warning">
            <span className="pulse-dot" />
            <span>সতর্কবার্তা: শিশুদের লুকানো বিপদ</span>
          </div>

          <h2 className="section-headline">
            অসুস্থতার মূল কারণ প্রতিদিনের <span className="highlight-red">অস্বাস্থ্যকর খাবার</span>
          </h2>
          <p className="section-subtext">
            বাজারের চকচকে প্যাকেটের সাধারণ জ্যাম ও অস্বাস্থ্যকর মিষ্টি খাবারে লুকিয়ে থাকা বিষাক্ত চিনি ও
            রাসায়নিক প্রিজারভেটিভ শিশুর সোনালী ভবিষ্যৎ নিঃশব্দে ধ্বংস করছে।
          </p>
        </div>

        {/* Warning Stat Bar */}
        <div className="warning-stat-banner reveal-on-scroll delay-100">
          <div className="stat-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="stat-text">
            <strong>গবেষণায় প্রমাণিত:</strong> নিয়মিত অতিরিক্ত সাদা চিনি ও কেমিক্যালযুক্ত খাবার গ্রহণে
            শতকরা ৮৫% শিশুর রোগ প্রতিরোধ ক্ষমতা এবং স্মরণশক্তি মারাত্মকভাবে ক্ষতিগ্রস্ত হয়!
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="warning-bento-grid">
          {/* Main Visual Column */}
          <div className="bento-visual-card reveal-on-scroll delay-150">
            <div className="visual-frame">
              <img
                src="/images/unhealthy-junk-food-kid.jpg"
                alt="জাঙ্ক ফুডের ক্ষতিকর প্রভাব ও ক্লান্ত শিশু"
                className="warning-img"
              />
              <div className="visual-overlay-content">
                <div className="danger-chip">
                  <AlertTriangle size={15} />
                  <span>সতর্ক হোন আজই</span>
                </div>
                <h3>শিশুর প্রতিদিনের খাবারে কৃত্রিম উপাদান বন্ধ করুন</h3>
                <p>ক্ষতিকর স্ন্যাকস শিশুর স্বাভাবিক দৈহিক বিকাশ স্তব্ধ করে দেয়</p>
              </div>
            </div>
          </div>

          {/* Cards Grid Column */}
          <div className="bento-cards-col">
            {hazardCards.map((item, index) => (
              <div
                key={index}
                className={`hazard-bento-card reveal-on-scroll delay-${(index + 2) * 50}`}
              >
                <div className="card-top-row">
                  <div className="card-icon-wrap">{item.icon}</div>
                  <span className="card-tag">{item.tag}</span>
                </div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
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
            <span>ক্যাশ অন ডেলিভারিতে সারাদেশে ২-৩ দিনে পৌঁছে যাবে</span>
          </div>
        </div>
      </div>
    </section>
  );
}

