"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Download, X, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ISOPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#045cb9] via-[#024594] to-[#002365] text-white flex flex-col selection:bg-cyan-300 selection:text-[#001742]">
      <Navbar />

      {/* Centered Header */}
      <section className="relative pt-32 pb-4 sm:pt-36 sm:pb-6 bg-transparent">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            ISO 9001:2015 Certificate
          </h1>
        </div>
      </section>

      {/* Image Container - Full Visible Certificate */}
      <div className="flex-1 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col items-center justify-center">
        <div
          onClick={() => setIsOpen(true)}
          className="relative max-w-3xl w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/25 hover:border-cyan-300/60 transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
        >
          <Image
            src="https://ik.imagekit.io/ocot2fs3tf/images/ISO%20Ocean%209_page-0001.jpg"
            alt="ISO 9001:2015 Certificate Ocean 9 Offshore Services"
            width={2479}
            height={3508}
            className="w-full h-auto block object-contain"
            priority
          />
        </div>

        {/* Centered Download PDF Button below image */}
        <div className="flex justify-center items-center pt-8 sm:pt-12">
          <a
            href="https://ik.imagekit.io/ocot2fs3tf/images/ISO%20Ocean%209.pdf"
            download="ISO_9001_2015_Certificate_Ocean9.pdf"
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
      {mounted && isOpen && createPortal(
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-auto max-w-[95vw] max-h-[96vh] flex flex-col bg-[#001742] border border-cyan-400/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#001742] shrink-0">
              <span className="font-poppins font-bold text-white text-sm sm:text-base">
                ISO 9001:2015 Certificate
              </span>

              <div className="flex items-center gap-2">
                <a
                  href="https://ik.imagekit.io/ocot2fs3tf/images/ISO%20Ocean%209.pdf"
                  download="ISO_9001_2015_Certificate_Ocean9.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#001742] font-poppins font-bold text-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View - Full page visible without scroll */}
            <div className="relative p-2 sm:p-3 bg-slate-950/80 flex items-center justify-center overflow-hidden">
              <div className="relative h-[72vh] sm:h-[76vh] max-h-[820px] aspect-[1/1.414] bg-white rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/ocot2fs3tf/images/ISO%20Ocean%209_page-0001.jpg"
                  alt="ISO 9001:2015 Certificate Ocean 9 Offshore Services"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2 border-t border-white/10 bg-[#001742] flex items-center justify-between text-xs text-slate-400 shrink-0">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white text-[11px]">ESC</kbd> or click outside to close</span>
              <a
                href="https://ik.imagekit.io/ocot2fs3tf/images/ISO%20Ocean%209.pdf"
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
