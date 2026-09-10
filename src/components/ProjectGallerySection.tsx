"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  id: number;
  type: "image" | "video";
  title?: string;
  category: "Diving" | "Salvage" | "Inspection" | "Repair" | "Offshore";
  location?: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  description?: string;
}

export const galleryItems: GalleryItem[] = [
  // --- Featured Operations Team Video (First in All & Videos) ---
  {
    id: 29,
    type: "video",
    title: "Project Operations Team & Field Update",
    category: "Offshore",
    location: "Marine Project Base",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/Update%20.mp4",
    description: "Ocean 9 project leadership, commercial divers, and marine engineering crew on site.",
  },

  // --- High-Impact Project Photos with People (User-Specified Sequence) ---
  {
    id: 12,
    type: "image",
    title: "Heavy Rigging & Equipment Hoist",
    category: "Offshore",
    location: "Marine River Project",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG_20140131_174505.jpg?updatedAt=1788363090038",
    description: "Offshore crew lifting and positioning heavy subsea machinery using tripod gantry and chain blocks.",
  },
  {
    id: 14,
    type: "image",
    title: "Night Marine Salvage Operation",
    category: "Salvage",
    location: "Harbor Anchorage",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20260501-WA0023.jpg?updatedAt=1788363088461",
    description: "Heavy crane barge and salvage crew conducting nighttime recovery of submerged marine wreckage.",
  },
  {
    id: 25,
    type: "image",
    title: "Commercial Air Diving Operations",
    category: "Diving",
    location: "Inshore Project Site",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/20180308_161829.jpg?updatedAt=1788363087925",
    description: "Certified commercial diver in surface-supplied diving gear with helmet and standby support crew.",
  },
  {
    id: 27,
    type: "image",
    title: "Confined Space Subsea Diving",
    category: "Diving",
    location: "Industrial Marine Intake",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20140219-WA102.jpg?updatedAt=1788363087790",
    description: "Specialized deep-penetration commercial diving operation inside circular concrete subsea shaft.",
  },
  {
    id: 26,
    type: "image",
    title: "Underwater Diver Intervention",
    category: "Diving",
    location: "Quayside Harbor Base",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20140219-WA042.jpg?updatedAt=1788363087781",
    description: "Commercial diver equipped with full umbilical and helmet ascending ladder during under-hull operations.",
  },
  {
    id: 19,
    type: "image",
    title: "Pump House Diving Support",
    category: "Repair",
    location: "Water Intake Installation",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20180624-WA0014.jpg?updatedAt=1788363088289",
    description: "Support crew attending diver air umbilical and communication lines during intake chamber rehabilitation.",
  },
  {
    id: 18,
    type: "image",
    title: "Inshore Waterway Barrier Works",
    category: "Diving",
    location: "River Basin Facility",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20180612-WA0030.jpg?updatedAt=1788363088386",
    description: "Deployment of floating marine barrier and inshore dive team for intake water control.",
  },
  {
    id: 24,
    type: "image",
    title: "Offshore Tug & Anchor Handling",
    category: "Offshore",
    location: "Coastal Worksite",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20170919-WA0026.jpg",
    description: "Heavy ocean-going tugboat rigged with massive mooring anchor for offshore positioning.",
  },
  {
    id: 15,
    type: "image",
    title: "Subsea Structure Extraction",
    category: "Salvage",
    location: "Offshore Recovery Site",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20260501-WA0034.jpg",
    description: "Extracted marine wreckage hoisted onto transport barge under supervision of deck engineering team.",
  },
  {
    id: 6,
    type: "image",
    title: "Commercial Offshore Diving Team",
    category: "Diving",
    location: "Offshore Project Hub",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20140219-WA040.jpg",
    description: "Certified commercial diving crew mobilized with subsea rigging and heavy deck support equipment.",
  },
  {
    id: 13,
    type: "image",
    title: "Marine Piling Construction Platform",
    category: "Offshore",
    location: "Coastal Project Site",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG_20131111_110726.jpg",
    description: "Marine piling support platform with workboat and construction crew installing subsea casing.",
  },
  {
    id: 3,
    type: "image",
    title: "Diamond Wire Cutter Rigging",
    category: "Repair",
    location: "Subsea Equipment Deck",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/Diamond%20cutter.png",
    description: "Specialized high-efficiency subsea diamond wire cutter deployment for casing severance.",
  },

  // --- Specialized Equipment & Subsea Operations Photos ---
  {
    id: 1,
    type: "image",
    title: "Pile Cutting Operations",
    category: "Salvage",
    location: "Offshore Project Site",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/Pile%20cutting.png",
    description: "Precision underwater hydraulic and diamond pile cutting operations.",
  },
  {
    id: 2,
    type: "image",
    title: "Pile After Cutting",
    category: "Inspection",
    location: "Subsea Project Site",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/Pile%20after%20cutting.png",
    description: "Completed underwater pile severance and clean subsea profile inspection.",
  },
  {
    id: 4,
    type: "image",
    title: "Pile Removed After Cut",
    category: "Salvage",
    location: "Marine Work Barge",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/Pile%20removed%20after%20cut.png",
    description: "Severed subsea pile extracted and lifted safely onto marine barge deck.",
  },
  {
    id: 5,
    type: "image",
    title: "Pile Cutting Platform",
    category: "Offshore",
    location: "Offshore Marine Base",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/proper-platform.png",
    description: "Heavy marine work platform rigged and stabilized for offshore subsea cutting.",
  },
  {
    id: 20,
    type: "image",
    title: "Subsea Wreck Recovery Lift",
    category: "Salvage",
    location: "Port Approaches",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20260501-WA0035.jpg",
    description: "Controlled heavy lift of submerged wreckage section from navigation channel.",
  },
  {
    id: 21,
    type: "image",
    title: "Evening Salvage Extraction",
    category: "Salvage",
    location: "Offshore Anchorage",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20260501-WA0028.jpg",
    description: "Late evening extraction of severed marine wreckage using crane barge.",
  },
  {
    id: 22,
    type: "image",
    title: "Asian Hercules Floating Crane",
    category: "Inspection",
    location: "Coastal Waters",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20170919-WA0028.jpg",
    description: "Massive Asian Hercules III floating sheerleg crane vessel conducting heavy marine lift.",
  },
  {
    id: 23,
    type: "image",
    title: "Subsea Cable Splicing Workshop",
    category: "Offshore",
    location: "Deck Workshop Facility",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Project%20photos-20260902T152708Z-1-001/Project%20photos/IMG-20200410-WA0018.jpg",
    description: "Subsea high-voltage power cable jointing and repair station with Paramount safe cable system.",
  },

  // --- Project Videos ---
  {
    id: 30,
    type: "video",
    category: "Diving",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-2.mp4?updatedAt=1788363030276",
  },
  {
    id: 31,
    type: "video",
    category: "Diving",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-3.mp4?updatedAt=1788363029884",
  },
  {
    id: 32,
    type: "video",
    category: "Offshore",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-4.mp4?updatedAt=1788363023984",
  },
  {
    id: 33,
    type: "video",
    category: "Inspection",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-10.mp4?updatedAt=1788363024013",
  },
  {
    id: 34,
    type: "video",
    category: "Salvage",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-15.mp4?updatedAt=1788363021912",
  },
  {
    id: 35,
    type: "video",
    category: "Diving",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-11.mp4?updatedAt=1788363021922",
  },
  {
    id: 36,
    type: "video",
    category: "Repair",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-5.mp4?updatedAt=1788363020761",
  },
  {
    id: 37,
    type: "video",
    category: "Diving",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-6.mp4?updatedAt=1788363020303",
  },
  {
    id: 38,
    type: "video",
    category: "Offshore",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-1.mp4?updatedAt=1788363018702",
  },
  {
    id: 39,
    type: "video",
    category: "Inspection",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/hold0.mp4?updatedAt=1788363017133",
  },
  {
    id: 40,
    type: "video",
    category: "Diving",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-7(1).mp4?updatedAt=1788363014347",
  },
  {
    id: 41,
    type: "video",
    category: "Diving",
    mediaUrl: "https://ik.imagekit.io/ocot2fs3tf/Videos-20260902T152708Z-1-001/Videos/Upload-7.mp4?updatedAt=1788363013522",
  },
];

