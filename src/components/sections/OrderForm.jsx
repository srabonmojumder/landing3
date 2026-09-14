'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Lock,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Package,
  Plus,
  Minus,
  Sparkles,
  PhoneCall,
  User,
  MapPin,
  FileText,
} from 'lucide-react';

const PACKAGES = [
  {
    id: 'single',
    name: '১টি জার (সিঙ্গেল প্যাক)',
    weight: '৫০০ গ্রাম প্রিমিয়াম ডেট জ্যাম',
    price: 490,
    regularPrice: 650,
    saveAmount: 160,
    badge: null,
    freeShipping: false,
  },
  {
    id: 'double',
    name: '২টি জার (ফ্যামিলি প্যাক)',
    weight: '১ কেজি (৫০০ গ্রাম x ২ জার)',
    price: 890,
    regularPrice: 1300,
    saveAmount: 410,
    badge: 'সবচেয়ে জনপ্রিয়',
    freeShipping: false,
  },
  {
    id: 'trio',
    name: '৩টি জার (মেগা সেভার প্যাক)',
    weight: '১.৫ কেজি (৫০০ গ্রাম x ৩ জার)',
    price: 1250,
    regularPrice: 1950,
    saveAmount: 700,
    badge: 'ফ্রি ডেলিভারি',
    freeShipping: true,
  },
];

