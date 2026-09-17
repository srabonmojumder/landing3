'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Microscope, Sparkles, FileCheck } from 'lucide-react';

export default function ChefCertification() {
  const pillars = [
    {
      icon: <Award size={24} />,
      title: 'সার্টিফাইড শেফ ফর্মুলা',
      desc: 'আন্তর্জাতিক মানসম্পন্ন পেশাদার রন্ধনশিল্পী কর্তৃক বৈজ্ঞানিক অনুপাতে উদ্ভাবিত পুষ্টিকর রেসিপি',
      badge: 'Certified Recipe',
    },
    {
      icon: <Microscope size={24} />,
      title: 'ল্যাব টেস্টেড হাইজিন',
      desc: 'সম্পূর্ণ ধুলাবালি ও জীবাণুমুক্ত স্বয়ংক্রিয় ফুড-গ্রেড প্যাকেজিং ও কঠোর কোয়ালিটি কন্ট্রোল',
      badge: '100% Hygienic',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'আন্তর্জাতিক মান ও সুরক্ষা',
      desc: 'খাদ্য নিরাপত্তা ও স্বাস্থ্য সুরক্ষার সকল জাতীয় ও আন্তর্জাতিক গাইডলাইন কঠোরভাবে পালিত',
      badge: 'ISO Standards',
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: '১০০% হালাল ও অর্গানিক',
      desc: 'কোনো প্রকার রাসায়নিক, অ্যালকোহল কিংবা ক্ষতিকর প্রিজারভেটিভ বিহীন খাঁটি প্রাকৃতিক খাবার',
      badge: '100% Halal Pure',
    },
  ];

  return (
    <section className="section-wrapper chef-certification-section" id="chef-cert">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="modern-eyebrow-badge badge-amber">
            <span className="pulse-dot" />
            <span>আন্তর্জাতিক খাদ্য নিরাপত্তা ও কোয়ালিটি</span>
          </div>

          <h2 className="section-headline">
            সার্টিফাইড মাস্টার শেফের তত্ত্বাবধানে <span className="highlight-emerald">প্রস্তুতকৃত প্রিমিয়াম খাবার</span>
          </h2>
          <p className="section-subtext">
            শুধু কথায় নয়, প্রমাণে বিশ্বাসী। আন্তর্জাতিক ফুড সেফটি গাইডলাইন ও স্বাস্থ্যবিধি কঠোরভাবে
            অনুসরণ করে প্রতিটি জার তৈরি হয়।
          </p>
        </div>

        {/* Certificate Display Showcase */}
        <div className="cert-showcase-card reveal-on-scroll delay-100">
          <div className="cert-split-layout">
            {/* Left: Framed Certificate Plaque */}
            <div className="cert-plaque-col">
              <div className="certificate-plaque-frame">
                <div className="verified-seal-ribbon">
                  <FileCheck size={14} />
                  <span>ভেরিফাইড সনদপত্র</span>
                </div>
                <img
                  src="/images/food-safety-certificate.jpg"
                  alt="অ্যালিসন ফুড সেফটি ও সার্টিফাইড শেফ ডিপ্লোমা সার্টিফিকেট"
                  className="certificate-image"
                />
              </div>
            </div>

            {/* Right: Guarantee Highlights & Description */}
            <div className="cert-highlights-col">
              <div className="cert-badge-pill">
                <Award size={18} />
                <span>Certified Master Chef Formulated</span>
              </div>
              <h3 className="cert-highlights-title">
                আপনার সন্তানের জন্য আমরা বেছে নিয়েছি শতভাগ নিরাপদ ও বিজ্ঞানসম্মত খাদ্য প্রস্তুত প্রণালী
              </h3>
              <p className="cert-highlights-desc">
                বাজারের সাধারণ অপ্রাতিষ্ঠানিক পণ্যের মতো নয় — স্বাদ ঘর ডেট জ্যাম আন্তর্জাতিক মানদণ্ড মেনে
                সার্টিফাইড রন্ধনশিল্পীদের নির্দেশনায় তৈরি। এতে খেঁজুরের সকল পুষ্টিগুণ ও প্রাকৃতিক ভিটামিন অক্ষুণ্ণ থাকে।
              </p>

              <div className="cert-mini-checklist">
                <div className="check-row">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>ISO এবং নিরাপদ খাদ্য অধিদপ্তরের সকল স্বাস্থ্যবিধি শতভাগ মেনে চলা হয়</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>প্রতিটি ব্যাচ নিয়মিত ল্যাব পরীক্ষার মাধ্যমে হাইজিন ও পিউরিটি নিশ্চিত করা হয়</span>
                </div>
                <div className="check-row">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>কোনো প্রকার কৃত্রিম ফ্লেভার, সুগার বা থিকেনার ব্যবহার করা হয় না</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Pillars 4-Grid */}
          <div className="cert-pillars-grid">
            {pillars.map((item, index) => (
              <div
                key={index}
                className={`cert-pillar-card reveal-on-scroll delay-${(index + 1) * 75}`}
              >
                <div className="pillar-top">
                  <div className="pillar-icon-box">{item.icon}</div>
                  <span className="pillar-badge-text">{item.badge}</span>
                </div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

