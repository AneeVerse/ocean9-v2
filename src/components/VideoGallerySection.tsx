"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Video, X, Clock } from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  category: string;
  duration: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "Commercial Air Diving & Subsea Inspection",
    category: "Subsea Operations",
    duration: "02:45",
    videoUrl: "/assets/13998175_3840_2160_60fps (1)_compressed.mp4",
    thumbnail: "/images/home-commerical-air-diving-operations.png",
    description: "Live footage of Ocean 9 air diving crew executing subsea structural inspection and maintenance.",
  },
  {
    id: 2,
    title: "Underwater Salvage & Heavy Lift Operations",
    category: "Marine Salvage",
    duration: "03:15",
    videoUrl: "/assets/13998175_3840_2160_60fps (1)_compressed.mp4",
    thumbnail: "/images/home-underwater-salvage.png",
    description: "Successful underwater salvage and pontoon recovery operation under challenging tidal currents.",
  },
  {
    id: 3,
    title: "Offshore Platform Subsea Structural Audit",
    category: "Offshore Diving",
    duration: "04:10",
    videoUrl: "/assets/13998175_3840_2160_60fps (1)_compressed.mp4",
    thumbnail: "/images/home-offshore-platform-subsea.png",
    description: "High-precision subsea NDT testing and platform structural inspection conducted by certified divers.",
  },
  {
    id: 4,
    title: "Subsea Cable Trenching & Protection Work",
    category: "Cable Repair",
    duration: "02:20",
    videoUrl: "/assets/13998175_3840_2160_60fps (1)_compressed.mp4",
    thumbnail: "/images/home-cable-repair-protection.png",
    description: "Underwater power cable trenching, protection sleeve installation and subsea jointing support.",
  },
];

export default function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="video-gallery" className="py-12 sm:py-16 lg:py-20 bg-white relative z-40 text-slate-900 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Tag / Badge */}
            <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#001742] text-white shadow-xs shrink-0 w-fit">
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
              <span className="font-roboto font-semibold text-white text-[14px] tracking-normal">
                Video Gallery Preview
              </span>
            </div>

            {/* Main Heading - Single Line */}
            <h2 className="font-poppins font-bold text-[#001742] text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] leading-tight tracking-tight whitespace-nowrap">
              Watch Our Operations
            </h2>

            {/* Subtitle - Below Title */}
            <p className="font-roboto text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              See Ocean 9 teams working on underwater, onshore and offshore projects.
            </p>
          </div>

          <div className="shrink-0 pb-1">
            <Link
              href="/videos"
              className="inline-flex items-center gap-3 bg-[#001742] hover:bg-[#001e54] text-white pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer transform hover:scale-[1.02]"
            >
              <span className="font-dm-sans font-semibold text-sm leading-none text-white whitespace-nowrap">
                View Video Gallery
              </span>
              <div className="w-8 h-8 rounded-full bg-white text-[#001742] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="group relative bg-white border border-[#dbeafe] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-xl hover:border-[#1e66f5]/40 transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 rounded-t-2xl sm:rounded-t-[24px]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#20c9d2] group-hover:text-[#00173e] group-hover:border-[#20c9d2] transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-mono">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{item.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#002365]/80 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-[11px] font-poppins font-semibold">
                  {item.category}
                </div>
              </div>

              {/* Card Footer Text (Transparent Glass matching Services Provided) */}
              <div className="p-4.5 sm:p-5 bg-white rounded-b-2xl sm:rounded-b-[24px] flex-1 flex flex-col justify-between space-y-2">
                <h3 className="font-poppins font-bold text-sm sm:text-base text-[#001742] group-hover:text-[#1e66f5] transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="font-roboto text-xs sm:text-[13px] text-slate-500 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player - Portaled to document.body to stay above Navbar */}
      {mounted &&
        selectedVideo &&
        createPortal(
          <div
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[999999] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#00173e] border border-cyan-400/40 rounded-3xl overflow-hidden shadow-2xl text-white my-auto flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#00173e] border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-poppins font-semibold">
                    {selectedVideo.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedVideo.duration}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#20c9d2] text-white hover:text-[#00173e] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative w-full aspect-[16/9] max-h-[58vh] bg-black">
                <video
                  ref={videoRef}
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Video Details */}
              <div className="p-5 sm:p-6 bg-[#00173e] border-t border-white/10 space-y-2">
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white">
                  {selectedVideo.title}
                </h3>
                <p className="font-roboto text-sm text-slate-300 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

