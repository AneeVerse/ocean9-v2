"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const baseServices = [
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
    image: "/assets/home-cable-repair-and-protection.jpg",
  },
  {
    title: "Underwater Cutting, Welding and Salvage",
    image: "/assets/home-under-water-savage.jpg",
  },
  {
    title: "Marine Crew and Manning",
    image: "/assets/home-dock-and-gate-operation.jpg",
  },
];

export default function ServicesSection() {
  // Only unique services, no duplicates
  const services = baseServices;

  const handleCardClick = (title: string) => {
    if (typeof window !== "undefined") {
      // Dispatch custom event so ContactSection pre-selects this service
      window.dispatchEvent(new CustomEvent("select-service", { detail: title }));

      // Smooth scroll down to the "Share Your Requirement" contact section
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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

          {/* Top Right "View All Services" Button */}
          <div className="md:absolute md:right-0 md:bottom-0 mt-6 md:mt-0 flex justify-start md:justify-end">
            <Link
              href="/?preview=true#contact"
              onClick={(e) => {
                const contactEl = document.getElementById("contact");
                if (contactEl) {
                  e.preventDefault();
                  contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState(null, "", "/?preview=true#contact");
                }
              }}
              className="inline-flex items-center gap-4 bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] group cursor-pointer transform hover:scale-[1.02]"
            >
              <span className="font-dm-sans font-semibold text-[15px] leading-[24px] tracking-normal text-[#002365] whitespace-nowrap">
                View All Services
              </span>
              <div className="w-[38px] h-[38px] rounded-full bg-[#002365] flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Track without duplicates */}
      <div className="w-full overflow-x-auto scrollbar-none pb-4 pt-2 relative z-10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 sm:gap-4.5 lg:gap-5 w-max pr-12">
            {services.map((service, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleCardClick(service.title)}
                className="w-[250px] sm:w-[270px] lg:w-[280px] xl:w-[290px] h-auto bg-transparent backdrop-blur-md border border-white/20 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.22)] hover:border-cyan-300/40 hover:bg-cyan-500/5 flex flex-col shrink-0 snap-start transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer text-left block"
              >
                {/* Card Top Image */}
                <div className="relative h-[210px] sm:h-[225px] lg:h-[235px] w-full overflow-hidden bg-slate-900 rounded-t-[20px] sm:rounded-t-[24px] shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
    </section>
  );
}
