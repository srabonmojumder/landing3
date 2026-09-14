'use client';

import React, { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import HeaderBar from '@/components/layout/HeaderBar';
import HeroBanner from '@/components/sections/HeroBanner';
import HealthWarning from '@/components/sections/HealthWarning';
import HealthySolution from '@/components/sections/HealthySolution';
import WhyDateJam from '@/components/sections/WhyDateJam';
import ChefCertification from '@/components/sections/ChefCertification';
import CustomerReviews from '@/components/sections/CustomerReviews';
import OrderForm from '@/components/sections/OrderForm';
import TrustGuarantees from '@/components/sections/TrustGuarantees';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';

export default function LandingPage() {
  useScrollReveal();
  const [selectedPackage, setSelectedPackage] = useState({
    id: 'double',
    name: '২টি জার (ফ্যামিলি প্যাক)',
    price: 890,
  });

  const scrollToOrder = () => {
    const el = document.getElementById('order-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="landing-page-root">
      {/* Top Urgent Notice Header */}
      <HeaderBar />

      {/* Hero Section */}
      <HeroBanner onOrderClick={scrollToOrder} />

      {/* Problem Section: Unhealthy Food Hazards */}
      <HealthWarning onOrderClick={scrollToOrder} />

      {/* Solution Section: Wholesome Nutritious Food */}
      <HealthySolution onOrderClick={scrollToOrder} />

      {/* Comparison Section: Why Date Jam & Nutrition Scale */}
      <WhyDateJam onOrderClick={scrollToOrder} />

      {/* Chef Certification & Food Standards */}
      <ChefCertification />

      {/* Customer Reviews & Social Proof */}
      <CustomerReviews />

      {/* Trust & Guarantee Badges */}
      <TrustGuarantees />

      {/* Checkout & Order Form */}
      <OrderForm
        selectedPackageId={selectedPackage?.id}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Quick Action CTA Bar */}
      <FloatingCTA
        onOrderClick={scrollToOrder}
        selectedPackage={selectedPackage}
      />
    </main>
  );
}
