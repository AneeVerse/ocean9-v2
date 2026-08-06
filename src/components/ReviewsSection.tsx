"use client";

import React from "react";
import ReviewVideo from "./ReviewVideo";

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews-section" className="relative py-12 sm:py-16 lg:py-20 bg-transparent text-white overflow-hidden">
      <div className="w-full">
        {/* Voices of Transformation Header */}
        <div className="text-center mb-8 sm:mb-12 px-4 max-w-[1320px] mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] backdrop-blur-md shrink-0">
            <svg
              width="16"
              height="16"
              viewBox="-2 -2 28 28"
              fill="#20c9d2"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 overflow-visible"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span className="font-roboto font-normal text-white text-[14px] tracking-normal">Testimonials</span>
          </div>
          <h2 className="font-poppins font-normal text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-normal">
            Voices of Transformation
          </h2>
          <p className="font-roboto font-normal text-slate-200 text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
            Hear from clients and partners who trust Ocean 9 for subsea, diving, and offshore engineering operations.
          </p>
        </div>

        {/* Review Videos Section */}
        <div>
          <ReviewVideo />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
