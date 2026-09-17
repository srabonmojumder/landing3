'use client';

import React from 'react';
import {
  Scale,
  Sparkles,
  Check,
  X,
  ShoppingCart,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ArrowRight,
  Flame,
} from 'lucide-react';

export default function WhyDateJam({ onOrderClick }) {
  const comparisonRows = [
    {
      feature: 'প্রধান উপাদান ও মিষ্টির উৎস',
      marketJam: 'অতিরিক্ত রিফাইন সাদা চিনি (৬০-৭০%) ও কৃত্রিম সুগার সিরাপ',
      marketOk: false,
      dateJam: '১০০% সেরা জাতের প্রাকৃতিক রসালো খেঁজুরের নির্যাস',
      dateOk: true,
    },
    {
      feature: 'প্রিজারভেটিভ ও ক্ষতিকর রং',
      marketJam: 'সোডিয়াম বেনজোয়েট ও কৃত্রিম ফুড কালার মেশানো',
      marketOk: false,
      dateJam: 'সম্পূর্ণ কেমিক্যাল, কৃত্রিম রং ও প্রিজারভেটিভ মুক্ত',
      dateOk: true,
    },
    {
      feature: 'শিশুর মেধা ও শারীরিক বিকাশ',
      marketJam: 'সুগার ক্র্যাশ ঘটায়, মেধা ও স্মরণশক্তিতে কোনো পুষ্টি যোগায় না',
      marketOk: false,
      dateJam: 'প্রাকৃতিক আয়রন ও খনিজ উপাদান মস্তিষ্কের বিকাশে দারুণ সহায়ক',
      dateOk: true,
    },
    {
      feature: 'দাঁতের স্বাস্থ্য ও স্থূলতার ঝুঁকি',
      marketJam: 'দাঁতে ক্যাভিটি/পোকা ধরা ও অকাল স্থূলতার তীব্র ঝুঁকি বাড়ায়',
      marketOk: false,
      dateJam: 'দাঁতের ক্ষতি করে না এবং স্বাস্থ্যসম্মত ওজন বজায় রাখে',
      dateOk: true,
    },
    {
      feature: 'হজম শক্তি ও অন্ত্রের যত্ন',
      marketJam: 'প্রাকৃতিক কোনো ফাইবার নেই, পেটে গ্যাস ও কোষ্ঠকাঠিন্য তৈরি করে',
      marketOk: false,
      dateJam: 'উচ্চমাত্রার প্রাকৃতিক ডায়েটারি ফাইবার যা হজমশক্তি বাড়ায়',
      dateOk: true,
    },
    {
      feature: 'রেসিপি ও কোয়ালিটি স্ট্যান্ডার্ড',
      marketJam: 'বাণিজ্যিক ফ্যাক্টরি ফর্মুলা, পুষ্টিমানের দিকে গুরুত্বহীন',
      marketOk: false,
      dateJam: 'আন্তর্জাতিক সার্টিফাইড শেফ ও নিরাপদ খাদ্য মানসম্মত রেসিপি',
      dateOk: true,
    },
  ];

  return (
    <section className="section-wrapper why-date-jam-section" id="why-date-jam">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="modern-eyebrow-badge badge-amber">
            <span className="pulse-dot" />
            <span>সরাসরি তুলনামূলক বিশ্লেষণ</span>
          </div>

          <h2 className="section-headline">
            কেন পরিবারের জন্য বেছে নেবেন <span className="highlight-gold">স্বাদ ঘর ডেট জ্যাম?</span>
          </h2>
          <p className="section-subtext">
            বাজারের সাধারণ চিনিযুক্ত জ্যাম বনাম ১০০% খাঁটি ডেট জ্যামের বাস্তব পার্থক্য নিজেই যাচাই করে সিদ্ধান্ত নিন।
          </p>
        </div>

        {/* Side-by-Side Comparison Table Matrix */}
        <div className="comparison-matrix-wrapper reveal-on-scroll delay-100">
          <div className="matrix-table">
            {/* Table Header */}
            <div className="matrix-head-row">
              <div className="col-feature">তুলনার মাপকাঠি</div>
              <div className="col-market">
                <div className="column-title-badge market-badge">
                  <XCircle size={17} />
                  <span>বাজারের সাধারণ জ্যাম</span>
                </div>
              </div>
              <div className="col-datejam">
                <div className="popular-ribbon">সেরা পছন্দ</div>
                <div className="column-title-badge datejam-badge">
                  <CheckCircle2 size={17} />
                  <span>স্বাদ ঘর প্রিমিয়াম ডেট জ্যাম</span>
                </div>
              </div>
            </div>

            {/* Table Body Rows */}
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="matrix-body-row">
                <div className="col-feature">
                  <strong>{row.feature}</strong>
                </div>

                <div className="col-market">
                  <div className="value-item market-val">
                    <X size={17} className="status-icon-x" />
                    <span>{row.marketJam}</span>
                  </div>
                </div>

                <div className="col-datejam">
                  <div className="value-item datejam-val">
                    <Check size={18} className="status-icon-check" />
                    <span>{row.dateJam}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spotlight Visual & Nutrition Scale Card */}
        <div className="nutrition-scale-spotlight reveal-on-scroll delay-200">
          <div className="scale-spotlight-inner">
            <img
              src="/images/nutrition-balance-scale.jpg"
              alt="জাঙ্ক ফুড বনাম প্রাকৃতিক ডেট জ্যামের পুষ্টির দাঁড়িপাল্লা"
              className="scale-spotlight-img"
            />
            <div className="scale-spotlight-content">
              <div className="spotlight-tag">
                <Scale size={16} />
                <span>পুষ্টি ও স্বাস্থ্যের দাঁড়িপাল্লা</span>
              </div>
              <h3>কোনো কম্প্রোমাইজ নয়, শিশুর জন্য সবচেয়ে খাঁটি খাবার</h3>
              <p>
                যেখানে বাজারের অস্বাস্থ্যকর মিষ্টি খাবারে রয়েছে রোগের ঝুঁকি, সেখানে স্বাদ ঘর ডেট জ্যাম
                নিশ্চিত করে প্রতিদিনের পুষ্টি ও সুস্থ জীবনের নিশ্চয়তা।
              </p>
            </div>
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
            <span>ডেলিভারি ম্যানের সামনে প্যাকেট খুলে চেক করে পেমেন্ট করুন</span>
          </div>
        </div>
      </div>
    </section>
  );
}

