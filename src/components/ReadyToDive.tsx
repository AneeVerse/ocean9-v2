import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ReadyToDive() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 min-h-[380px] lg:min-h-[420px] overflow-hidden bg-transparent z-40 text-center flex items-center justify-center text-white">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Subtitle Tag */}
        <div>
          <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[44px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] backdrop-blur-md">
            <span className="font-poppins font-semibold text-xs sm:text-[13px] tracking-[0.15em] text-cyan-300 uppercase">
              Planning an Underwater or Marine Project?
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-white tracking-normal leading-tight lg:leading-[1.2]">
          Share Your Requirement
        </h2>

        {/* Content Paragraph */}
        <p className="font-roboto font-normal text-white/90 text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Share your project details with us. We will understand your needs and suggest the right solution.
        </p>

        {/* Buttons Row */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-between gap-3.5 h-[52px] bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.3)] group transform hover:scale-[1.02] cursor-pointer"
          >
            <span className="font-dm-sans font-bold">Request a Quote</span>
            <div className="w-[40px] h-[40px] rounded-full bg-[#002365] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform shrink-0 shadow-xs">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </Link>

          {/* Secondary Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center h-[52px] bg-[#002365]/80 hover:bg-[#00368a] border border-white/20 text-white px-7 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-md backdrop-blur-md transform hover:scale-[1.02] cursor-pointer"
          >
            <span className="font-dm-sans font-semibold">Contact us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
