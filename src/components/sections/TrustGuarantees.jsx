'use client';

import React from 'react';
import { ShieldCheck, Truck, RotateCcw, ThumbsUp } from 'lucide-react';

export default function TrustGuarantees() {
  const guarantees = [
    {
      icon: <ShieldCheck size={26} />,
      title: '১০০% ক্যাশ অন ডেলিভারি',
      desc: 'পণ্য হাতে পেয়ে পুরোপুরি নিশ্চিন্ত হয়ে মূল্য পরিশোধ করুন',
    },
    {
      icon: <ThumbsUp size={26} />,
      title: 'চেক করে নেওয়ার সুযোগ',
      desc: 'ডেলিভারি ম্যানের সামনে প্যাকেট খুলে চেক করে গ্রহণ করুন',
    },
    {
      icon: <Truck size={26} />,
      title: 'দ্রুততম হোম ডেলিভারি',
      desc: 'ঢাকা সিটিতে ২৪ ঘণ্টায় এবং সারাদেশে ২-৩ দিনে ডেলিভারি',
    },
    {
      icon: <RotateCcw size={26} />,
      title: 'সহজ রিটার্ন সুবিধা',
      desc: 'কোনো সমস্যা থাকলে ৭ দিনের মধ্যে সহজ রিটার্ন বা এক্সচেঞ্জ',
    },
  ];

  return (
    <section className="trust-guarantees-section">
      <div className="container">
        <div className="trust-grid">
          {guarantees.map((item, index) => (
            <div key={index} className="trust-card reveal-on-scroll delay-100">
              <div className="trust-icon">{item.icon}</div>
              <div className="trust-title">{item.title}</div>
              <div className="trust-sub">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
