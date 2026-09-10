import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] min-h-[620px] sm:min-h-[680px] w-full flex flex-col bg-[#020917] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden transform-gpu [transform:translateZ(0)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center transform-gpu"
        >
          <source src="https://ik.imagekit.io/ocot2fs3tf/tr:orig/hero-bg-video/Ocean9%20New%20VIdeo.mp4" type="video/mp4" />
          <source src="/assets/ocean9-hero-video.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#020917]/45 pointer-events-none" />

        {/* Seamless bottom gradient overlay to preserve bottom curve transition */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#020917] via-[#020917]/75 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content - Utilizing full height with professional UI/UX breathing room */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        {/* Top: Badge */}
        <div className="pt-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003D82]/90 border border-cyan-400/40 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#003D82]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Underwater Excellence &amp; Delivery
          </div>
        </div>

        {/* Middle: Headline + Description (my-auto centers it vertically in remaining space) */}
        <div className="my-auto py-4 sm:py-6 max-w-[980px] space-y-3 sm:space-y-4">
          <h1 className="text-[26px] xs:text-[29px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] sm:leading-[1.18] font-bold font-poppins text-white tracking-tight drop-shadow-lg">
            TRUSTWORTHY DIVING CONTRACTOR FOR UNDERWATER DIVING, <br className="hidden sm:inline" />
            MARINE &amp; OFFSHORE SERVICES
          </h1>
          <p className="text-white/90 text-xs xs:text-sm sm:text-base lg:text-[17px] max-w-2xl leading-relaxed font-roboto drop-shadow-md">
            Ocean 9 provides safe and practical solutions for diving, subsea, marine and underwater projects.
          </p>
        </div>

        {/* Bottom: CTA Buttons */}
        <div className="pt-2 pb-1 sm:pb-2">
          <div className="flex flex-row items-center gap-3 sm:gap-4 flex-wrap">
            {/* Primary Button */}
            <Link
              href="/#services"
              onClick={(e) => {
                const targetEl = document.getElementById("services");
                if (targetEl) {
                  e.preventDefault();
                  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState(null, "", "/#services");
                }
              }}
              className="inline-flex items-center justify-between gap-2.5 sm:gap-3.5 h-[46px] sm:h-[52px] bg-white hover:bg-slate-100 text-[#002365] pl-4 sm:pl-6 pr-1 sm:pr-1.5 rounded-full font-semibold text-xs xs:text-sm sm:text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.3)] group transform hover:scale-[1.02] cursor-pointer shrink-0"
            >
              <span>Explore Our Services</span>
              <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#003D82] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform shrink-0 shadow-sm">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/#contact"
              onClick={(e) => {
                const targetEl = document.getElementById("contact");
                if (targetEl) {
                  e.preventDefault();
                  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState(null, "", "/#contact");
                }
              }}
              className="inline-flex items-center justify-center h-[46px] sm:h-[52px] bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white backdrop-blur-md px-5 sm:px-7 rounded-full font-semibold text-xs xs:text-sm sm:text-[15px] transition-all duration-300 shadow-lg transform hover:scale-[1.02] cursor-pointer shrink-0"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
