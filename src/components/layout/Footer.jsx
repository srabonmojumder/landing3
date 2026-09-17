import React from 'react';
import { PhoneCall, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        {/* Brand Showcase */}
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img
              src="/images/logo-swad-ghor.png"
              alt="স্বাদ ঘর লোগো"
              className="footer-logo"
            />
          </div>
          <div className="brand-info">
            <span className="brand-text">স্বাদ ঘর ন্যাচারাল ফুডস</span>
            <span className="brand-tagline">১০০% প্রাকৃতিক ও বিশুদ্ধ খাদ্যের বিশ্বস্ত ঠিকানা</span>
          </div>
        </div>

        <p className="footer-desc">
          স্বাস্থ্য সচেতন পরিবারের জন্য ১০০% খাঁটি খেজুর, মধু ও স্বাস্থ্যসম্মত প্রাকৃতিক উপাদানে তৈরি প্রিমিয়াম ডেট জ্যাম। 
          রাসায়নিক প্রিজারভেটিভ বা রিফাইন্ড চিনি মুক্ত পুষ্টিকর খাদ্য পৌঁছে দেয়াই আমাদের একমাত্র অঙ্গীকার।
        </p>

        {/* Support & Hotline Bar */}
        <div className="footer-support-box">
          <div className="support-item">
            <PhoneCall size={20} className="support-icon" />
            <div>
              <span className="support-label">যে কোনো প্রয়োজনে সরাসরি কল করুন</span>
              <a href="tel:01828392465" className="support-number">০১৮২৮ ৩৯২৪৬৫</a>
            </div>
          </div>
          <div className="support-divider" />
          <div className="support-item">
            <ShieldCheck size={20} className="support-icon" />
            <div>
              <span className="support-label">ক্যাশ অন ডেলিভারি সুবিধা</span>
              <span className="support-val">পণ্য হাতে পেয়ে চেক করে মূল্য পরিশোধ</span>
            </div>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="footer-links-row">
          <a href="#hero-banner">হোম পেজ</a>
          <a href="#health-warning">কেন প্রয়োজন</a>
          <a href="#why-date-jam">তুলনামূলক পুষ্টি</a>
          <a href="#chef-cert">কোয়ালিটি গ্যারান্টি</a>
          <a href="#customer-reviews">কাস্টমার মতামত</a>
          <a href="#order-form-section">অর্ডার ফর্ম</a>
          <a href="#trust-guarantees">রিফান্ড পলিসি</a>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="copyright-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} স্বাদ ঘর ন্যাচারাল ফুডস | সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="crafted-with">
            তৈরি করা হয়েছে শিশুদের পুষ্টিকর ও নিরাপদ খাদ্যের ভালোবাসায় <Heart size={14} className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
}
