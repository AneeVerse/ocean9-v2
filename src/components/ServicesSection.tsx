"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  ArrowRight,
  Flame,
  Zap,
  Waves,
  ShieldCheck,
  Bot,
} from "lucide-react";

export interface ServiceApplication {
  industry: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  image: string;
  badge?: string;
  tagline?: string;
  applications?: ServiceApplication[];
}

export const baseServices: ServiceItem[] = [
  {
    title: "Air Diving",
    image: "/assets/home-air-diving-card.png",
  },
  {
    title: "Mixed Gas Diving",
    image: "/assets/home-mixed-gas-diving-card.png",
  },
  {
    title: "Saturation Diving",
    image: "/assets/home-saturation-diving-card.png",
  },
  {
    title: "Offshore Operations",
    image: "/assets/home-offshore-operations-card.png",
  },
  {
    title: "Onshore Operations",
    image: "/assets/home-onshore-operations-card.png",
  },
  {
    title: "Marine Survey and Inspection",
    image: "https://ik.imagekit.io/ocot2fs3tf/images/Marine%20Survey%20and%20Inspection.png",
  },
  {
    title: "Underwater Cutting, Welding and Salvage",
    image: "https://ik.imagekit.io/ocot2fs3tf/images/Underwater%20Cutting,%20Welding%20and%20Salvage.png",
  },
  {
    title: "Marine Crew and Manning",
    image: "https://ik.imagekit.io/ocot2fs3tf/images/crew-management.png",
  },
  {
    title: "Remotely Operated Vehicle (ROV)",
    image: "https://ik.imagekit.io/ocot2fs3tf/images/Remotely%20Operated%20Vehicle.png",
    badge: "Subsea Robotics & Inspection",
    tagline: "High-precision robotic subsea intervention, visual inspection, and survey capabilities.",
    applications: [
      {
        industry: "Offshore Oil and Gas",
        description:
          "Inspecting pipelines, maintaining subsea manifolds, and supporting deepwater drilling infrastructure.",
      },
      {
        industry: "Renewable Energy",
        description:
          "Assisting in the construction and site surveys of offshore wind farms.",
      },
      {
        industry: "Marine Science & Salvage",
        description:
          "Mapping coral reefs, discovering new marine species, and plugging leaks on sunken ships.",
      },
      {
        industry: "Defense & Security",
        description:
          "Detecting unexploded ordnance (UXO) and performing harbor surveillance.",
      },
    ],
  },
];

