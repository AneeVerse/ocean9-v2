import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ReadyToDive() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 min-h-[380px] lg:min-h-[420px] overflow-hidden bg-white z-40 text-center flex items-center justify-center shadow-sm">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Subtitle Tag */}
        <div>
          <span className="font-poppins font-bold text-xs sm:text-sm lg:text-[15px] tracking-[0.2em] text-[#002365] uppercase">
            Planning an Underwater or Marine Project?
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-[#002365] tracking-normal leading-tight lg:leading-[1.25]">
          Let’s Discuss Your Requirement
        </h2>

        {/* Content Paragraph */}
        <p className="font-roboto font-normal text-slate-600 text-sm sm:text-base lg:text-[17px] max-w-none lg:whitespace-nowrap mx-auto leading-relaxed">
          Share your project details with our team. We will understand your needs and suggest the right solution.
        </p>

        {/* Buttons Row */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-between gap-3.5 h-[52px] bg-[#002365] hover:bg-[#001c52] text-white pl-6 pr-1.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-md hover:shadow-lg group transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Request a Quote</span>
            <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-[#002365] group-hover:translate-x-0.5 transition-transform shrink-0 shadow-xs">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </Link>

          {/* Secondary Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center h-[52px] bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[#002365] px-7 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-xs transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Contact Our Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