export default function OrderForm({ selectedPackageId, onSelectPackage }) {
  const [activePackageId, setActivePackageId] = useState(selectedPackageId || 'double');
  const [quantity, setQuantity] = useState(1);
  const [shippingArea, setShippingArea] = useState('dhaka_inside'); // 'dhaka_inside' | 'dhaka_outside'

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const currentPackage = PACKAGES.find((p) => p.id === activePackageId) || PACKAGES[1];

  // Dynamic Calculations
  const subtotal = currentPackage.price * quantity;
  const standardShippingCost = shippingArea === 'dhaka_inside' ? 70 : 130;
  const shippingCost = currentPackage.freeShipping ? 0 : standardShippingCost;
  const grandTotal = subtotal + shippingCost;
  const totalSavings = currentPackage.saveAmount * quantity + (currentPackage.freeShipping ? standardShippingCost : 0);

  const handlePackageChange = (pkgId) => {
    setActivePackageId(pkgId);
    if (onSelectPackage) {
      const pkg = PACKAGES.find((p) => p.id === pkgId);
      onSelectPackage(pkg);
    }
  };

  const handleQuantity = (type) => {
    if (type === 'inc') {
      setQuantity((prev) => Math.min(prev + 1, 10));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'অনুগ্রহ করে আপনার পুরো নাম লিখুন';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const bdPhoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    if (!cleanPhone) {
      errs.phone = 'অনুগ্রহ করে সচল মোবাইল নাম্বার দিন';
    } else if (!bdPhoneRegex.test(cleanPhone)) {
      errs.phone = 'সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন (যেমন: 017XXXXXXXX)';
    }

    if (!formData.address.trim()) {
      errs.address = 'অনুগ্রহ করে সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন';
    } else if (formData.address.trim().length < 8) {
      errs.address = 'বিস্তারিত ঠিকানা লিখুন (বাসা/রোড/এলাকা/উপজেলা/জেলা)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0b4629', '#10b981', '#f59e0b', '#dc2626'],
        });
      } catch (err) {
        // Safe fallback
      }

      const orderRef = 'DJ-' + Math.floor(10000 + Math.random() * 90000);
      setOrderSuccess({
        orderId: orderRef,
        packageName: currentPackage.name,
        quantity,
        total: grandTotal,
        customerName: formData.name,
        phone: formData.phone,
        address: formData.address,
        shippingArea: shippingArea === 'dhaka_inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে',
      });
    }, 600);
  };

  return (
    <section className="section-wrapper order-form-section" id="order-form-section">
      <div className="container">
        <div className="checkout-container-box reveal-on-scroll">
          {/* Header */}
          <div className="form-main-header">
            <h2 className="form-headline">অর্ডার করতে নিচের ফর্মটি সম্পূর্ণ পূরণ করুন</h2>
            <p className="form-subtext">
              ১০০% ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ নিশ্চিন্তে টাকা পরিশোধ করুন
            </p>
          </div>

          {/* Package Selection Cards */}
          <div className="packages-selection-wrap">
            <div className="packages-title">
              <Package size={20} color="#064e3b" />
              <span>আপনার পছন্দের প্যাকেজ সিলেক্ট করুন:</span>
            </div>

            <div className="packages-grid">
              {PACKAGES.map((pkg) => {
                const isSelected = activePackageId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    className={`package-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handlePackageChange(pkg.id)}
                  >
                    {pkg.badge && <div className="popular-badge">{pkg.badge}</div>}

                    <div className="package-name">{pkg.name}</div>
                    <div className="package-weight">{pkg.weight}</div>

                    <div className="price-box">
                      <span className="offer-price">৳{pkg.price}</span>
                      <span className="regular-price">৳{pkg.regularPrice}</span>
                    </div>

                    <div className="save-badge">
                      সেভ ৳{pkg.saveAmount} {pkg.freeShipping && '+ ফ্রি ডেলিভারি!'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Split Form & Invoice */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="checkout-split-layout">
              {/* Form Fields Column */}
              <div className="form-fields-col">
                {/* Quantity Stepper */}
                <div className="quantity-control-row">
                  <span className="control-label">প্যাকেজ সংখ্যা (Quantity):</span>
                  <div className="stepper-box">
                    <button
                      type="button"
                      className="step-btn"
                      onClick={() => handleQuantity('dec')}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="step-count">{quantity}</span>
                    <button
                      type="button"
                      className="step-btn"
                      onClick={() => handleQuantity('inc')}
                      disabled={quantity >= 10}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div className="field-group">
                  <label htmlFor="customer-name">
                    আপনার নাম লিখুন <span className="required-star">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    placeholder="আপনার পুরো নাম লিখুন"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'has-error' : ''}
                  />
                  {errors.name && <div className="error-msg">{errors.name}</div>}
                </div>

                {/* Phone */}
                <div className="field-group">
                  <label htmlFor="customer-phone">
                    মোবাইল নাম্বার দিন <span className="required-star">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    placeholder="০১৭১১-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? 'has-error' : ''}
                  />
                  {errors.phone && <div className="error-msg">{errors.phone}</div>}
                </div>

                {/* Address */}
                <div className="field-group">
                  <label htmlFor="customer-address">
                    সম্পূর্ণ ডেলিভারি ঠিকানা <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    rows={3}
                    placeholder="বাসা নং, রোড নং, এলাকা, থানা ও জেলা উল্লেখ করুন"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className={errors.address ? 'has-error' : ''}
                  />
                  {errors.address && <div className="error-msg">{errors.address}</div>}
                </div>

                {/* Delivery Area Radio */}
                <div className="shipping-selector-group">
                  <div className="shipping-title">ডেলিভারি এরিয়া নির্বাচন করুন:</div>
                  <div className="shipping-radio-options">
                    <label
                      className={`shipping-label-card ${
                        shippingArea === 'dhaka_inside' ? 'active' : ''
                      }`}
                    >
                      <div className="radio-left">
                        <input
                          type="radio"
                          name="shipping_option"
                          value="dhaka_inside"
                          checked={shippingArea === 'dhaka_inside'}
                          onChange={() => setShippingArea('dhaka_inside')}
                        />
                        <span>ঢাকার ভিতরে ডেলিভারি</span>
                      </div>
                      <span className="shipping-fee">
                        {currentPackage.freeShipping ? 'ফ্রি' : '৳৭০'}
                      </span>
                    </label>

                    <label
                      className={`shipping-label-card ${
                        shippingArea === 'dhaka_outside' ? 'active' : ''
                      }`}
                    >
                      <div className="radio-left">
                        <input
                          type="radio"
                          name="shipping_option"
                          value="dhaka_outside"
                          checked={shippingArea === 'dhaka_outside'}
                          onChange={() => setShippingArea('dhaka_outside')}
                        />
                        <span>ঢাকার বাইরে ডেলিভারি (সারা বাংলাদেশ)</span>
                      </div>
                      <span className="shipping-fee">
                        {currentPackage.freeShipping ? 'ফ্রি' : '৳১৩০'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Note */}
                <div className="field-group" style={{ marginTop: '1.25rem' }}>
                  <label htmlFor="customer-note">
                    বিশেষ কোনো নির্দেশনা থাকলে লিখুন (অপশনাল):
                  </label>
                  <input
                    id="customer-note"
                    type="text"
                    placeholder="যেমন: বিকেলে ডেলিভারি দিলে ভালো হয়"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  />
                </div>
              </div>

              {/* Order Summary & Confirm Column */}
              <div className="order-summary-col">
                <div className="summary-card">
                  <div className="summary-title">আপনার অর্ডার সামারি</div>

                  <div className="summary-row">
                    <span>
                      {currentPackage.name} x {quantity}
                    </span>
                    <strong>৳{subtotal}</strong>
                  </div>

                  <div className="summary-row">
                    <span>ডেলিভারি চার্জ</span>
                    <strong>
                      {currentPackage.freeShipping ? (
                        <span style={{ color: '#16a34a' }}>ফ্রি</span>
                      ) : (
                        `৳${shippingCost}`
                      )}
                    </strong>
                  </div>

                  {totalSavings > 0 && (
                    <div className="summary-row" style={{ color: '#059669' }}>
                      <span>মোট সাশ্রয়</span>
                      <strong>- ৳{totalSavings}</strong>
                    </div>
                  )}

                  <div className="summary-row total-row">
                    <span>সর্বমোট প্রদেয় মূল্য:</span>
                    <span className="total-amount">৳{grandTotal}</span>
                  </div>

                  <div className="cod-notice-badge">
                    <ShieldCheck size={20} color="#16a34a" />
                    <span>ক্যাশ অন ডেলিভারি (পণ্য পেয়ে টাকা দিন)</span>
                  </div>

                  <button
                    type="submit"
                    className="submit-order-btn"
                    disabled={isSubmitting}
                  >
                    <Lock size={19} />
                    <span>
                      {isSubmitting
                        ? 'প্রসেসিং হচ্ছে...'
                        : `অর্ডার কনফার্ম করুন - ৳${grandTotal}`}
                    </span>
                  </button>

                  <div className="guarantee-note">
                    <Truck size={15} />
                    <span>সারাদেশে ২-৩ দিনের মধ্যে হোম ডেলিভারি নিশ্চিত</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Success Confirmation Modal */}
      {orderSuccess && (
        <div
          className="order-modal-backdrop"
          onClick={() => setOrderSuccess(null)}
        >
          <div
            className="order-success-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="success-icon-wrap">
              <CheckCircle2 size={44} />
            </div>

            <h3 className="modal-title">অভিনন্দন! আপনার অর্ডারটি সফল হয়েছে</h3>
            <p className="modal-desc">
              স্বাদ ঘর প্রিমিয়াম ডেট জ্যাম অর্ডার করার জন্য ধন্যবাদ। আমাদের প্রতিনিধি দ্রুতই ফোন করে আপনার অর্ডারটি কনফার্ম করবেন।
            </p>

            <div className="receipt-box">
              <div className="receipt-row">
                <span>অর্ডার আইডি:</span>
                <strong>{orderSuccess.orderId}</strong>
              </div>
              <div className="receipt-row">
                <span>প্যাকেজ:</span>
                <strong>{orderSuccess.packageName}</strong>
              </div>
              <div className="receipt-row">
                <span>পরিমাণ:</span>
                <strong>{orderSuccess.quantity} টি</strong>
              </div>
              <div className="receipt-row">
                <span>সর্বমোট বিল:</span>
                <strong style={{ color: '#dc2626' }}>
                  ৳{orderSuccess.total} (ক্যাশ অন ডেলিভারি)
                </strong>
              </div>
              <div className="receipt-row">
                <span>মোবাইল:</span>
                <strong>{orderSuccess.phone}</strong>
              </div>
              <div className="receipt-row">
                <span>ঠিকানা:</span>
                <strong>{orderSuccess.address}</strong>
              </div>
            </div>

            <button
              type="button"
              className="close-btn"
              onClick={() => setOrderSuccess(null)}
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
