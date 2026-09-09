"use client";

import React from "react";
import Image from "next/image";

export default function SwimmingFishStrip() {
  return (
    <div className="w-full relative min-h-[240px] sm:min-h-[310px] lg:min-h-[360px] flex items-center justify-center my-4 z-20 pointer-events-none select-none overflow-hidden">
      {/* UPPER SWIM LANE: Diver 1 (Thumbs Up) Swimming Left to Right */}
      <div className="absolute top-1 sm:top-2 lg:top-4 w-full left-0 pointer-events-none z-10">
        <div className="animate-swim-right flex items-center">
          <div
            id="swimming-fish-1"
            className="relative w-44 h-28 sm:w-56 sm:h-36 lg:w-[260px] lg:h-[160px] animate-fin-wobble shrink-0"
          >
            <Image
              src="https://ik.imagekit.io/ocot2fs3tf/images/diver-thumbs-up.png"
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
      <div className="absolute bottom-1 sm:bottom-2 lg:bottom-4 w-full left-0 pointer-events-none z-10">
        <div className="animate-swim-left flex items-center">
          <div
            id="swimming-fish-2"
            className="relative w-44 h-28 sm:w-56 sm:h-36 lg:w-[260px] lg:h-[160px] animate-fin-wobble-reverse shrink-0"
          >
            <Image
              src="https://ik.imagekit.io/ocot2fs3tf/images/diver-nice.png"
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
