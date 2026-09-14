'use client';

import React from 'react';
import { Scale, Sparkles, Check, ShoppingCart } from 'lucide-react';

export default function WhyDateJam({ onOrderClick }) {
  const whyPoints = [
    {
      highlight: '১০০% খাঁটি প্রিমিয়াম খেঁজুর:',
      desc: 'নির্বাচিত সেরা জাতের রসালো ও পুষ্টিকর খেঁজুর থেকে বিশেষ স্বাস্থ্যসম্মত ফর্মুলায় তৈরি শতভাগ প্রাকৃতিক ডেট জ্যাম।',
    },
    {
      highlight: 'রাসায়নিক ও ক্ষতিকর রং মুক্ত:',
      desc: 'কোনো প্রকার প্রিজারভেটিভ, কেমিক্যাল, চিনি কিংবা কৃত্রিম ফুড কালার মেশানো হয় না, যা বাজারের সাধারণ জ্যামে থাকে।',
    },
    {
      highlight: 'সব বয়সের জন্য আদর্শ:',
      desc: 'স্বাভাবিক প্রাকৃতিক মিষ্টি স্বাদের কারণে শিশু থেকে বৃদ্ধ পরিবারের প্রতিটি সদস্য নিশ্চিন্তে ও আনন্দের সাথে খেতে পারেন।',
    },
    {
      highlight: 'রোগ প্রতিরোধ ও শক্তির প্রাকৃতিক উৎস:',
      desc: 'ন্যাচারাল অ্যান্টিঅক্সিডেন্ট ও প্রয়োজনীয় মিনারেল সমৃদ্ধ হওয়ায় রক্তস্বল্পতা রোধ করে এবং শারীরিক দুর্বলতা দূর করে।',
    },
    {
      highlight: 'সুস্বাদু ও বহুমাত্রিক ব্যবহার:',
      desc: 'সকালের রুটি, পরোটা, ক্র্যাকার্স, ফলের সালাদ কিংবা কুসুম গরম দুধের সাথে মিশিয়ে খাওয়ার অতুলনীয় স্বাস্থ্যকর খাবার।',
    },
  ];

  return (
    <section className="section-wrapper why-date-jam-section" id="why-date-jam">
      <div className="container">
        {/* Pill Header Badge */}
        <div className="section-title-center reveal-on-scroll">
          <div className="green-pill-badge">
            কেন নিজেরা খাবো এবং বাচ্চাদেরও খাওয়াবো DATE JAM?
          </div>
        </div>

        {/* Content Card with Split Layout */}
        <div className="comparison-content-card reveal-on-scroll delay-100">
          <div className="split-layout">
            {/* Balance Scale Visual */}
            <div className="scale-visual-wrap">
              <div className="scale-image-frame">
                <img
                  src="/images/nutrition-balance-scale.jpg"
                  alt="জাঙ্ক ফুড বনাম প্রাকৃতিক ডেট জ্যামের পুষ্টির দাঁড়িপাল্লা"
                />
                <div className="scale-badge-top">
                  <Scale size={15} />
                  <span>পুষ্টিগুণে ভরপুর তৈরি</span>
                </div>
              </div>
            </div>

            {/* Points Side */}
            <div className="points-side">
              <div className="why-list">
                {whyPoints.map((item, index) => (
                  <div key={index} className="why-item">
                    <div className="icon-wrap">
                      <Check size={18} />
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
