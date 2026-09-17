'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, MapPin, ThumbsUp, Quote, MessageSquareHeart } from 'lucide-react';

export default function CustomerReviews() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'ফারহানা আক্তার',
      location: 'উত্তরা, ঢাকা',
      avatarLetter: 'ফা',
      avatarGrad: 'from-emerald',
      rating: 5,
      date: '২ দিন আগে',
      pack: '২টি জার (ফ্যামিলি প্যাক)',
      text: 'আমার ৬ বছরের ছেলে সকালে পাউরুটি বা ডিম কিছুই খেতে চাইতো না। এই ডেট জ্যাম পাউরুটিতে দেওয়ার পর থেকে সে প্লেট চেটেপুটে শেষ করে! সবচেয়ে বড় শান্তি হলো এতে কোনো সাদা চিনি নেই।',
      likes: 18,
    },
    {
      id: 2,
      name: 'তানজিলা সুলতানা',
      location: 'জিইসি, চট্টগ্রাম',
      avatarLetter: 'তা',
      avatarGrad: 'from-amber',
      rating: 5,
      date: '৪ দিন আগে',
      pack: '৩টি জার (মেগা সেভার প্যাক)',
      text: 'বাজারে চিনি ও রঙের যে ছড়াছড়ি, বাচ্চাদের জন্য ভালো কিছু পাওয়াই মুশকিল ছিল। স্বাদ ঘরের ডেট জ্যামটা সত্যি অরিজিনাল খেঁজুরের স্বাদ দেয়। ফ্যামিলি প্যাক নিয়েছিলাম, সবাই খুব পছন্দ করেছে।',
      likes: 14,
    },
    {
      id: 3,
      name: 'মো: নাজমুল হাসান',
      location: 'বোয়ালিয়া, রাজশাহী',
      avatarLetter: 'না',
      avatarGrad: 'from-blue',
      rating: 5,
      date: '১ সপ্তাহ আগে',
      pack: '২টি জার (ফ্যামিলি প্যাক)',
      text: 'প্যাকেজিং খুবই প্রফেশনাল ও মজবুত ছিল। মাত্র দুই দিনে ডেলিভারি পেয়েছি। প্রোডাক্টের থিকনেস ও স্বাদ দুটোই প্রিমিয়াম মানের। প্রতিটি সচেতন পরিবারের ঘরে এটি থাকা উচিত।',
      likes: 21,
    },
    {
      id: 4,
      name: 'সাবরিনা ইয়াসমিন',
      location: 'উপশহর, সিলেট',
      avatarLetter: 'সা',
      avatarGrad: 'from-rose',
      rating: 5,
      date: '১ সপ্তাহ আগে',
      pack: '১টি জার (সিঙ্গেল প্যাক)',
      text: 'বাচ্চাকে স্কুলে টিফিনে দেওয়ার জন্য একদম পারফেক্ট। কোনো প্রিজারভেটিভ নেই জেনে নিশ্চিন্তে খাওয়াই। বাচ্চা আগের চেয়ে অনেক বেশি এনার্জিটিক থাকে। অনেক শুভকামনা!',
      likes: 9,
    },
    {
      id: 5,
      name: 'আরিফুল ইসলাম',
      location: 'ধানমন্ডি, ঢাকা',
      avatarLetter: 'আ',
      avatarGrad: 'from-emerald',
      rating: 5,
      date: '১০ দিন আগে',
      pack: '২টি জার (ফ্যামিলি প্যাক)',
      text: 'আমি নিজে ডায়াবেটিসের বর্ডারলাইনে আছি, মিষ্টি খাওয়া বারণ। কিন্তু এই প্রাকৃতিক খেঁজুরের জ্যাম চা-চামচ দিয়ে টোস্টের সাথে খেলে কোনো সমস্যা হয় না। খাঁটি ও রুচিকর খাবার।',
      likes: 27,
    },
    {
      id: 6,
      name: 'নুসরাত জাহান',
      location: 'সোনাডাঙ্গা, খুলনা',
      avatarLetter: 'নু',
      avatarGrad: 'from-amber',
      rating: 5,
      date: '২ সপ্তাহ আগে',
      pack: '৩টি জার (মেগা সেভার প্যাক)',
      text: 'ক্যাশ অন ডেলিভারিতে চেক করে নিয়েছিলাম। যেমন দেখেছি তেমনটাই পেয়েছি। ৩ জারের মেগা সেভার প্যাকে ফ্রি ডেলিভারি পেয়েছি। অসাধারণ সার্ভিস!',
      likes: 16,
    },
  ];

  return (
    <section className="section-wrapper customer-reviews-section" id="customer-reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="modern-eyebrow-badge badge-amber">
            <span className="pulse-dot" />
            <span>বাস্তব ক্রেতাদের অভিজ্ঞতা ও সোশ্যাল প্রুফ</span>
          </div>

          <h2 className="section-headline">
            সম্মানিত অভিভাবক ও পরিবারের <span className="highlight-gold">আন্তরিক মতামত</span>
          </h2>
          <p className="section-subtext">
            স্বাদ ঘর প্রিমিয়াম ডেট জ্যাম ব্যবহার করে নিয়মিত উপকৃত হচ্ছেন দেশের ৩,৫০০+ স্বাস্থ্য সচেতন পরিবার।
          </p>
        </div>

        {/* Rating Breakdown & Stats Showcase Bar */}
        <div className="rating-summary-card reveal-on-scroll delay-100">
          <div className="summary-score-col">
            <div className="score-big">৪.৯</div>
            <div className="stars-cluster">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" stroke="#f59e0b" />
              ))}
            </div>
            <div className="score-label">৩,৫০০+ ভেরিফাইড রিভিউ</div>
          </div>

          <div className="summary-bars-col">
            <div className="rating-bar-row">
              <span className="star-num">৫ স্টার</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '94%' }} />
              </div>
              <span className="bar-percent">৯৪%</span>
            </div>
            <div className="rating-bar-row">
              <span className="star-num">৪ স্টার</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '6%' }} />
              </div>
              <span className="bar-percent">৬%</span>
            </div>
            <div className="rating-bar-row">
              <span className="star-num">৩ স্টার</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '0%' }} />
              </div>
              <span className="bar-percent">০%</span>
            </div>
          </div>

          <div className="summary-badges-col">
            <div className="stat-pill">
              <CheckCircle2 size={16} color="#10b981" />
              <span>৯৮% কাস্টমার আবার অর্ডার করেছেন</span>
            </div>
            <div className="stat-pill">
              <MessageSquareHeart size={16} color="#e11d48" />
              <span>১০০% জেনুইন কাস্টমার রিভিউ</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <div
              key={rev.id}
              className={`modern-review-card reveal-on-scroll delay-${(index % 3) * 75 + 100}`}
            >
              <div className="review-card-top">
                <div className={`avatar-box ${rev.avatarGrad}`}>{rev.avatarLetter}</div>
                <div className="author-details">
                  <div className="author-name">{rev.name}</div>
                  <div className="author-location">
                    <MapPin size={12} />
                    <span>{rev.location}</span>
                  </div>
                </div>
                <Quote size={24} className="quote-watermark" />
              </div>

              <div className="rating-and-pack">
                <div className="star-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                </div>
                <span className="pack-bought-badge">{rev.pack}</span>
              </div>

              <p className="review-quote-text">“{rev.text}”</p>

              <div className="review-card-footer">
                <div className="verified-buyer-tag">
                  <CheckCircle2 size={13} />
                  <span>ভেরিফাইড ক্রেতা</span>
                </div>
                <div className="footer-right">
                  <span className="review-date">{rev.date}</span>
                  <div className="helpful-tag">
                    <ThumbsUp size={12} />
                    <span>{rev.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

