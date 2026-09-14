'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/images/logo-swad-ghor.png"
            alt="স্বাদ ঘর লোগো"
            className="footer-logo"
          />
          <span className="brand-text">স্বাদ ঘর ন্যাচারাল ফুডস</span>
        </div>

        <p className="footer-desc">
          স্বাস্থ্য সচেতন পরিবারের জন্য ১০০% প্রাকৃতিক ও স্বাস্থ্যসম্মত খাঁটি উপাদানে তৈরি ডেট জ্যাম। 
          শিশুর সঠিক পুষ্টি ও নিরাপদ খাদ্য নিশ্চিত করাই আমাদের মূল লক্ষ্য।
        </p>

        <div className="footer-links-row">
          <a href="#order-form-section">অর্ডার করুন</a>
          <a href="#why-date-jam">কেন খাবেন</a>
          <a href="#customer-reviews">কাস্টমার রিভিউ</a>
          <a href="#chef-cert">সার্টিফিকেশন</a>
          <a href="#">প্রাইভেসি পলিসি</a>
          <a href="#">শর্তাবলী ও রিফান্ড</a>
        </div>

        <div className="copyright-text">
          &copy; {new Date().getFullYear()} স্বাদ ঘর ন্যাচারাল ফুডস | সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
}
