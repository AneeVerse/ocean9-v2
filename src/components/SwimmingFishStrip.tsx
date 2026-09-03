"use client";

import React from "react";
import Image from "next/image";

export default function SwimmingFishStrip() {
  return (
    <div className="w-full relative min-h-[195px] sm:min-h-[280px] lg:min-h-[320px] flex items-center justify-center my-4 z-20 pointer-events-none select-none overflow-hidden">
      {/* UPPER SWIM LANE: Diver 1 (Thumbs Up) Swimming Left to Right */}
      <div className="absolute top-2 sm:top-4 lg:top-6 w-full left-0 pointer-events-none z-10">
        <div className="animate-swim-right flex items-center">
          <div
            id="swimming-fish-1"
            className="relative w-32 h-20 sm:w-44 sm:h-26 lg:w-52 lg:h-32 animate-fin-wobble shrink-0"
          >
            <Image
              src="/assets/swimming-diver-thumbsup.png"
              alt="Commercial Diver with Thumbs Up"
              fill
              className="object-contain p-1"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* LOWER SWIM LANE: Diver 2 (Victory Sign) Swimming Right to Left */}
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 w-full left-0 pointer-events-none z-10">
        <div className="animate-swim-left flex items-center">
          <div
            id="swimming-fish-2"
            className="relative w-32 h-20 sm:w-44 sm:h-26 lg:w-52 lg:h-32 animate-fin-wobble-reverse shrink-0"
          >
            <Image
              src="/assets/swimming-diver-victory.png"
              alt="Commercial Diver with Victory Sign"
              fill
              className="object-contain p-1"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
