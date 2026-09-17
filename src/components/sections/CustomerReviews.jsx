'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Star,
  CheckCircle2,
  MessageSquareHeart,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
  Maximize2,
  X
} from 'lucide-react';

export default function CustomerReviews() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const reviewImages = [
    {
      id: 1,
      image: '/images/review-whatsapp-chat.jpg',
      caption: 'গ্রাহকের হোয়াটসঅ্যাপ চ্যাট রিভিউ',
      tag: 'ভেরিফাইড চ্যাট প্রুফ',
    },
    {
      id: 2,
      image: '/images/review-kid-eating.jpg',
      caption: 'বাচ্চাদের পছন্দের পুষ্টিকর নাস্তা',
      tag: 'বাস্তব কাস্টমার ফটো',
    },
    {
      id: 3,
      image: '/images/review-customer-holding-jar.jpg',
      caption: 'খুশি গ্রাহকের হাতের খাঁটি ডেট জ্যাম',
      tag: 'গ্রাহকের সরাসরি ছবি',
    },
    {
      id: 4,
      image: '/images/review-breakfast-table.jpg',
      caption: 'ডাইনিং টেবিলে সকালের নাস্তা',
      tag: 'ফ্যামিলি ব্রেকফাস্ট',
    },
    {
      id: 5,
      image: '/images/review-mom-spreading-toast.jpg',
      caption: 'টোস্টে মাখানো ডেট জ্যাম',
      tag: '১০০% প্রাকৃতিক টেক্সচার',
    },
    {
      id: 6,
      image: '/images/review-unboxing-package.jpg',
      caption: 'নিরাপদ বাবল র‍্যাপ পার্সেল আনবক্সিং',
      tag: 'ডেলিভারি আনবক্সিং',
    },
    {
      id: 7,
      image: '/images/review-spoon-texture.jpg',
      caption: 'চামচে প্রাকৃতিক ঘনত্বের প্রমাণ',
      tag: 'ল্যাব ও হোম টেস্ট',
    },
    {
      id: 8,
      image: '/images/review-family-breakfast.jpg',
      caption: 'পুরো পরিবারের স্বাস্থ্যকর সকাল',
      tag: 'সন্তুষ্ট পরিবার',
    },
  ];

  // Update scroll bounds and active index
  const updateScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const card = trackRef.current.querySelector('.review-photo-card');
    if (card) {
      const cardWidth = card.offsetWidth + 20;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, reviewImages.length - 1));
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

  // Mouse Drag Logic
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
    const walk = (x - startX) * 1.6;
    trackRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) setIsDragging(false);
  };

  // Arrow Navigation
  const scroll = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.review-photo-card');
    const cardWidth = card ? card.offsetWidth + 20 : 340;
    const scrollOffset = direction === 'next' ? cardWidth : -cardWidth;

    trackRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  const scrollToSlide = (index) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.review-photo-card');
    const cardWidth = card ? card.offsetWidth + 20 : 340;

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
            সম্মানিত ক্রেতাদের পাঠানো <span className="highlight-gold">বাস্তব ছবির রিভিউ</span>
          </h2>
          <p className="section-subtext">
            স্বাদ ঘর প্রিমিয়াম ডেট জ্যাম হাতে পেয়ে গ্রাহকদের সরাসরি পাঠানো ছবি ও সামাজিক প্রমাণ।
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
              <span>১০০% জেনুইন কাস্টমার ছবি ও প্রুফ</span>
            </div>
          </div>
        </div>

        {/* Draggable Slider Header Controls */}
        <div className="slider-controls-bar reveal-on-scroll">
          <div className="drag-hint-pill">
            <MoveHorizontal size={15} />
            <span>ছবিগুলো ডানে-বামে ড্র্যাগ বা সোয়াইপ করুন</span>
          </div>

          <div className="slider-nav-arrows">
            <button
              type="button"
              className={`nav-arrow-btn prev ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('prev')}
              disabled={!canScrollLeft}
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className={`nav-arrow-btn next ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('next')}
              disabled={!canScrollRight}
              aria-label="Next photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Draggable Image-Only Reviews Slider Track */}
        <div className="reviews-slider-wrapper">
          <div
            ref={trackRef}
            className={`reviews-slider-track ${isDragging ? 'is-dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {reviewImages.map((item) => (
              <div
                key={item.id}
                className="review-photo-card"
                onClick={() => !isDragging && setActiveLightboxImage(item)}
              >
                <div className="photo-media-wrapper">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="review-photo-full"
                    loading="lazy"
                  />

                  {/* Gradient Overlay with Rating Stars and Caption */}
                  <div className="photo-overlay-gradient">
                    <div className="overlay-top-row">
                      <span className="photo-tag-pill">{item.tag}</span>
                      <div className="zoom-icon-circle">
                        <Maximize2 size={14} />
                      </div>
                    </div>

                    <div className="overlay-bottom-row">
                      <div className="stars-mini-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} fill="#fbbf24" stroke="#fbbf24" />
                        ))}
                      </div>
                      <div className="photo-caption-text">{item.caption}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots Indicator */}
        <div className="slider-dots-row reveal-on-scroll">
          {reviewImages.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`dot-pill ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to photo ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {activeLightboxImage && (
        <div
          className="review-lightbox-modal"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActiveLightboxImage(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <img
              src={activeLightboxImage.image}
              alt={activeLightboxImage.caption}
              className="lightbox-img"
            />
            <div className="lightbox-footer-info">
              <div className="lightbox-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#fbbf24" stroke="#fbbf24" />
                ))}
              </div>
              <div className="lightbox-caption">{activeLightboxImage.caption}</div>
              <div className="lightbox-badge">
                <CheckCircle2 size={13} />
                <span>ভেরিফাইড ক্রেতার রিভিউ ছবি</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
