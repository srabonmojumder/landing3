'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle, Sparkles, Microscope } from 'lucide-react';

export default function ChefCertification() {
  const pillars = [
    {
      icon: <Award size={22} />,
      title: 'সার্টিফাইড শেফ ফর্মুলা',
      desc: 'আন্তর্জাতিক মানসম্মত রন্ধনশিল্পী কর্তৃক উদ্ভাবিত স্বাস্থ্যকর রেসিপি',
    },
    {
      icon: <Microscope size={22} />,
      title: 'ল্যাব টেস্টেড হাইজিন',
      desc: 'সম্পূর্ণ জীবাণুমুক্ত ও নিরাপদ পরিবেশে স্বয়ংক্রিয় প্যাকেজিং',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'আইএসও মান অনুসরণ',
      desc: 'খাদ্য নিরাপত্তা ও স্বাস্থ্য সুরক্ষার সকল জাতীয় নীতিমালা পালিত',
    },
    {
      icon: <CheckCircle size={22} />,
      title: '১০০% হালাল ও অর্গানিক',
      desc: 'কোনো ক্ষতিকর কৃত্রিম উপাদান বা অ্যালকোহল মুক্ত শতভাগ প্রাকৃতিক',
    },
  ];

  return (
    <section className="section-wrapper chef-certification-section" id="chef-cert">
      <div className="container">
        <div className="cert-container-card reveal-on-scroll">
          {/* Header Badge */}
          <div className="cert-header">
            <div className="cert-badge">
              <Award size={20} color="#fbbf24" />
              <span>Certified chef made</span>
            </div>
            <p className="cert-subtext">
              ISO এবং নিরাপদ খাদ্য অধিদপ্তরের সকল স্বাস্থ্যবিধি ও গাইডলাইন কঠোরভাবে অনুসরণ করে তৈরি
            </p>
          </div>

          {/* Framed Certificate Display */}
          <div className="certificate-display-frame reveal-on-scroll delay-100">
            <div className="inner-cert-wrap">
              <img
                src="/images/food-safety-certificate.jpg"
                alt="অ্যালিসন ফুড সেফটি ও সার্টিফাইড শেফ ডিপ্লোমা সার্টিফিকেট"
              />
            </div>
          </div>

          {/* Trust Pillars Grid */}
          <div className="cert-pillars-grid reveal-on-scroll delay-150">
            {pillars.map((item, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">{item.icon}</div>
                <div className="pillar-title">{item.title}</div>
                <div className="pillar-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
