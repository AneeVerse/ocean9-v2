"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What commercial diving standards and certifications does Ocean 9 follow?",
      answer:
        "Ocean 9 operates in full compliance with IMCA (International Marine Contractors Association) standards, class society guidelines (DNV, ABS, IRS), and international subsea safety regulations.",
    },
    {
      question: "What types of subsea inspection and NDT services do you offer?",
      answer:
        "We provide comprehensive non-destructive testing (NDT), ultrasonic thickness gauging, magnetic particle inspection (MPI), visual dive inspections, and high-definition underwater video reporting for vessels and offshore structures.",
    },
    {
      question: "What emergency salvage and subsea response capabilities do you provide?",
      answer:
        "Our rapid-response dive team is equipped for emergency underwater salvage, caisson gate recovery, vessel hull repair, de-silting, and subsea obstacle clearing with 24/7 mobilization capability.",
    },
    {
      question: "What services do you provide for commercial offshore projects?",
      answer:
        "We offer underwater salvage, subsea pipeline & cable trenching/inspection, dock and caisson gate maintenance, hull cleaning, and certified commercial air & mixed gas diving services.",
    },
    {
      question: "How do you ensure safety during underwater operations?",
      answer:
        "Every dive plan undergoes rigorous risk assessment and JSA (Job Safety Analysis). We utilize surface-supplied diving gear, redundant breathing gas systems, surface-to-diver comms, and real-time dive monitoring.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white relative z-40 overflow-hidden text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Badge + Image with Call Us Box */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Tag / Badge: Matching About Us exact badge styling */}
            <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#001742] text-white shadow-xs shrink-0 self-start">
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
              <span className="font-roboto font-semibold text-white text-[14px] tracking-normal">
                FAQs
              </span>
            </div>

            {/* Image Container */}
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:flex-1 w-full bg-slate-900 min-h-[360px] sm:min-h-[440px]">
              <Image
                src="/images/home-faq-img.png"
                alt="Diver underwater with stingray"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00173e]/60 via-transparent to-transparent" />

              {/* Call Us Now Overlay Box */}
              <div className="absolute bottom-6 left-6 bg-[#00173e]/85 backdrop-blur-md px-5 py-3.5 rounded-[20px] border border-white/15 shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#20c9d2] text-[#002365] flex items-center justify-center shrink-0 shadow-lg">
                  <PhoneCall className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-white text-sm sm:text-base leading-tight">
                    Call Us Now!
                  </p>
                  <p className="font-roboto text-cyan-200 text-xs sm:text-sm tracking-wide mt-0.5">
                    +123 – 456 – 7890
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading + Accordion List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <h2 className="font-poppins font-bold text-[#001742] text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight tracking-tight">
              Frequently Asked <br className="hidden sm:inline" />
              Questions
            </h2>

            {/* Accordion List with Border Dividers */}
            <div className="divide-y divide-slate-200 pt-2 border-t border-slate-200 flex-1 flex flex-col justify-between">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="py-4 first:pt-2 last:pb-0">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left flex items-center gap-4 group cursor-pointer focus:outline-none"
                    >
                      <span className="text-[#1e66f5] text-xl font-light w-5 shrink-0 text-center select-none">
                        {isOpen ? "—" : "+"}
                      </span>
                      <span className="font-roboto text-base sm:text-lg text-[#001742] group-hover:text-[#1e66f5] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pl-9 pt-3 text-slate-500 text-xs sm:text-sm font-roboto leading-relaxed max-w-xl">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
