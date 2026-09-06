"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { galleryItems, GalleryItem } from "@/components/ProjectGallerySection";

const categories = ["All", "Photos", "Videos", "Diving", "Salvage", "Inspection", "Repair", "Offshore"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
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
    <main className="min-h-screen bg-[#000b20] text-white flex flex-col selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 bg-gradient-to-b from-[#00173e] via-[#000f28] to-[#000b20] border-b border-white/10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to Home button */}
          <Link
            href="/?preview=true"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-white text-sm font-poppins font-medium mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Project & Operations Gallery
            </h1>
            <p className="font-roboto text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Browse our complete collection of subsea diving, marine salvage, pile cutting, offshore surveys, and underwater engineering operations.
            </p>
          </div>

          {/* Filter Pills Bar with counts */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none pt-8 mt-4 border-t border-white/10">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? galleryItems.length
                  : cat === "Photos"
                  ? galleryItems.filter((i) => i.type === "image").length
                  : cat === "Videos"
                  ? galleryItems.filter((i) => i.type === "video").length
                  : galleryItems.filter((i) => i.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-xs sm:text-sm font-poppins font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? "bg-cyan-500 text-[#00173e] font-bold shadow-lg shadow-cyan-500/20 scale-105"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-cyan-400/40"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                      activeCategory === cat
                        ? "bg-[#00173e] text-white shadow-xs"
                        : "bg-white/15 text-cyan-300 border border-cyan-400/25 group-hover:bg-white/25"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-12 sm:py-16 flex-1 relative z-10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-[#00173e] border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl hover:border-cyan-400/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.mediaUrl}
                    alt={item.title || "Project Operation"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
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
                <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#00173e]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-[#00173e] transition-all duration-300 shadow-md">
                  {item.type === "video" ? (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  ) : (
                    <ZoomIn className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Video Player Modal with Next / Prev Navigation */}
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

      <Footer />
      <FloatingActionButton />
    </main>
  );
}
