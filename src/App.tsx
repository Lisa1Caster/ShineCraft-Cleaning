/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutAndTrust } from './components/AboutAndTrust';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedEstimate, setSelectedEstimate] = useState<any>(undefined);

  const handleOpenBooking = (serviceName?: string, estimateDetails?: any) => {
    setSelectedService(serviceName);
    setSelectedEstimate(estimateDetails);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFB] text-[#20252B] selection:bg-[#19A974]/20 selection:text-[#19A974]">
      {/* Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Instant Leeds Quote Estimator */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Services Section (Main, Add-ons, and Task Checklist) */}
        <ServicesSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 3, 4, 5. About, Trust / Why Choose Us, and Quality Guarantee Reassurance */}
        <AboutAndTrust onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Location / Service Area (56 Nowell Place, Leeds LS9 6HT, Interactive Postcode Checker) */}
        <LocationSection />

        {/* 7. Contact / Direct Actions (Phone, WhatsApp, Leeds Booking Form) */}
        <ContactSection initialService={selectedService} />

        {/* 8. FAQ Section */}
        <FaqSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialEstimate={selectedEstimate}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
