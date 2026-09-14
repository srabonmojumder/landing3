'use client';

import React from 'react';
import { CheckCircle2, Heart, ShoppingCart } from 'lucide-react';

export default function HealthySolution({ onOrderClick }) {
  const benefitPoints = [
    {
      highlight: 'দৈনিক পুষ্টির জাদুকরী সমাধান:',
      desc: 'প্রাকৃতিক উপাদানে প্রস্তুত খাঁটি ডেট জ্যাম শিশুর প্রতিদিনের ভিটামিন ও মিনারেল চাহিদা পূরণে অতুলনীয় ভূমিকা রাখে।',
    },
    {
      highlight: 'প্রচুর আয়রন, ক্যালসিয়াম ও ফাইবার:',
      desc: 'এতে রয়েছে উচ্চমাত্রার প্রাকৃতিক আয়রন ও ক্যালসিয়াম যা হাড় মজবুত করে এবং রক্তস্বল্পতা প্রতিরোধে অত্যন্ত কার্যকর।',
    },
    {
      highlight: 'শূন্য কৃত্রিম চিনি ও স্থায়ী এনার্জি:',
      desc: 'সম্পূর্ণ কৃত্রিম চিনিমুক্ত হওয়ায় এটি রক্তে ক্ষতিকর সুগার স্পাইক দেয় না, বরং শিশুকে সারাদিন সক্রিয় ও চনমনে রাখে।',
    },
    {
      highlight: 'উন্নত হজম ও প্রখর স্মৃতিশক্তি:',
      desc: 'প্রাকৃতিক ডায়েটারি ফাইবার শিশুর পেটের সমস্যা ও কোষ্ঠকাঠিন্য দূর করে এবং মস্তিষ্কের কার্যক্ষমতা বাড়ায়।',
    },
    {
      highlight: 'নাস্তা ও টিফিনে সহজ ও মুখরোচক:',
      desc: 'সকালের পাউরুটি, পরোটা, ওটস কিংবা হালকা টোস্টের সাথে ডেট জ্যাম ছড়িয়ে দেওয়া মাত্রই শিশুরা আনন্দের সাথে খেয়ে নেয়।',
    },
  ];

  return (
    <section className="section-wrapper healthy-solution-section" id="healthy-solution">
      <div className="container">
        {/* Pill Header Badge */}
        <div className="section-title-center reveal-on-scroll">
          <div className="green-pill-badge">
            স্বাদে ও পুষ্টিগুণে ভরপুর খাবারই একমাত্র উপায়
          </div>
        </div>

        {/* Content Card with Split Layout */}
        <div className="solution-content-card reveal-on-scroll delay-100">
          <div className="split-layout">
            {/* Visual Side */}
            <div className="visual-side">
              <div className="solution-image-frame">
                <img
                  src="/images/happy-mom-kid-chef.jpg"
                  alt="হাসিখুশি মা ও শিশুর পুষ্টিকর ডেট জ্যাম উপভোগ"
                />
                <div className="solution-tag">
                  <Heart size={15} color="#f87171" />
                  <span>মায়ের মমতা ও খাঁটি পুষ্টি</span>
                </div>
              </div>
            </div>

            {/* Points Side */}
            <div className="points-side">
              <div className="benefit-list">
                {benefitPoints.map((item, index) => (
                  <div key={index} className="benefit-item">
                    <div className="icon-wrap">
                      <CheckCircle2 size={18} />
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
