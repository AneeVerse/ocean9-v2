"use client";

import Link from "next/link";
import {
  KeyRound,
  Network,
  Anchor,
  Flame,
  LifeBuoy,
  Droplets,
  Compass,
  Bot,
  Building2,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: "01",
      title: "Underwater inspection and repair",
      icon: KeyRound,
    },
    {
      id: "02",
      title: "Pipeline and cable work",
      icon: Network,
    },
    {
      id: "03",
      title: "Hull and dock services",
      icon: Anchor,
    },
    {
      id: "04",
      title: "Underwater cutting and welding",
      icon: Flame,
    },
    {
      id: "05",
      title: "Salvage and recovery",
      icon: LifeBuoy,
    },
    {
      id: "06",
      title: "Desilting and cleaning",
      icon: Droplets,
    },
    {
      id: "07",
      title: "Marine surveys",
      icon: Compass,
    },
    {
      id: "08",
      title: "ROV support",
      icon: Bot,
    },
    {
      id: "09",
      title: "Offshore construction support",
      icon: Building2,
    },
    {
      id: "10",
      title: "Diving personnel and equipment supply",
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] backdrop-blur-md shrink-0 w-fit">
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
                Our Capabilities
              </span>
            </div>

            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.15] tracking-tight">
              Built for Challenging Projects
            </h2>

            <p className="font-roboto text-white/95 text-sm sm:text-base leading-relaxed">
              Our teams support a wide range of underwater and marine operations, including:
            </p>
          </div>

          <div className="shrink-0 self-start md:self-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-4 bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] group cursor-pointer transform hover:scale-[1.02]"
            >
              <span className="font-dm-sans font-semibold text-[15px] leading-[24px] tracking-normal text-[#002365] whitespace-nowrap">
                Explore Our Capabilities
              </span>
              <div className="w-[38px] h-[38px] rounded-full bg-[#002365] flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>

        <div className="max-md:overflow-x-auto max-md:scrollbar-none max-md:-mx-4 max-md:px-4">
          <div className="grid gap-4 sm:gap-5 lg:gap-6 max-md:grid-rows-2 max-md:grid-flow-col max-md:auto-cols-[minmax(240px,72vw)] max-md:w-max md:grid-cols-3 lg:grid-cols-5">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white/15 hover:border-cyan-300/30 rounded-[22px] p-6 sm:p-7 text-left flex flex-col justify-between shadow-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.22)] hover:bg-cyan-500/5 hover:-translate-y-1.5 transition-all duration-500 ease-out min-h-[195px] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex items-start justify-between gap-3 relative z-10">
                  <div className="flex flex-col items-start">
                    <span className="font-dm-sans font-bold text-base text-cyan-300 tracking-tight group-hover:text-cyan-200 transition-colors">
                      {item.id}
                    </span>
                    <div className="w-6 h-[2.5px] bg-cyan-400 mt-1 rounded-full group-hover:w-9 transition-all duration-300" />
                  </div>

                  <div className="w-11 h-11 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#00173e] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center transition-all duration-300 shadow-xs shrink-0 group-hover:scale-110">
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </div>

                <div className="mt-5 relative z-10">
                  <h3 className="font-poppins font-bold text-lg sm:text-[19px] text-white leading-[1.3] group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}





