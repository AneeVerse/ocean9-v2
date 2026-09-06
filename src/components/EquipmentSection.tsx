"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface EquipmentItem {
  id: number;
  sequenceNumber: number;
  filename: string;
  src: string;
  title: string;
  category: string;
}

export const equipmentList: EquipmentItem[] = [
  {
    id: 1,
    sequenceNumber: 1,
    filename: "1.jpg",
    src: "/images/equipment/1.jpg",
    title: "Commercial Diving Container Unit",
    category: "Offshore Equipment",
  },
  {
    id: 2,
    sequenceNumber: 2,
    filename: "2.jpg",
    src: "/images/equipment/2.jpg",
    title: "Chamber Interior Piping & Valves",
    category: "Diver Life Support",
  },
  {
    id: 3,
    sequenceNumber: 3,
    filename: "imgi_6_3.jpg",
    src: "/images/equipment/imgi_6_3.jpg",
    title: "Containerized Compressor System",
    category: "Air Diving Systems",
  },
  {
    id: 4,
    sequenceNumber: 4,
    filename: "imgi_7_4.jpg",
    src: "/images/equipment/imgi_7_4.jpg",
    title: "Gas Cylinder Quad Bank",
    category: "Diver Life Support",
  },
  {
    id: 5,
    sequenceNumber: 5,
    filename: "imgi_8_5.jpg",
    src: "/images/equipment/imgi_8_5.jpg",
    title: "Dive Control & Pressure Console",
    category: "Monitoring & Communication",
  },
  {
    id: 6,
    sequenceNumber: 6,
    filename: "imgi_9_6.jpg",
    src: "/images/equipment/imgi_9_6.jpg",
    title: "Chamber Control Station",
    category: "Offshore Air Diving/Mix Gas",
  },
  {
    id: 7,
    sequenceNumber: 7,
    filename: "imgi_10_7.jpg",
    src: "/images/equipment/imgi_10_7.jpg",
    title: "Deck Decompression Chamber (DDC)",
    category: "Offshore Air Diving/Mix Gas",
  },
  {
    id: 8,
    sequenceNumber: 8,
    filename: "imgi_11_8.jpg",
    src: "/images/equipment/imgi_11_8.jpg",
    title: "Air Distribution Control Panel",
    category: "Diver Life Support",
  },
  {
    id: 9,
    sequenceNumber: 9,
    filename: "imgi_12_9.jpg",
    src: "/images/equipment/imgi_12_9.jpg",
    title: "Horizontal Hyperbaric Skid Unit",
    category: "Offshore Air Diving/Mix Gas",
  },
  {
    id: 10,
    sequenceNumber: 10,
    filename: "imgi_13_10.jpg",
    src: "/images/equipment/imgi_13_10.jpg",
    title: "Launch & Recovery System (LARS) - Blue Frame",
    category: "Offshore Air Diving/Mix Gas",
  },
  {
    id: 11,
    sequenceNumber: 11,
    filename: "imgi_14_11.jpg",
    src: "/images/equipment/imgi_14_11.jpg",
    title: "Launch & Recovery System (LARS) - Red Frame",
    category: "Offshore Air Diving/Mix Gas",
  },
  {
    id: 12,
    sequenceNumber: 12,
    filename: "imgi_15_12.jpg",
    src: "/images/equipment/imgi_15_12.jpg",
    title: "Underwater Cutting & Welding Torch Stinger",
    category: "Underwater Tools & Consumables",
  },
  {
    id: 13,
    sequenceNumber: 13,
    filename: "imgi_16_13.jpg",
    src: "/images/equipment/imgi_16_13.jpg",
    title: "Diver Fins & Propulsion Gear",
    category: "Diver Life Support & Gear",
  },
  {
    id: 14,
    sequenceNumber: 14,
    filename: "imgi_17_14.jpg",
    src: "/images/equipment/imgi_17_14.jpg",
    title: "Commercial Diving Helmet Setup",
    category: "Diver Life Support & Gear",
  },
  {
    id: 15,
    sequenceNumber: 15,
    filename: "imgi_18_15.jpg",
    src: "/images/equipment/imgi_18_15.jpg",
    title: "Commercial Diving Helmet & Communications",
    category: "Diver Life Support & Gear",
  },
  {
    id: 16,
    sequenceNumber: 16,
    filename: "imgi_19_16.jpg",
    src: "/images/equipment/imgi_19_16.jpg",
    title: "Underwater Consumables & Accessories",
    category: "Underwater Tools & Consumables",
  },
  {
    id: 17,
    sequenceNumber: 17,
    filename: "imgi_20_17.jpg",
    src: "/images/equipment/imgi_20_17.jpg",
    title: "Subsea Tool Assembly",
    category: "Underwater Tools & Consumables",
  },
  {
    id: 18,
    sequenceNumber: 18,
    filename: "imgi_21_18.jpg",
    src: "/images/equipment/imgi_21_18.jpg",
    title: "Underwater Welding Electrodes Pack",
    category: "Underwater Tools & Consumables",
  },
  {
    id: 19,
    sequenceNumber: 19,
    filename: "imgi_22_19.jpg",
    src: "/images/equipment/imgi_22_19.jpg",
    title: "Underwater Cutting Rods & Accessories",
    category: "Underwater Tools & Consumables",
  },
  {
    id: 20,
    sequenceNumber: 20,
    filename: "imgi_23_20.jpg",
    src: "/images/equipment/imgi_23_20.jpg",
    title: "Subsea Rigging & Heavy Deployment Gear",
    category: "Underwater Tools",
  },
];

