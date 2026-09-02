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
    <section id="hse" className="py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Tag / Badge */}
              <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] backdrop-blur-md shrink-0 w-fit">
                <ShieldCheck className="w-4.5 h-4.5 text-cyan-400 shrink-0 stroke-[2.5]" />
                <span className="font-roboto font-normal text-white text-[14px] tracking-normal">
                  Health, Safety and Environment
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.15] tracking-tight">
                Safe Work.<br />
                Responsible Operations<span className="text-cyan-400">.</span>
              </h2>

              {/* Quote Box */}
              <div className="flex items-center gap-3.5 bg-transparent backdrop-blur-md border border-white/20 border-l-[4px] border-l-cyan-400 rounded-r-2xl rounded-l-xs p-4 sm:p-4.5 shadow-xl">
                <span className="font-serif font-black text-2xl sm:text-3xl text-cyan-400 leading-none select-none shrink-0">
                  “
                </span>
                <p className="font-poppins font-semibold text-cyan-100 text-xs sm:text-sm leading-relaxed">
                  &ldquo;No job is more important than the safety of our team, clients and the environment.&rdquo;
                </p>
              </div>

              {/* Detailed Content Paragraphs */}
              <div className="space-y-2 font-roboto text-white/95 text-sm sm:text-base leading-relaxed pt-1">
                <p>
                  We plan every operation carefully, identify risks and follow safe working methods throughout the project.
                </p>
                <p>
                  Ocean 9&apos;s profile places safety, health and environmental responsibility at the centre of its operations.
                </p>
              </div>

              {/* 4 Feature Cards Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {features.map((feat, idx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white/15 hover:border-cyan-300/30 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-md hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:bg-cyan-500/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#00173e] flex items-center justify-center shrink-0 transition-all duration-300">
                        <FeatIcon className="w-4.5 h-4.5 stroke-[2]" />
                      </div>
                      <span className="font-poppins font-bold text-xs sm:text-[13.5px] text-white group-hover:text-cyan-300 leading-snug whitespace-pre-line">
                        {feat.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] group cursor-pointer transform hover:scale-[1.02]"
              >
                <span className="font-dm-sans font-semibold text-sm leading-none text-[#002365] whitespace-nowrap">
                  View Our HSE Policy
                </span>
                <div className="w-8 h-8 rounded-full bg-[#002365] text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Glass Container */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-transparent backdrop-blur-md border border-white/20 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
              <div className="pb-4">
                <h3 className="font-poppins font-bold text-2xl sm:text-[26px] text-white tracking-tight">
                  Our Core HSE Pillars
                </h3>
                <div className="w-10 h-[3px] bg-cyan-400 mt-2.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>

              <div className="space-y-4 my-2">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="font-poppins font-bold text-base sm:text-[17px] text-white leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="font-roboto text-white/80 text-xs sm:text-sm leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-4.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex items-center gap-4 text-white shadow-md">
                <div className="w-11 h-11 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-dm-sans font-bold text-xs tracking-wider text-cyan-300 uppercase">
                    SAFETY • HEALTH • ENVIRONMENT
                  </p>
                  <p className="font-roboto text-xs sm:text-[13px] text-white font-medium leading-snug">
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
