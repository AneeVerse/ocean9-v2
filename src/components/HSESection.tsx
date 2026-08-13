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
    <section id="hse" className="py-16 sm:py-20 lg:py-24 bg-white relative z-40 overflow-hidden text-slate-900">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Tag / Badge */}
              <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#001742] text-white shrink-0 w-fit shadow-xs">
                <ShieldCheck className="w-4.5 h-4.5 text-cyan-400 shrink-0 stroke-[2.5]" />
                <span className="font-roboto font-semibold text-white text-[14px] tracking-normal">
                  Health, Safety and Environment
                </span>
              </div>

              {/* Subhead Kicker */}
              <div className="flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-[#1e66f5]"></span>
                <span className="font-dm-sans font-bold text-xs uppercase tracking-widest text-[#1e66f5]">
                  SAFETY COMES FIRST
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#001742] leading-[1.15] tracking-tight">
                Safe Work.<br />
                Responsible Operations<span className="text-cyan-500">.</span>
              </h2>

              {/* Quote Box - Light Sky Blue container */}
              <div className="flex items-center gap-3.5 bg-[#f0f7ff] border border-[#dbeafe] border-l-[4px] border-l-[#1e66f5] rounded-r-2xl rounded-l-xs p-4 sm:p-4.5 shadow-xs">
                <span className="font-serif font-black text-2xl sm:text-3xl text-[#1e66f5] leading-none select-none shrink-0">
                  “
                </span>
                <p className="font-poppins font-semibold text-[#001742] text-xs sm:text-sm leading-relaxed">
                  &ldquo;No job is more important than the safety of our team, clients and the environment.&rdquo;
                </p>
              </div>

              {/* Detailed Content Paragraphs */}
              <div className="space-y-2 font-roboto text-slate-500 text-sm sm:text-base leading-relaxed pt-1">
                <p>
                  We plan every operation carefully, identify risks and follow safe working methods throughout the project.
                </p>
                <p>
                  Ocean 9&apos;s profile places safety, health and environmental responsibility at the centre of its operations.
                </p>
              </div>

              {/* 4 Light Blue Feature Cards Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {features.map((feat, idx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative overflow-hidden bg-[#f4f8fe] hover:bg-[#ebf3fe] border border-[#dbeafe] rounded-2xl p-3.5 flex items-center gap-3.5 shadow-xs transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#dbeafe] text-[#001742] group-hover:bg-[#001742] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                        <FeatIcon className="w-4.5 h-4.5 stroke-[2]" />
                      </div>
                      <span className="font-poppins font-bold text-xs sm:text-[13.5px] text-[#001742] leading-snug whitespace-pre-line">
                        {feat.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#001742] hover:bg-[#001e54] text-white pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer transform hover:scale-[1.02]"
              >
                <span className="font-dm-sans font-semibold text-sm leading-none text-white whitespace-nowrap">
                  View Our HSE Policy
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-[#001742] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean White Container with Soft Blue Border */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-white border border-[#bae6fd] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between h-full shadow-xl shadow-blue-500/5 relative overflow-hidden">
              {/* Card Header & Accent Bar */}
              <div className="pb-4">
                <h3 className="font-poppins font-bold text-2xl sm:text-[26px] text-[#001742] tracking-tight">
                  Our Core HSE Pillars
                </h3>
                <div className="w-10 h-[3px] bg-[#001742] mt-2.5 rounded-full" />
              </div>

              {/* 3 White Pillar Cards */}
              <div className="space-y-4 my-2">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#dbeafe] hover:border-[#bae6fd] shadow-xs hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#001742] flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="font-poppins font-bold text-base sm:text-[17px] text-[#001742] leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="font-roboto text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Solid Dark Navy Pillar Banner */}
              <div className="mt-4 p-4.5 sm:p-5 rounded-2xl bg-[#001742] flex items-center gap-4 text-white shadow-md">
                <div className="w-11 h-11 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 flex items-center justify-center shrink-0">
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