export default function EquipmentSection() {
  return (
    <div className="bg-white text-slate-900">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Layout: Left = 3-Column Image Grid, Right = Screenshot Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* ================= LEFT COLUMN: EQUIPMENT TITLE + 3-COLUMN NON-CLICKABLE IMAGE GRID ================= */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Header: EQUIPMENT matching theme navy color #001742 */}
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-[#001742] uppercase tracking-wider mb-6 sm:mb-8">
              EQUIPMENT
            </h1>

            {/* 3-Column Image Grid: Non-clickable with native image borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
              {equipmentList.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[202/129] w-full overflow-hidden select-none pointer-events-none"
                  title={`#${item.sequenceNumber}: ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: GIVEN TEXT IN SCREENSHOT ================= */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28 space-y-6 pt-2 lg:pt-0">
            {/* Top Introductory Paragraph (Exact copy from screenshot) */}
            <p className="font-roboto text-slate-800 text-[15px] sm:text-[16px] leading-relaxed">
              We specialize in providing high-grade commercial and offshore underwater diving equipment designed to meet rigorous industry safety standards. Whether you need individual diving accessories or full offshore launch systems, we supply reliable solutions tailored to your operational requirements.
            </p>

            {/* Portfolio Heading (Exact copy from screenshot) */}
            <h2 className="font-poppins font-bold text-xl sm:text-2xl text-slate-950 leading-snug pt-1">
              Our Core Product &amp; Equipment Portfolio
            </h2>

            {/* Portfolio Bullet List (Exact copy and bullet format from screenshot) */}
            <ul className="space-y-4 font-roboto text-slate-800 text-[14.5px] sm:text-[15.5px] leading-relaxed list-none pl-0">
              <li className="flex items-start gap-2.5">
                <span className="text-slate-900 font-bold text-lg leading-none mt-0.5">•</span>
                <div>
                  <span className="font-bold text-slate-950">Diver Life Support &amp; Gear:</span>{" "}
                  1st &amp; 2nd Stage Regulators, Complete Scuba Sets, BCD Suits and Diver Diving Panels etc.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-slate-900 font-bold text-lg leading-none mt-0.5">•</span>
                <div>
                  <span className="font-bold text-slate-950">Underwater Tools &amp; Consumables:</span>{" "}
                  Underwater Cutting &amp; Welding Systems, specialized cutting rods, and high-performance underwater welding electrodes etc.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-slate-900 font-bold text-lg leading-none mt-0.5">•</span>
                <div>
                  <span className="font-bold text-slate-950">Monitoring &amp; Communication:</span>{" "}
                  2-Way Diver Communication Systems, SRP Dive Systems, and high-intensity underwater cameras with lighting setups.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-slate-900 font-bold text-lg leading-none mt-0.5">•</span>
                <div>
                  <span className="font-bold text-slate-950">Offshore Air Diving/Mix Gas Systems:</span>{" "}
                  Launch &amp; Recovery Systems (LARS) and Deck Decompression Chambers (DDC) fully compliant with international diving standards (IMCA).
                </div>
              </li>
            </ul>

            {/* Contact Inquiry CTA Button */}
            <div className="pt-4 border-t border-slate-200">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#003D82] hover:bg-[#001742] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
              >
                <span>Inquire About Equipment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