const categories = ["All", "Photos", "Videos"];

export default function ProjectGallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Photos") return item.type === "image";
    if (activeCategory === "Videos") return item.type === "video";
    return item.category === activeCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1 || filteredItems.length === 0) return;
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1 || filteredItems.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentIndex, filteredItems]);

  return (
    <section id="project-gallery" className="py-12 sm:py-16 lg:py-20 bg-white relative z-40 text-slate-900 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6 lg:gap-8">
          {/* Left Column: Badge + Title + Subtitle + Filters */}
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
                Project Gallery Preview
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-poppins font-bold text-[#001742] text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] leading-tight tracking-tight">
              See Our Team at Work
            </h2>

            {/* Subtitle Text on Left */}
            <p className="font-roboto font-normal text-slate-500 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-xl">
              Explore projects from our diving, salvage, inspection, repair and marine operations.
            </p>

            {/* Category Pill Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-poppins font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#001742] text-white font-bold shadow-md"
                      : "bg-[#f4f8fe] border border-[#dbeafe] text-[#001742] hover:border-[#1e66f5]/50 hover:bg-[#eaf4ff]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <div className="shrink-0 pb-1 w-full lg:w-auto flex justify-start lg:justify-end">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 bg-[#001742] hover:bg-[#001e54] text-white pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer transform hover:scale-[1.02]"
            >
              <span className="font-dm-sans font-semibold text-sm leading-none text-white whitespace-nowrap">
                View Project Gallery
              </span>
              <div className="w-8 h-8 rounded-full bg-white text-[#001742] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Gallery Grid / Mobile horizontal scroll */}
        <div className="max-sm:overflow-x-auto max-sm:scrollbar-none max-sm:-mx-4 max-sm:px-4 max-sm:pb-4 max-sm:pt-1">
          <div className="max-sm:flex max-sm:w-max max-sm:gap-4 max-sm:pr-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 max-sm:snap-x max-sm:snap-mandatory">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-[#00173e] border border-[#dbeafe] rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl hover:border-[#1e66f5]/60 transition-all duration-300 max-sm:w-[82vw] max-sm:max-w-[340px] max-sm:shrink-0 max-sm:snap-start"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.mediaUrl}
                    alt={item.title || "Project Operation"}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                    <video
                      src={item.mediaUrl}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Zoom / Play Indicator on Top Right */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#00173e]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-[#00173e] transition-all duration-300 shadow-md">
                  {item.type === "video" ? (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  ) : (
                    <ZoomIn className="w-4 h-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Video Player Modal with Next / Prev Gallery Navigation */}
      {mounted &&
        selectedItem &&
        createPortal(
          <div
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999999] flex items-center justify-center p-4 sm:p-16 lg:p-20 animate-in fade-in duration-200"
          >
            {/* Modal Wrapper with Relative Positioning for Outside Buttons */}
            <div className="relative max-w-4xl w-full my-auto">
              {/* Previous Button (Just beside container) */}
              {filteredItems.length > 1 && (
                <button
                  onClick={handlePrev}
                  aria-label="Previous Item"
                  className="absolute -left-3 sm:-left-14 md:-left-16 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00173e]/90 hover:bg-[#20c9d2] text-white hover:text-[#00173e] backdrop-blur-md border border-cyan-400/40 flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-110 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                </button>
              )}

              {/* Next Button (Just beside container) */}
              {filteredItems.length > 1 && (
                <button
                  onClick={handleNext}
                  aria-label="Next Item"
                  className="absolute -right-3 sm:-right-14 md:-right-16 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00173e]/90 hover:bg-[#20c9d2] text-white hover:text-[#00173e] backdrop-blur-md border border-cyan-400/40 flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-110 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              )}

              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full bg-[#00173e] border border-cyan-400/40 rounded-3xl overflow-hidden shadow-2xl text-white max-h-[92vh] flex flex-col"
              >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#00173e] border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-poppins font-semibold">
                    {selectedItem.category}
                  </span>
                  {selectedItem.location && (
                    <span className="text-xs font-dm-sans text-slate-400 hidden sm:inline">
                      {selectedItem.location}
                    </span>
                  )}
                  {currentIndex !== -1 && (
                    <span className="text-xs font-poppins text-slate-400">
                      {currentIndex + 1} of {filteredItems.length}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#20c9d2] text-white hover:text-[#00173e] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Media Container */}
              <div className="relative w-full aspect-[16/10] max-h-[62vh] bg-black flex items-center justify-center overflow-hidden">
                {/* Media Item */}
                {selectedItem.type === "video" ? (
                  <video
                    key={selectedItem.mediaUrl}
                    src={selectedItem.mediaUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-[62vh] object-contain"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      key={selectedItem.mediaUrl}
                      src={selectedItem.mediaUrl}
                      alt={selectedItem.title || "Project Photo"}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Modal Info Footer */}
              {(selectedItem.title || selectedItem.description) && (
                <div className="p-5 sm:p-6 bg-[#00173e] border-t border-white/10 space-y-1.5">
                  {selectedItem.title && (
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white">
                      {selectedItem.title}
                    </h3>
                  )}
                  {selectedItem.description && (
                    <p className="font-roboto text-sm text-slate-300 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
