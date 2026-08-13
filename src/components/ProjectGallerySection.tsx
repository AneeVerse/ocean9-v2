"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Underwater Salvage & Pontoon Recovery",
    category: "Salvage",
    location: "Mumbai Port, MH",
    image: "/images/home-underwater-salvage.png",
    description: "Heavy marine salvage and precision underwater lift operations for sunken structural pontoons.",
  },
  {
    id: 2,
    title: "Subsea Cable Trenching & Protection",
    category: "Repair",
    location: "Offshore Gujarat",
    image: "/images/home-cable-repair-protection.png",
    description: "High-pressure underwater cable repair, trenching, articulated armor installation and seabed protection.",
  },
  {
    id: 3,
    title: "Dock Gate Maintenance & Seal Inspection",
    category: "Inspection",
    location: "Commercial Dry Dock",
    image: "/images/home-dock-and-gate-operation-img.png",
    description: "Subsea cleaning, hinge alignment, and rubber seal replacement for major port caisson gates.",
  },
  {
    id: 4,
    title: "Commercial Air Diving Operations",
    category: "Diving",
    location: "Subsea Pipeline Hub",
    image: "/images/home-commerical-air-diving-operations.png",
    description: "Certified IMCA compliant air diving team executing underwater structural audits and maintenance.",
  },
  {
    id: 5,
    title: "Offshore Platform Subsea Survey",
    category: "Offshore",
    location: "Arabian Sea Platform",
    image: "/images/home-offshore-platform-subsea.png",
    description: "Deep sea NDT inspection, anode installation, and jacket leg structural integrity verification.",
  },
  {
    id: 6,
    title: "Industrial Intake Well & Diver Support",
    category: "Diving",
    location: "Thermal Power Station",
    image: "/assets/contact_diver_panel.png",
    description: "Industrial water intake chamber desilting, trash rack cleaning, and diver safety supervision.",
  },
];

const categories = ["All", "Diving", "Salvage", "Inspection", "Repair", "Offshore"];

export default function ProjectGallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="project-gallery" className="py-12 sm:py-16 lg:py-20 bg-white relative z-40 text-slate-900 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Layout (Matches Video Gallery layout) */}
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

            {/* Main Heading - Single Line */}
            <h2 className="font-poppins font-bold text-[#001742] text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] leading-tight tracking-tight whitespace-nowrap">
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
                  onClick={() => setActiveCategory(cat)}
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
          <div className="shrink-0 pb-1">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white border border-[#dbeafe] rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl hover:border-[#1e66f5]/40 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000f28]/95 via-[#00173e]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#00173e]/85 backdrop-blur-md border border-cyan-400/30 text-[#20c9d2] text-[11px] font-poppins font-semibold">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon Indicator */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[11px] font-dm-sans font-medium text-cyan-300 tracking-wide uppercase">
                  {item.location}
                </p>
                <h3 className="font-poppins font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>
                <p className="font-roboto text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal - Portaled to document.body to stay above Navbar */}
      {mounted &&
        selectedImage &&
        createPortal(
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999999] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#00173e] border border-cyan-400/40 rounded-3xl overflow-hidden shadow-2xl text-white my-auto max-h-[92vh] flex flex-col"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#00173e] border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-poppins font-semibold">
                    {selectedImage.category}
                  </span>
                  <span className="text-xs font-dm-sans text-slate-400">
                    {selectedImage.location}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#20c9d2] text-white hover:text-[#00173e] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Container */}
              <div className="relative w-full aspect-[16/10] max-h-[58vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Info Footer */}
              <div className="p-5 sm:p-6 bg-[#00173e] border-t border-white/10 space-y-2">
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white">
                  {selectedImage.title}
                </h3>
                <p className="font-roboto text-sm text-slate-300 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

