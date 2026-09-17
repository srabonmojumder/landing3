'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Star,
  CheckCircle2,
  MapPin,
  ThumbsUp,
  Quote,
  MessageSquareHeart,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal
} from 'lucide-react';

export default function CustomerReviews() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    {
      id: 7,
      name: 'মাহমুদুল হক',
      location: 'চকবাজার, কুমিল্লা',
      avatarLetter: 'মা',
      avatarGrad: 'from-blue',
      rating: 5,
      date: '২ সপ্তাহ আগে',
      pack: '২টি জার (ফ্যামিলি প্যাক)',
      text: 'খেজুর ও খাঁটি মধুর এত সুন্দর মিশ্রণ বাজারে আগে কখনো দেখিনি। সকালের নাস্তায় ডিম-পরোটা বা টোস্টের সাথে অসাধারণ জমে। পরিবারের সবাই তৃপ্তি নিয়ে খাচ্ছে।',
      likes: 19,
    },
    {
      id: 8,
      name: 'রোকেয়া বেগম',
      location: 'জালেশ্বরীতলা, বগুড়া',
      avatarLetter: 'রো',
      avatarGrad: 'from-rose',
      rating: 5,
      date: '৩ সপ্তাহ আগে',
      pack: '১টি জার (সিঙ্গেল প্যাক)',
      text: 'প্রথমবার পরীক্ষামূলক ১টি জার নিয়েছিলাম। এখন পুরো পরিবার এটার ফ্যান হয়ে গেছে। এবার ৩ জারের ফ্যামিলি প্যাক অর্ডার করলাম। কোয়ালিটিতে কোনো ছাড় নেই!',
      likes: 23,
    },
  ];

  // Update active index and scroll boundaries
  const updateScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = trackRef.current.querySelector('.modern-review-card');
    if (card) {
      const cardWidth = card.offsetWidth + 24; // width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, reviews.length - 1));
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    updateScrollState();

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  // Mouse Drag Events
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeftState(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.6; // Scroll speed multiplier
    trackRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) setIsDragging(false);
  };

  // Button Click Navigation
  const scroll = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.modern-review-card');
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    const scrollOffset = direction === 'next' ? cardWidth : -cardWidth;

    trackRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  const scrollToSlide = (index) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.modern-review-card');
    const cardWidth = card ? card.offsetWidth + 24 : 360;

    trackRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

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

        {/* Draggable Slider Header Controls */}
        <div className="slider-controls-bar reveal-on-scroll">
          <div className="drag-hint-pill">
            <MoveHorizontal size={15} />
            <span>ড্র্যাগ বা সোয়াইপ করে স্লাইড করুন</span>
          </div>

          <div className="slider-nav-arrows">
            <button
              type="button"
              className={`nav-arrow-btn prev ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('prev')}
              disabled={!canScrollLeft}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className={`nav-arrow-btn next ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('next')}
              disabled={!canScrollRight}
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Draggable Reviews Slider Track */}
        <div className="reviews-slider-wrapper">
          <div
            ref={trackRef}
            className={`reviews-slider-track ${isDragging ? 'is-dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {reviews.map((rev) => (
              <div key={rev.id} className="modern-review-card slider-card">
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

        {/* Pagination Dots Indicator */}
        <div className="slider-dots-row reveal-on-scroll">
          {reviews.map((rev, idx) => (
            <button
              key={rev.id}
              type="button"
              className={`dot-pill ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
