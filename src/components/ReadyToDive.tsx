import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ReadyToDive() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 min-h-[380px] lg:min-h-[420px] overflow-hidden bg-transparent text-center flex items-center justify-center">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Subtitle Tag */}
        <div>
          <span className="font-poppins font-bold text-xs sm:text-sm lg:text-[15px] tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Planning an Underwater or Marine Project?
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-poppins font-normal text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-white tracking-normal leading-tight lg:leading-[1.25] drop-shadow-xl">
          Let’s Discuss Your Requirement
        </h2>

        {/* Content Paragraph */}
        <p className="font-roboto font-normal text-white text-sm sm:text-base lg:text-[17px] max-w-none lg:whitespace-nowrap mx-auto leading-relaxed drop-shadow-md">
          Share your project details with our team. We will understand your needs and suggest the right solution.
        </p>

        {/* Buttons Row */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-between gap-3.5 h-[52px] bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.18)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.28)] group transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Request a Quote</span>
            <div className="w-[40px] h-[40px] rounded-full bg-[#003D82] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform shrink-0 shadow-sm">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </Link>

          {/* Secondary Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center h-[52px] bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white backdrop-blur-md px-7 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-lg transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Contact Our Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
