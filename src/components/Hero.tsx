import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[650px] w-full flex flex-col justify-between bg-[#020917] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden transform-gpu [transform:translateZ(0)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center transform-gpu"
        >
          <source src="/assets/hero-bg-videoplayback.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#020917]/40 pointer-events-none" />

        {/* Seamless bottom gradient overlay to preserve bottom curve transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020917] via-[#020917]/70 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content - Vertically centered inside 100vh single fold */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-24 sm:pt-28 pb-12">
        <div className="max-w-[950px]">
          {/* Badge */}
          <div className="inline-flex items-center justify-center h-[34px] px-[14px] py-[2px] rounded-[50px] bg-[#003D82] text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-md">
            From Seabed to Surface
          </div>

          {/* Main Headline */}
          <h1 className="text-[28px] sm:text-[40px] lg:text-[52px] leading-[36px] sm:leading-[48px] lg:leading-[62px] font-bold text-white tracking-normal mb-5 max-w-[980px]">
            TRUSTWORTHY DIVING CONTRACTOR FOR UNDERWATER DIVING,<br className="hidden md:inline" /> MARINE &amp; OFFSHORE SERVICES
          </h1>

          {/* Description formatted in 2 lines */}
          <p className="text-white/95 text-sm sm:text-base lg:text-[17px] max-w-3xl mb-8 leading-relaxed font-normal">
            Ocean 9 provides safe and practical solutions for diving, subsea, marine and <br className="hidden sm:inline" />
            underwater projects.
          </p>

          {/* CTA Buttons: Primary & Secondary */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <Link
              href="#services"
              className="inline-flex items-center justify-between gap-3.5 h-[52px] bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] group transform hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Our Services</span>
              <div className="w-[40px] h-[40px] rounded-full bg-[#003D82] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform shrink-0 shadow-sm">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>

            {/* Secondary Button */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center h-[52px] bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white backdrop-blur-md px-7 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-lg transform hover:scale-[1.02] cursor-pointer"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
