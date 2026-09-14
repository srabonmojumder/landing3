'use client';

import React from 'react';
import { PhoneCall, Sparkles } from 'lucide-react';

export default function HeaderBar() {
  return (
    <header className="header-topbar">
      <div className="container header-content">
        <div className="announcement-box">
          <span className="sparkle-badge">
            <Sparkles size={12} style={{ display: 'inline', marginRight: '3px' }} />
            স্পেশাল অফার
          </span>
          <span>আজকের অর্ডারে পাচ্ছেন মেগা ডিসকাউন্ট ও দ্রুততম ক্যাশ অন ডেলিভারি!</span>
        </div>

        <a href="tel:01700000000" className="hotline-link">
          <PhoneCall size={16} />
          <span>হটলাইন: ০১৭০০-০০০০০০</span>
        </a>
      </div>
    </header>
  );
}
