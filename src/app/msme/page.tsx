"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Download, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MSMEPageItem {
  src: string;
  alt: string;
  page: number;
}

export default function MSMEPage() {
  const [selectedImage, setSelectedImage] = useState<MSMEPageItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images: MSMEPageItem[] = [
    {
      src: "https://ik.imagekit.io/ocot2fs3tf/images/UDYAM_page-0001.jpg",
      alt: "UDYAM Registration Certificate (Page 1)",
      page: 1,
    },
    {
      src: "https://ik.imagekit.io/ocot2fs3tf/images/UDYAM_page-0002.jpg",
      alt: "UDYAM Registration Certificate (Page 2)",
      page: 2,
    },
    {
      src: "https://ik.imagekit.io/ocot2fs3tf/images/UDYAM_page-0003.jpg",
      alt: "UDYAM Registration Certificate (Page 3)",
      page: 3,
    },
    {
      src: "https://ik.imagekit.io/ocot2fs3tf/images/UDYAM_page-0004.jpg",
      alt: "UDYAM Registration Certificate (Page 4)",
      page: 4,
    },
  ];

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => {
          if (!prev) return null;
          const prevIndex = prev.page > 1 ? prev.page - 2 : images.length - 1;
          return images[prevIndex];
        });
      }
      if (e.key === "ArrowRight") {
        setSelectedImage((prev) => {
          if (!prev) return null;
          const nextIndex = prev.page < images.length ? prev.page : 0;
          return images[nextIndex];
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const prevIndex = selectedImage.page > 1 ? selectedImage.page - 2 : images.length - 1;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const nextIndex = selectedImage.page < images.length ? selectedImage.page : 0;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#045cb9] via-[#024594] to-[#002365] text-white flex flex-col selection:bg-cyan-300 selection:text-[#001742]">
      <Navbar />

      {/* Centered Header */}
      <section className="relative pt-32 pb-4 sm:pt-36 sm:pb-6 bg-transparent">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            MSME Registration Certificate
          </h1>
          <p className="font-roboto text-sm sm:text-base text-cyan-200/90 mt-2 font-medium">
            UDYAM Registration Certificate &bull; Ministry of Micro, Small and Medium Enterprises
          </p>
        </div>
      </section>

      {/* Images Grid - 4 Pages in 2-column layout */}
      <div className="flex-1 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {images.map((item) => (
            <div
              key={item.page}
              onClick={() => setSelectedImage(item)}
              className="relative group rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/25 hover:border-cyan-300/60 transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={2479}
                height={3508}
                className="w-full h-auto block object-contain group-hover:scale-[1.01] transition-transform duration-300"
                priority={item.page === 1}
              />
            </div>
          ))}
        </div>

        {/* Centered Download PDF Button below images */}
        <div className="flex justify-center items-center pt-8 sm:pt-12">
          <a
            href="https://ik.imagekit.io/ocot2fs3tf/images/UDYAM.pdf"
            download="UDYAM_Registration_Certificate_Ocean9.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#001742] font-poppins font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-cyan-400/35"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {mounted &&
        selectedImage &&
        createPortal(
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-auto max-w-[95vw] max-h-[96vh] flex flex-col bg-[#001742] border border-cyan-400/30 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#001742] shrink-0">
                <span className="font-poppins font-bold text-white text-sm sm:text-base">
                  {selectedImage.alt}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href="https://ik.imagekit.io/ocot2fs3tf/images/UDYAM.pdf"
                    download="UDYAM_Registration_Certificate_Ocean9.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#001742] font-poppins font-bold text-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span className="hidden sm:inline">Download PDF</span>
                  </a>

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image View - Full page visible with prev/next navigation */}
              <div className="relative p-2 sm:p-3 bg-slate-950/80 flex items-center justify-center overflow-hidden">
                {/* Previous Page Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 active:scale-95"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="relative h-[72vh] sm:h-[76vh] max-h-[820px] aspect-[1/1.414] bg-white rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>

                {/* Next Page Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 active:scale-95"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2 border-t border-white/10 bg-[#001742] flex items-center justify-between text-xs text-slate-400 shrink-0">
                <span>
                  Page {selectedImage.page} of {images.length} &bull; Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white text-[11px]">&larr;</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white text-[11px]">&rarr;</kbd> or click outside to close
                </span>
                <a
                  href="https://ik.imagekit.io/ocot2fs3tf/images/UDYAM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <span>Open Raw PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}

      <Footer />
    </main>
  );
}
