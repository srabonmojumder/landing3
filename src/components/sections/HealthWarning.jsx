'use client';

import React from 'react';
import { AlertTriangle, XCircle, ShoppingCart } from 'lucide-react';

export default function HealthWarning({ onOrderClick }) {
  const hazardPoints = [
    {
      highlight: 'অতিরিক্ত চিনি ও ক্যালোরি:',
      desc: 'প্রক্রিয়াজাত খাবারে থাকা অতিরিক্ত সাদা চিনি শিশুদের দাঁতের ক্ষয়, স্থূলতা ও হাইপারঅ্যাক্টিভিটি বাড়ায়।',
    },
    {
      highlight: 'প্রিজারভেটিভ ও রাসায়নিক রং:',
      desc: 'ক্ষতিকর কৃত্রিম প্রিজারভেটিভ ও কেমিক্যাল শিশুর শরীরের রোগ প্রতিরোধ ক্ষমতা আশঙ্কাজনকভাবে দুর্বল করে দেয়।',
    },
    {
      highlight: 'শারীরিক ও মানসিক বিকাশে বাধা:',
      desc: 'নিয়মিত অস্বাস্থ্যকর জাঙ্ক ফুড গ্রহণে দীর্ঘস্থায়ী পুষ্টিহীনতা দেখা দেয় এবং স্মৃতিশক্তি ও পড়াশোনার একাগ্রতা কমে যায়।',
    },
    {
      highlight: 'চঞ্চলতা ও দ্রুত ক্লান্তি:',
      desc: 'জাঙ্ক ফুডে শর্ট-টার্ম সুগার স্পাইক হয়, যার ফলে শিশুরা অল্পতেই ক্লান্ত, অলস ও মেজাজ খিটখিটে হয়ে পড়ে।',
    },
    {
      highlight: 'দীর্ঘমেয়াদী স্বাস্থ্যঝুঁকি:',
      desc: 'ছোটবেলা থেকেই অস্বাস্থ্যকর খাবারে অভ্যস্ত হলে পরবর্তীতে ডায়াবেটিস ও লিভারের সমস্যার মারাত্মক ঝুঁকি তৈরি হয়।',
    },
  ];

  return (
    <section className="section-wrapper health-warning-section" id="health-warning">
      <div className="container">
        {/* Pill Header Badge */}
        <div className="section-title-center reveal-on-scroll">
          <div className="green-pill-badge">
            অসুস্থ্যতার প্রধান কারন অস্বাস্থ্যকর খাবার
          </div>
        </div>

        {/* Content Card with Split Layout */}
        <div className="warning-content-card reveal-on-scroll delay-100">
          <div className="split-layout">
            {/* Visual Side */}
            <div className="visual-side">
              <div className="warning-image-frame">
                <img
                  src="/images/unhealthy-junk-food-kid.jpg"
                  alt="জাঙ্ক ফুডের ক্ষতিকর প্রভাব ও ক্লান্ত শিশু"
                />
                <div className="alert-overlay-tag">
                  <AlertTriangle size={15} />
                  <span>সতর্কবার্তা: ক্ষতিকর প্রিজারভেটিভ</span>
                </div>
              </div>
            </div>

            {/* Points Side */}
            <div className="points-side">
              <div className="hazard-list">
                {hazardPoints.map((item, index) => (
                  <div key={index} className="hazard-item">
                    <div className="icon-wrap">
                      <XCircle size={18} />
                    </div>
                    <div className="item-text">
                      <strong>{item.highlight} </strong>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Red CTA Button */}
        <div className="center-cta-box reveal-on-scroll delay-200">
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
