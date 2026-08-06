"use client";

import Link from "next/link";
import {
  ShieldCheck,
  HeartPulse,
  Leaf,
  Users,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

export default function HSESection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Risk Assessment & Mitigation",
      desc: "Comprehensive hazard identification and safety protocols prior to every operation.",
    },
    {
      icon: HeartPulse,
      title: "Health & Diver Well-being",
      desc: "Certified medical standards, chamber readiness, and strict diver safety limits.",
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      desc: "Eco-friendly underwater practices protecting marine ecosystems and subsea flora.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "IMCA & ISO\nSafety Compliant",
    },
    {
      icon: Users,
      title: "Zero-Incident\nOperational Mindset",
    },
    {
      icon: ClipboardCheck,
      title: "Rigorous Risk\nAudits & Toolboxes",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious\nSubsea Procedures",
    },
  ];

  return (
    <section id="hse" className="py-8 sm:py-10 lg:py-12 bg-transparent relative overflow-hidden text-white flex items-center min-h-[calc(100vh-80px)] max-h-[840px]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Column: Content (Strict 1-Fold Fit & Equal Height Alignment) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-0.5 space-y-4 lg:space-y-5">
            <div className="space-y-3.5 lg:space-y-4">
              {/* Tag / Badge: Brand Transparent Glass Badge matching all other section badges */}
              <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] shrink-0 backdrop-blur-md w-fit">
                <ShieldCheck className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                <span className="font-roboto font-normal text-white text-[14px] tracking-normal">
                  Health, Safety and Environment
                </span>
              </div>

              {/* Subhead Kicker below Section Badge */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                <span className="font-dm-sans font-bold text-xs uppercase tracking-widest text-cyan-400">
                  Safety Comes First
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-white leading-[1.15] tracking-tight">
                Safe Work.<br />
                Responsible Operations<span className="text-cyan-400">.</span>
              </h2>

              {/* Highlight Quote Box - Transparent Glass matching Work History */}
              <div className="flex items-start gap-3.5 bg-transparent backdrop-blur-md border border-white/20 border-l-[4px] border-l-cyan-400 rounded-r-xl rounded-l-xs p-3.5 sm:p-4 shadow-xl hover:bg-white/5 transition-all duration-300">
                <span className="font-serif font-black text-2xl sm:text-3xl text-cyan-400 leading-none select-none shrink-0 mt-0.5">
                  “
                </span>
                <p className="font-poppins font-medium text-cyan-100 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;No job is more important than the safety of our team, clients and the environment.&rdquo;
                </p>
              </div>

              {/* Detailed Content Paragraphs - Pure White High Contrast Readable Text */}
              <div className="space-y-2 font-roboto text-white text-xs sm:text-[13.5px] font-normal leading-relaxed">
                <p>
                  We plan every operation carefully, identify risks and follow safe working methods throughout the project.
                </p>
                <p>
                  Ocean 9&apos;s profile places safety, health and environmental responsibility at the centre of its operations.
                </p>
              </div>

              {/* 4 Feature Badges Grid (2x2) - Modern Watery Glass Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {features.map((feat, idx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white/15 hover:border-cyan-300/30 rounded-xl p-3 flex items-center gap-3.5 shadow-md hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:bg-cyan-500/5 transition-all duration-500 cursor-pointer"
                    >
                      {/* Watery Shimmer Ambient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="w-9 h-9 rounded-xl bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#00173e] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105 relative z-10">
                        <FeatIcon className="w-4.5 h-4.5" />
                      </div>
                      <span className="font-poppins font-semibold text-xs sm:text-[13px] text-white group-hover:text-cyan-300 transition-colors leading-snug whitespace-pre-line relative z-10">
                        {feat.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button - High contrast brand-consistent white pill button */}
            <div className="mt-auto min-h-[58px] flex items-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] group cursor-pointer transform hover:scale-[1.02]"
              >
                <span className="font-dm-sans font-semibold text-[14px] leading-[22px] tracking-normal text-[#002365] whitespace-nowrap">
                  View Our HSE Policy
                </span>
                <div className="w-[36px] h-[36px] rounded-full bg-[#002365] flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Equalized Height Transparent Glass Container */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-transparent backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
              {/* Card Header & Accent Bar */}
              <div className="pb-2">
                <h3 className="font-poppins font-bold text-xl sm:text-2xl lg:text-[25px] text-white tracking-tight">
                  Our Core HSE Pillars
                </h3>
                <div className="w-12 h-[3px] bg-cyan-400 mt-2.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>

              {/* 3 Pillar Rows (Clean Informational List) */}
              <div className="space-y-3 sm:space-y-3.5 mt-2 sm:mt-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-2 sm:p-2.5 rounded-xl"
                    >
                      <div className="w-11 h-11 rounded-xl bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="font-poppins font-bold text-sm sm:text-[15px] text-white leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="font-roboto text-white/85 text-xs sm:text-[12.5px] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Shield Footer Row */}
              <div className="pt-3 flex items-center gap-3.5 mt-2 sm:mt-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-inner">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-dm-sans font-bold text-xs tracking-wider text-cyan-400 uppercase">
                    SAFETY • HEALTH • ENVIRONMENT
                  </p>
                  <p className="font-roboto text-[11px] sm:text-xs text-white/90 leading-snug">
                    Integrity & Protection in Every Subsea Operation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
