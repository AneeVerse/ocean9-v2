"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientStrip from "@/components/ClientStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import Testimonials from "@/components/Testimonials";
import ProjectExperience from "@/components/ProjectExperience";
import WorkHistory from "@/components/WorkHistory";
import ReviewsSection from "@/components/ReviewsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import HSESection from "@/components/HSESection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import VideoGallerySection from "@/components/VideoGallerySection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import ReadyToDive from "@/components/ReadyToDive";
import Footer from "@/components/Footer";
import SwimmingFishStrip from "@/components/SwimmingFishStrip";
import UnderConstruction from "@/components/UnderConstruction";
import OceanBubbles from "@/components/OceanBubbles";
import FloatingActionButton from "@/components/FloatingActionButton";

// Set to true to show Under Construction page by default, or false to show full website
const SHOW_UNDER_CONSTRUCTION_BY_DEFAULT = true;

function HomeContent() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get("preview") === "true";

  // Show Under Construction page by default unless preview mode is active
  if (SHOW_UNDER_CONSTRUCTION_BY_DEFAULT && !isPreview) {
    return <UnderConstruction />;
  }

  return (
    <main className="relative min-h-screen bg-[#002365] text-[#081935] flex flex-col font-sans">
      <Navbar />
      <Hero />

      {/* Continuous Ocean Container with Full-Height Bubble Stream */}
      <div className="relative">
        <OceanBubbles className="pointer-events-none absolute inset-0 z-10 opacity-80" bubbleCount={1000} topOffset={205} />

        {/* Group 1: Continuous Background from ClientStrip / About Us to Services Provided */}
        <div className="relative bg-[#000b20] overflow-hidden">
          <Image
            src="/images/home-about-us-to-service-bg-img.png"
            alt="Ocean 9 About to Services Background"
            fill
            className="object-cover object-top pointer-events-none opacity-100"
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 85%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,0.15) 98%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,0.15) 98%, transparent 100%)",
            }}
            priority
          />
          {/* Dark Feather Gradient Blend at Bottom of Group 1 */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#000b20] via-[#000b20]/40 to-transparent pointer-events-none z-[5]" />
          <div className="relative z-30">
            <ClientStrip />
            <AboutSection />
            <ServicesSection />
          </div>
        </div>

        {/* Group 2: Continuous Background for Why Choose Us & Capabilities */}
        <div className="relative bg-[#000b20] overflow-hidden">
          <Image
            src="/images/home-bg2-img.png"
            alt="Ocean 9 Mid Depth Background"
            fill
            className="object-cover object-top pointer-events-none opacity-100"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 10%, black 15%, black 85%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,0.15) 98%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 10%, black 15%, black 85%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,0.15) 98%, transparent 100%)",
            }}
            priority
          />
          {/* Dark Feather Gradient Blend at Top of Group 2 */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#000b20] via-[#000b20]/40 to-transparent pointer-events-none z-[5]" />
          {/* Dark Feather Gradient Blend at Bottom of Group 2 */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#000b20] via-[#000b20]/40 to-transparent pointer-events-none z-[5]" />
          <div className="relative z-30">
            <WhyChooseUs />
            {/* <CapabilitiesSection /> */}
            {/* <Testimonials /> */}
          </div>
        </div>

        {/* Group 3: Continuous Background from Project Experience to FAQs */}
        <div className="relative bg-[#000b20] overflow-hidden">
          <Image
            src="/images/home-bg3.png"
            alt="Ocean 9 Projects to FAQ Background"
            fill
            className="object-cover object-top pointer-events-none opacity-100"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 10%, black 15%, black 85%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,0.15) 98%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 10%, black 15%, black 85%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,0.5) 95%, rgba(0,0,0,0.15) 98%, transparent 100%)",
            }}
            priority
          />
          {/* Dark Feather Gradient Blend at Top of Group 3 (Transition from Capabilities) */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#000b20] via-[#000b20]/40 to-transparent pointer-events-none z-[5]" />
          <div className="relative z-30">
            {/* <ProjectExperience /> */}
            <ProjectGallerySection />
            <WorkHistory />
            {/* <ReviewsSection /> */}
            {/* <BlogSection /> */}
            {/* <FAQSection /> */}
          </div>
          {/* Dark Feather Gradient Blend at Bottom of Group 3 */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#000b20] via-[#000b20]/40 to-transparent pointer-events-none z-[5]" />
        </div>

        {/* Group 4: Continuous Background for HSE, Gallery, Contact & Careers */}
        <div className="relative bg-[#000b20] overflow-hidden">
          <Image
            src="/images/home-bg4.png"
            alt="Ocean 9 Deep Ocean Background"
            fill
            className="object-cover object-top pointer-events-none opacity-100"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 10%, black 15%, black 75%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.15) 97%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 10%, black 15%, black 75%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,0.5) 92%, rgba(0,0,0,0.15) 97%, transparent 100%)",
            }}
            priority
          />
          {/* Dark Feather Gradient Blend at Top of Group 4 */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#000b20] via-[#000b20]/40 to-transparent pointer-events-none z-[5]" />
          {/* Soft Dark Feather Overlay at Bottom of Group 4 */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#000b20] via-[#000b20]/60 to-transparent pointer-events-none z-[5]" />
          <div className="relative z-30">
            <HSESection />
            {/* <VideoGallerySection /> */}
            <ContactSection />
            {/* <CareersSection /> */}
          </div>
        </div>

        {/* Group 5: Continuous Ocean Background for Footer */}
        <div className="relative bg-[#000b20] overflow-hidden min-h-[520px] sm:min-h-[600px] flex flex-col justify-end">
          <Image
            src="/images/home-bg5.png"
            alt="Ocean Seabed Footer Background"
            fill
            className="object-cover object-[center_45%] translate-y-4 sm:translate-y-6 scale-105 pointer-events-none opacity-100"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,0.85) 22%, black 32%, black 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0.5) 12%, rgba(0,0,0,0.85) 22%, black 32%, black 100%)",
            }}
            priority
          />
          {/* Dark Color Gradient Overlay for Footer */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#000b20] via-[#000b20]/60 to-transparent pointer-events-none z-[5]" />
          <div className="relative z-30 w-full">
            {/* <ReadyToDive /> */}
            <SwimmingFishStrip />
            <Footer />
          </div>
        </div>
      </div>

      {/* Floating Speed-Dial Action Button */}
      <FloatingActionButton />
    </main>
  );
}


export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#002365]" />}>
      <HomeContent />
    </Suspense>
  );
}
