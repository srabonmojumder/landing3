'use client';

import React from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      name: 'ফারহানা আক্তার',
      location: 'উত্তরা, ঢাকা',
      avatarLetter: 'ফা',
      rating: 5,
      date: '২ দিন আগে',
      text: 'আমার ৬ বছরের ছেলে সকালে পাউরুটি বা ডিম কিছুই খেতে চাইতো না। এই ডেট জ্যাম পাউরুটিতে দেওয়ার পর থেকে সে প্লেট চেটেপুটে শেষ করে! সবচেয়ে বড় শান্তি হলো এতে কোনো সাদা চিনি নেই।',
    },
    {
      name: 'তানজিলা সুলতানা',
      location: 'জিইসি, চট্টগ্রাম',
      avatarLetter: 'তা',
      rating: 5,
      date: '৪ দিন আগে',
      text: 'বাজারে চিনি ও রঙের যে ছড়াছড়ি, বাচ্চাদের জন্য ভালো কিছু পাওয়াই মুশকিল ছিল। স্বাদ ঘরের ডেট জ্যামটা সত্যি অরিজিনাল খেঁজুরের স্বাদ দেয়। ফ্যামিলি প্যাক নিয়েছিলাম, সবাই খুব পছন্দ করেছে।',
    },
    {
      name: 'মো: নাজমুল হাসান',
      location: 'বোয়ালিয়া, রাজশাহী',
      avatarLetter: 'না',
      rating: 5,
      date: '১ সপ্তাহ আগে',
      text: 'প্যাকেজিং খুবই প্রফেশনাল ও মজবুত ছিল। মাত্র দুই দিনে ডেলিভারি পেয়েছি। প্রোডাক্টের থিকনেস ও স্বাদ দুটোই প্রিমিয়াম মানের। প্রতিটি সচেতন পরিবারের ঘরে এটি থাকা উচিত।',
    },
    {
      name: 'সাবরিনা ইয়াসমিন',
      location: 'উপশহর, সিলেট',
      avatarLetter: 'সা',
      rating: 5,
      date: '১ সপ্তাহ আগে',
      text: 'বাচ্চাকে স্কুলে টিফিনে দেওয়ার জন্য একদম পারফেক্ট। কোনো প্রিজারভেটিভ নেই জেনে নিশ্চিন্তে খাওয়াই। বাচ্চা আগের চেয়ে অনেক বেশি এনার্জিটিক থাকে। অনেক শুভকামনা!',
    },
    {
      name: 'আরিফুল ইসলাম',
      location: 'ধানমন্ডি, ঢাকা',
      avatarLetter: 'আ',
      rating: 5,
      date: '১০ দিন আগে',
      text: 'আমি নিজে ডায়াবেটিসের বর্ডারলাইনে আছি, মিষ্টি খাওয়া বারণ। কিন্তু এই প্রাকৃতিক খেঁজুরের জ্যাম চা-চামচ দিয়ে টোস্টের সাথে খেলে কোনো সমস্যা হয় না। খাঁটি ও রুচিকর খাবার।',
    },
    {
      name: 'নুসরাত জাহান',
      location: 'সোনাডাঙ্গা, খুলনা',
      avatarLetter: 'নু',
      rating: 5,
      date: '২ সপ্তাহ আগে',
      text: 'ক্যাশ অন ডেলিভারিতে চেক করে নিয়েছিলাম। যেমন দেখেছি তেমনটাই পেয়েছি। ৩ জারের মেগা সেভার প্যাকে ফ্রি ডেলিভারি পেয়েছি। অসাধারণ সার্ভিস!',
    },
  ];

  return (
    <section className="section-wrapper customer-reviews-section" id="customer-reviews">
      <div className="container">
        {/* Title and Rating Summary */}
        <div className="reviews-title-wrap reveal-on-scroll">
          <h2 className="section-title">সম্মানিত কাস্টমার রিভিউ</h2>
          <div className="rating-summary-badge">
            <div className="stars-group">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" stroke="#f59e0b" />
              ))}
            </div>
            <span className="rating-score">৪.৯/৫</span>
            <span className="review-count">(৩,৫০০+ পরিবার সন্তুষ্ট)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className={`review-card reveal-on-scroll delay-${(index % 3) * 100 + 100}`}
            >
              <div className="review-top">
                <div className="avatar-circle">{rev.avatarLetter}</div>
                <div className="author-meta">
                  <div className="author-name">{rev.name}</div>
                  <div className="author-loc">
                    <MapPin size={12} />
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>

              <div className="star-rating">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>

              <p className="review-text">“{rev.text}”</p>

              <div className="review-footer">
                <div className="verified-pill">
                  <CheckCircle size={14} />
                  <span>ভেরিফাইড ক্রেতা</span>
                </div>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