export default function ServicesSection() {
  // Only unique services, no duplicates
  const services = baseServices;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragDistance = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalService(null);
      }
    };

    if (activeModalService) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalService]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isMouseDown.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const dist = Math.abs(x - startX.current);
    dragDistance.current = dist;
    if (dist > 5) {
      setIsDragging(true);
    }
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isMouseDown.current = false;
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleCardClick = (service: ServiceItem) => {
    if (dragDistance.current > 6) {
      return; // User was dragging to scroll, ignore click
    }

    // If service has detailed applications breakdown, open modal dialog
    if (service.applications && service.applications.length > 0) {
      setActiveModalService(service);
      return;
    }

    if (typeof window !== "undefined") {
      // Dispatch custom event so ContactSection pre-selects this service
      window.dispatchEvent(new CustomEvent("select-service", { detail: service.title }));

      // Smooth scroll down to the "Share Your Requirement" contact section
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleEnquireFromModal = (serviceTitle: string) => {
    setActiveModalService(null);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("select-service", { detail: serviceTitle }));
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        setTimeout(() => {
          contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case "Offshore Oil and Gas":
        return <Flame className="w-4 h-4 text-cyan-300" />;
      case "Renewable Energy":
        return <Zap className="w-4 h-4 text-cyan-300" />;
      case "Marine Science & Salvage":
        return <Waves className="w-4 h-4 text-cyan-300" />;
      case "Defense & Security":
        return <ShieldCheck className="w-4 h-4 text-cyan-300" />;
      default:
        return <Bot className="w-4 h-4 text-cyan-300" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        {/* Section Header */}
        <div className="relative text-center space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#001742]/85 border border-white/30 shadow-md backdrop-blur-md shrink-0">
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
            <span className="font-roboto font-normal text-white text-[14px] tracking-normal">
              Our Core Services
            </span>
          </div>

          <h2 className="font-poppins font-normal sm:font-medium text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-tight text-contrast-shadow">
            Services We Provide
          </h2>
          <p className="font-roboto font-normal text-white text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto text-contrast-subtle">
            Complete support for underwater, Onshore, Offshore and Marine projects.
          </p>

          {/* Top Right Scroll Arrows for Desktop */}
          <div className="hidden sm:flex items-center gap-2 md:absolute md:right-0 md:bottom-0 mt-6 md:mt-0 justify-end">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll services left"
              className="w-10 h-10 rounded-full bg-[#001742]/80 hover:bg-cyan-500 text-white hover:text-[#001742] border border-white/20 hover:border-cyan-400 flex items-center justify-center transition-all duration-200 shadow-md backdrop-blur-md cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll services right"
              className="w-10 h-10 rounded-full bg-[#001742]/80 hover:bg-cyan-500 text-white hover:text-[#001742] border border-white/20 hover:border-cyan-400 flex items-center justify-center transition-all duration-200 shadow-md backdrop-blur-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Track with Mouse Drag Support */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`w-full overflow-x-auto scrollbar-none pb-4 pt-2 relative z-10 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 sm:gap-4.5 lg:gap-5 w-max pr-12">
            {services.map((service, index) => (
              <button
                key={index}
                type="button"
                draggable={false}
                onClick={() => handleCardClick(service)}
                className="w-[250px] sm:w-[270px] lg:w-[280px] xl:w-[290px] h-auto bg-transparent backdrop-blur-md border border-white/20 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.22)] hover:border-cyan-300/40 hover:bg-cyan-500/5 flex flex-col shrink-0 snap-start transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer text-left block select-none"
              >
                {/* Card Top Image */}
                <div className="relative h-[210px] sm:h-[225px] lg:h-[235px] w-full overflow-hidden bg-slate-900 rounded-t-[20px] sm:rounded-t-[24px] shrink-0 pointer-events-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    draggable={false}
                    className="object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                  />
                </div>

                {/* Card Bottom Transparent Glass Content Box */}
                <div className="bg-transparent py-4 px-4 sm:px-5 rounded-b-[20px] sm:rounded-b-[24px] text-center flex-1 flex items-center justify-center min-h-[68px] w-full">
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug text-contrast-subtle">
                    {service.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Service Details & Applications Modal (Teleported to document.body) */}
      {mounted &&
        activeModalService &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setActiveModalService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div
              className="relative w-full max-w-2xl bg-[#001742] border border-cyan-400/40 rounded-[28px] shadow-[0_0_60px_rgba(0,180,216,0.35)] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Header Banner */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <Image
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001742] via-[#001742]/70 to-black/40" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-[#001742] text-white flex items-center justify-center transition-all duration-200 border border-white/30 cursor-pointer shadow-lg backdrop-blur-md z-20"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Header Badge & Title Overlay */}
                <div className="absolute bottom-4 left-6 right-6 z-10">
                  {activeModalService.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/25 border border-cyan-400/50 text-cyan-300 text-xs font-semibold backdrop-blur-md mb-2 shadow-sm">
                      <Sparkles className="w-3 h-3 text-cyan-300" />
                      {activeModalService.badge}
                    </span>
                  )}
                  <h3
                    id="service-modal-title"
                    className="font-poppins font-bold text-2xl sm:text-3xl text-white drop-shadow-md leading-tight"
                  >
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-6 space-y-5 bg-[#001742]">
                {activeModalService.tagline && (
                  <p className="font-roboto text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                    {activeModalService.tagline}
                  </p>
                )}

                {/* Main Applications and Industries */}
                {activeModalService.applications && activeModalService.applications.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      <h4 className="font-poppins font-semibold text-base sm:text-lg text-white">
                        Main Applications and Industries
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {activeModalService.applications.map((app, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-200 flex flex-col"
                        >
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center shrink-0">
                              {getIndustryIcon(app.industry)}
                            </div>
                            <h5 className="font-poppins font-semibold text-sm sm:text-[15px] text-white">
                              {app.industry}
                            </h5>
                          </div>
                          <p className="font-roboto text-xs sm:text-[13px] text-slate-300 leading-relaxed pl-1">
                            {app.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="px-6 py-4 bg-[#00102e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto text-sm text-slate-300 hover:text-white transition-colors cursor-pointer py-2 px-4 order-2 sm:order-1 text-center"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => handleEnquireFromModal(activeModalService.title)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#001742] font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] order-1 sm:order-2"
                >
                  <span>Enquire About {activeModalService.title.split("(")[0].trim()}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
