"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OceanBubbles from "@/components/OceanBubbles";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Sparkles,
  Video,
  Flame,
  Building2,
  Search,
  MapPin,
  FileText,
  PhoneCall,
  Send,
  X,
  Award,
  Waves,
  Compass,
  Users,
  Radio,
  HardHat,
  Anchor,
  Activity,
  Layers,
  ChevronRight,
  Shield,
  Clock,
  Briefcase,
  Phone
} from "lucide-react";

export default function AirDivingPage() {
  const [hseModalOpen, setHseModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    waterDepth: "",
    serviceType: "Underwater Inspection",
    requirementDetails: "",
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setQuoteModalOpen(false);
      setQuoteData({
        name: "",
        email: "",
        phone: "",
        location: "",
        waterDepth: "",
        serviceType: "Underwater Inspection",
        requirementDetails: "",
      });
    }, 4000);
  };

  const scrollToQuoteForm = () => {
    const el = document.getElementById("quote-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setQuoteModalOpen(true);
    }
  };

  // Section 3: Our Air Diving Services (What We Can Do)
  const servicesList = [
    {
      title: "Underwater Inspection",
      description: "Inspection of vessels, docks, gates, pipelines and underwater structures.",
      icon: Search,
      badge: "High Precision",
      image: "/assets/home-air-diving-card.png"
    },
    {
      title: "Repair and Maintenance",
      description: "Underwater repair and maintenance for marine and industrial sites.",
      icon: Wrench,
      badge: "Industrial Standard",
      image: "/assets/home-cable-repair-and-protection.jpg"
    },
    {
      title: "Cleaning and Desilting",
      description: "Cleaning of hulls, sea chests, intake wells, docks and underwater areas.",
      icon: Sparkles,
      badge: "Marine & Heavy Duty",
      image: "/assets/home-dock-and-gate-operation.jpg"
    },
    {
      title: "Underwater Construction",
      description: "Support for drilling, fixing, installation, grouting and structural work.",
      icon: Building2,
      badge: "Heavy Subsea",
      image: "/assets/contact_diver_panel.png"
    },
    {
      title: "Cutting and Welding",
      description: "Underwater cutting and welding for repair, removal and recovery work.",
      icon: Flame,
      badge: "Certified Divers",
      image: "/assets/home-under-water-savage.jpg"
    },
    {
      title: "Underwater Video Survey",
      description: "Photography and video recording for inspection and project reports.",
      icon: Video,
      badge: "CCTV & HD Data",
      image: "/assets/home-about-us.jpg"
    },
  ];

  // Section 4: Where We Work (Air Diving Applications)
  const applications = [
    { name: "Ports and harbours", category: "Marine Infrastructure", icon: Anchor },
    { name: "Docks and dry docks", category: "Shipyards & Docks", icon: Layers },
    { name: "Ships and marine vessels", category: "Vessels & Fleets", icon: Waves },
    { name: "Dams and reservoirs", category: "Civil Water Bodies", icon: Activity },
    { name: "Intake wells and pump houses", category: "Industrial Intake", icon: Building2 },
    { name: "Rivers and lakes", category: "Inland Waterways", icon: Compass },
    { name: "Bridges and marine structures", category: "Civil Engineering", icon: HardHat },
    { name: "Pipelines and underwater cables", category: "Energy & Telecom", icon: Wrench },
    { name: "Industrial water systems", category: "Factories & Plants", icon: Shield },
    { name: "Offshore support locations", category: "Offshore Fields", icon: MapPin },
  ];

  // Section 5: Our Capabilities
  const capabilitiesList = [
    { name: "Commercial divers", desc: "Certified & IMCA/HSE compliant air divers", icon: Users },
    { name: "Diving supervisors", desc: "Experienced divemasters & surface supervisors", icon: Award },
    { name: "Diving equipment", desc: "Surface-supplied air panels & certified gear", icon: HardHat },
    { name: "Communication systems", desc: "Two-way live diver voice communication", icon: Radio },
    { name: "Underwater tools", desc: "Hydraulic, pneumatic & specialized tools", icon: Wrench },
    { name: "Video and inspection equipment", desc: "CCTV systems & underwater lighting", icon: Video },
    { name: "Marine crew", desc: "Trained deckhands, launch operators & riggers", icon: Anchor },
    { name: "Boat or vessel support", desc: "Workboats, support craft & dive platforms", icon: Waves },
    { name: "Project supervision", desc: "End-to-end site safety & technical execution", icon: ShieldCheck },
  ];

  // Section 6: Our Working Process
  const workingProcess = [
    {
      step: "01",
      title: "Site Review",
      desc: "We understand the location, water depth and work requirement.",
      icon: Search,
    },
    {
      step: "02",
      title: "Job Planning",
      desc: "We prepare the diving team, equipment and work method.",
      icon: Briefcase,
    },
    {
      step: "03",
      title: "Safety Check",
      desc: "All risks and equipment are checked before the dive begins.",
      icon: ShieldCheck,
    },
    {
      step: "04",
      title: "Diving Operation",
      desc: "The work is completed under proper supervision and communication.",
      icon: Activity,
    },
    {
      step: "05",
      title: "Final Review",
      desc: "We review the completed work and share the required project records.",
      icon: CheckCircle2,
    },
  ];

  // Section 8: Air Diving Project Experience
  const projectExperienceList = [
    "Intake-well inspection and repair",
    "Dock-gate installation",
    "Underwater desilting",
    "Vessel inspection",
    "Cable repair and protection",
    "Pontoon and anchor recovery",
    "Underwater drilling",
    "Cutting and welding",
    "Port and harbour maintenance",
  ];

  return (
    <div className="min-h-screen bg-[#002365] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO SECTION - SINGLE FOLD (100VH) */}
      <section id="hero" className="relative h-screen min-h-[650px] w-full flex flex-col justify-center overflow-hidden bg-[#031027]">
        {/* Background Image - NO OVERLAY AS REQUESTED */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/air-diving/air-diving-hero-img.png"
            alt="Air Diving Services Hero"
            fill
            className="object-cover object-center lg:object-right"
            priority
          />
        </div>

        {/* Dotted Wave Grid - Bottom Left Area */}
        <div className="absolute bottom-0 left-0 w-[550px] sm:w-[720px] h-[160px] sm:h-[190px] pointer-events-none z-0 overflow-hidden opacity-80">
          <svg width="100%" height="100%" viewBox="0 0 720 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dotGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0077ff" stopOpacity="0.9" />
                <stop offset="45%" stopColor="#00d2ff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0055ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {Array.from({ length: 14 }).map((_, rowIndex) => (
              <g key={rowIndex}>
                {Array.from({ length: 48 }).map((_, colIndex) => {
                  const x = colIndex * 15;
                  const baseY = 175 - rowIndex * 10;
                  const waveY = baseY - Math.sin(colIndex * 0.12 + rowIndex * 0.08) * 14 - (rowIndex * 2.5);
                  const opacity = Math.max(0, (1 - colIndex / 48) * (1 - rowIndex / 16));
                  const size = 1.1 + (rowIndex % 3 === 0 ? 0.7 : 0);
                  return (
                    <circle
                      key={colIndex}
                      cx={x}
                      cy={waveY}
                      r={size}
                      fill="url(#dotGradient)"
                      opacity={opacity}
                    />
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        {/* Content Container (Left Aligned - Vertically Centered inside 100vh) */}
        <div className="max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10 flex-1 flex flex-col justify-center pt-24 sm:pt-28 pb-12">
          <div className="max-w-[540px] text-left space-y-6 sm:space-y-7">
            
            {/* Small Heading / Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0b2046] border border-white/10 shadow-sm">
              <span className="font-poppins font-bold text-[#8fb5f5] text-xs sm:text-[13px] tracking-wider uppercase">
                AIR DIVING SERVICES
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight">
              <span className="text-white block">Safe and Reliable</span>
              <span className="text-[#a0c7ff] block">Diving Support</span>
            </h1>

            {/* Description */}
            <p className="font-roboto font-normal text-[#b4c8e6] text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-[490px]">
              We provide air diving services for inspection, repair, cleaning, maintenance and underwater construction work.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={scrollToQuoteForm}
                className="inline-flex items-center gap-3.5 bg-white hover:bg-slate-100 text-[#071939] font-poppins font-bold text-sm sm:text-[15px] pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-[1.02]"
              >
                <span>Request a Quote</span>
                <div className="w-9 h-9 rounded-full bg-[#081c40] flex items-center justify-center text-white shrink-0">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              <Link
                href="/?preview=true#contact"
                className="inline-flex items-center gap-3.5 bg-transparent hover:bg-white/5 border border-white/80 hover:border-white text-white font-poppins font-semibold text-sm sm:text-[15px] pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              >
                <span>Contact Us</span>
                <div className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-white shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <OceanBubbles startAfterHero={true} />

      {/* SECTION 2: WHAT IS AIR DIVING? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f5f8fc] relative overflow-hidden text-slate-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Left Column: Diver Image (Height slightly reduced) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl w-full h-[380px] sm:h-[430px] lg:h-[470px] max-w-[520px] mx-auto">
                <Image
                  src="/images/services/air-diving/what-is-air-diving-service-img.png"
                  alt="What Is Air Diving"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Content & 3 Feature Cards (Matching Image Height) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full py-1 space-y-6 lg:space-y-0">
              
              {/* Top Wave Icon Accent & Heading */}
              <div>
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                  <path d="M2 4C4 1.5 6 1.5 8 4C10 6.5 12 6.5 14 4C16 1.5 18 1.5 20 4C22 6.5 24 6.5 26 4" stroke="#0055ff" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M2 9C4 6.5 6 6.5 8 9C10 11.5 12 11.5 14 9C16 6.5 18 6.5 20 9C22 11.5 24 11.5 26 9" stroke="#0055ff" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                
                {/* Heading */}
                <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#081836] tracking-tight leading-tight">
                  What Is Air Diving?
                </h2>
                
                {/* Accent Short Bar */}
                <div className="w-12 h-[3.5px] bg-[#0055ff] rounded-full mt-2.5 mb-4" />
              </div>

              {/* Paragraphs */}
              <div className="space-y-3 font-roboto font-normal text-[#4a5568] text-sm sm:text-base lg:text-[15px] leading-relaxed max-w-xl">
                <p>Air diving is used for underwater work at safe working depths.</p>
                <p>Ocean 9 provides trained divers, diving equipment and surface support for offshore and onshore projects.</p>
                <p>Our team plans each job based on the site, water conditions and client requirements.</p>
              </div>

              {/* 3 Bottom Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl pt-2">
                
                {/* Card 1: Trained Divers */}
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100/80 flex flex-col items-center justify-center text-center space-y-2.5 transition-all hover:shadow-md">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0038b8] flex items-center justify-center text-white shrink-0 shadow-md p-2.5">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/services/air-diving/diver-new.png"
                        alt="Trained Divers"
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span className="font-poppins font-bold text-[#081836] text-xs sm:text-[13px] leading-tight">
                    Trained<br />Divers
                  </span>
                </div>

                {/* Card 2: Advanced Equipment */}
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100/80 flex flex-col items-center justify-center text-center space-y-2.5 transition-all hover:shadow-md">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0038b8] flex items-center justify-center text-white shrink-0 shadow-md p-2.5">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/services/air-diving/cylinder.png"
                        alt="Advanced Equipment"
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span className="font-poppins font-bold text-[#081836] text-xs sm:text-[13px] leading-tight">
                    Advanced<br />Equipment
                  </span>
                </div>

                {/* Card 3: Surface Support */}
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100/80 flex flex-col items-center justify-center text-center space-y-2.5 transition-all hover:shadow-md">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0038b8] flex items-center justify-center text-white shrink-0 shadow-md p-2.5">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/services/air-diving/cruise.png"
                        alt="Surface Support"
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span className="font-poppins font-bold text-[#081836] text-xs sm:text-[13px] leading-tight">
                    Surface<br />Support
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUR AIR DIVING SERVICES */}
      <section className="py-16 sm:py-24 bg-[#002365] relative overflow-hidden text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#001d54] border border-[#205b9e] text-[#20c9d2] text-xs font-semibold uppercase tracking-wider">
              Scope of Operations
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              What We Can Do
            </h2>
            <p className="font-roboto text-slate-200 text-base sm:text-lg">
              Comprehensive underwater air diving capabilities tailored for marine, industrial, civil, and offshore requirements.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#001947] hover:bg-[#002463] border border-white/10 hover:border-cyan-400/40 rounded-[24px] overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Top Thumbnail */}
                  <div className="relative h-[180px] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#002365]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-cyan-300 text-xs font-medium">
                      {service.badge}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-poppins font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="font-roboto text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={scrollToQuoteForm}
                        className="inline-flex items-center gap-2 text-xs font-dm-sans font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>Request Service Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footnote Banner */}
          <div className="mt-12 bg-[#001742] border border-[#205b9e]/60 rounded-2xl p-5 text-center shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            <p className="font-roboto text-sm text-slate-200">
              These services are part of Ocean 9’s recorded work across ports, docks, vessels, intake wells and infrastructure projects.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHERE WE WORK (Air Diving Applications) */}
      <section className="py-16 sm:py-24 bg-[#001d54] relative overflow-hidden text-white border-t border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#002365] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              Operational Locations
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Air Diving Applications
            </h2>
            <p className="font-roboto text-slate-200 text-base sm:text-lg">
              We deploy mobile air diving spreads across a broad variety of marine, coastal, inland, and industrial working locations.
            </p>
          </div>

          {/* 10 Applications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {applications.map((app, index) => {
              const AppIcon = app.icon;
              return (
                <div
                  key={index}
                  className="bg-[#002365] hover:bg-[#002d75] border border-white/10 hover:border-cyan-400/50 p-5 rounded-2xl shadow-md transition-all duration-300 group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <AppIcon className="w-5 h-5" />
                    </div>
                    <span className="font-poppins text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-roboto text-cyan-300/80 font-medium block mb-1">
                      {app.category}
                    </span>
                    <h3 className="font-poppins font-semibold text-white text-base leading-snug group-hover:text-cyan-200 transition-colors">
                      {app.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: OUR CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-[#002365] relative overflow-hidden text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#001d54] border border-[#205b9e] text-[#20c9d2] text-xs font-semibold uppercase tracking-wider">
                End-to-End Capabilities
              </div>

              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Complete Diving Support
              </h2>

              <p className="font-roboto text-slate-200 text-base sm:text-lg leading-relaxed">
                We can provide the team and equipment required for the complete diving operation.
              </p>

              <div className="bg-[#001947] border border-cyan-500/20 p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-poppins font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Turnkey Air Diving Spreads</span>
                </div>
                <p className="font-roboto text-xs text-slate-300 leading-relaxed">
                  Our spreads are completely mobile and self-contained, allowing rapid mobilization to onshore ports, pump houses, vessels, dams, or offshore support vessels.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToQuoteForm}
                  className="inline-flex items-center gap-3 bg-[#0055ff] hover:bg-[#0042cb] text-white font-dm-sans font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-lg cursor-pointer"
                >
                  <span>Mobilize A Diving Spread</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Capabilities Grid */}
            <div className="lg:col-span-7">
              <div className="bg-[#001947] border border-white/10 rounded-[28px] p-6 sm:p-8 shadow-2xl space-y-6">
                <h3 className="font-poppins font-bold text-xl text-white border-b border-white/10 pb-4">
                  Our support may include:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {capabilitiesList.map((cap, idx) => {
                    const CapIcon = cap.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-[#002463] border border-white/10 hover:border-cyan-400/40 p-4 rounded-xl flex flex-col justify-between space-y-2 transition-all hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-2 text-cyan-400">
                          <CapIcon className="w-4 h-4 shrink-0" />
                          <span className="font-poppins font-bold text-white text-sm">{cap.name}</span>
                        </div>
                        <p className="font-roboto text-slate-300 text-xs">
                          {cap.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: OUR WORKING PROCESS */}
      <section className="py-16 sm:py-24 bg-[#001742] relative overflow-hidden text-white border-t border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#002365] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              Step-by-Step Workflow
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              How We Work
            </h2>
            <p className="font-roboto text-slate-200 text-base sm:text-lg">
              Structured operational methodology ensuring safe, transparent, and efficient subsea execution.
            </p>
          </div>

          {/* 5 Step Timeline / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {workingProcess.map((proc, index) => {
              const ProcIcon = proc.icon;
              return (
                <div
                  key={index}
                  className="bg-[#002365] border border-white/10 hover:border-cyan-400/50 rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-poppins font-extrabold text-sm flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      {proc.step}
                    </span>
                    <ProcIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-poppins font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {proc.title}
                    </h3>
                    <p className="font-roboto text-slate-300 text-xs leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-roboto text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Protocol</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7: SAFETY FIRST */}
      <section className="py-16 sm:py-24 bg-[#002365] relative overflow-hidden text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-[#001742] via-[#00215b] to-[#001947] border border-cyan-500/30 rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-6">
                {/* Small Heading */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Safe Operations</span>
                </div>

                {/* Heading */}
                <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  Every Dive Is Carefully Planned
                </h2>

                {/* Content */}
                <div className="space-y-4 font-roboto text-slate-200 text-base sm:text-lg leading-relaxed">
                  <p className="font-semibold text-white text-lg sm:text-xl">
                    Safety is our first priority during every diving operation.
                  </p>
                  <p>
                    Our team checks the site, equipment, communication system and emergency plan before starting work.
                  </p>
                  <p>
                    We follow project procedures and recognised diving practices throughout the operation.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setHseModalOpen(true)}
                    className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-dm-sans font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-[0_10px_25px_rgba(16,185,129,0.3)] cursor-pointer"
                  >
                    <FileText className="w-5 h-5" />
                    <span>View Our HSE Policy</span>
                  </button>
                </div>
              </div>

              {/* Right Safety Badge Display */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center space-y-4 max-w-sm w-full">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-white">Zero Accident Commitment</h3>
                  <p className="font-roboto text-xs text-slate-300">
                    Continuous gas monitoring, certified bail-out systems, dive logs, and emergency protocols strictly maintained on every site.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: PROJECT EXPERIENCE */}
      <section className="py-16 sm:py-24 bg-[#001d54] relative overflow-hidden text-white border-t border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002365] border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                Proven Track Record
              </div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Air Diving Project Experience
              </h2>
              <p className="font-roboto text-slate-200 text-base sm:text-lg">
                Our team has supported air diving work across major industrial, infrastructure, marine, and subsea projects.
              </p>
            </div>

            <div>
              <Link
                href="/?preview=true#projects"
                className="inline-flex items-center gap-3 bg-[#0055ff] hover:bg-[#0042cb] text-white font-dm-sans font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
              >
                <span>View Our Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 9 Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectExperienceList.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#002365] hover:bg-[#002d75] border border-white/10 hover:border-cyan-400/40 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base group-hover:text-cyan-300 transition-colors">
                  {exp}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: FINAL CTA & QUOTE REQUEST */}
      <section id="quote-section" className="py-16 sm:py-24 bg-[#002365] relative text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left CTA Info Box */}
            <div className="lg:col-span-5 bg-[#001742] border border-white/10 rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002d75] border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                  Need Air Diving Support?
                </div>
                <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
                  Tell Us About Your Project
                </h2>
                <p className="font-roboto text-slate-300 text-base sm:text-lg leading-relaxed">
                  Share the location, water depth and work requirement with our team. We will suggest the right diving support.
                </p>
              </div>

              {/* Direct Quick Contact Info */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-slate-200">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-roboto text-xs text-slate-400">Direct Support Hotline</div>
                    <div className="font-poppins font-bold text-white text-base">+91 9320168056 / 022-27701886</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-200">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-roboto text-xs text-slate-400">Official Email</div>
                    <div className="font-poppins font-bold text-white text-base">info@ocean9offshoreservices.com</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={scrollToQuoteForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0055ff] hover:bg-[#0042cb] text-white font-dm-sans font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919320168056"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-dm-sans font-semibold text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer"
                >
                  <span>Speak With Our Team</span>
                </a>
              </div>
            </div>

            {/* Right Quote Request Form Container */}
            <div className="lg:col-span-7 bg-[#e6f3fe] rounded-[28px] p-8 sm:p-10 lg:p-12 text-slate-900 shadow-2xl flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-[#002365] mb-2">
                  Air Diving Quotation Request
                </h3>
                <p className="font-roboto text-slate-600 text-sm">
                  Fill in your project specifications below for a rapid response from our diving operations manager.
                </p>
              </div>

              {quoteSubmitted ? (
                <div className="bg-emerald-100 border border-emerald-400 text-emerald-950 p-8 rounded-2xl text-center space-y-3 my-auto shadow-md">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-poppins font-bold text-xl">Quote Request Received!</h4>
                  <p className="font-roboto text-sm max-w-md mx-auto">
                    Thank you. Our diving supervisors are analyzing your location and depth parameters. We will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-roboto font-semibold text-[#002365] text-xs uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={quoteData.name}
                        onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-roboto font-semibold text-[#002365] text-xs uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={quoteData.email}
                        onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-roboto font-semibold text-[#002365] text-xs uppercase tracking-wider block">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-roboto font-semibold text-[#002365] text-xs uppercase tracking-wider block">
                        Project Service Type
                      </label>
                      <select
                        value={quoteData.serviceType}
                        onChange={(e) => setQuoteData({ ...quoteData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff]"
                      >
                        <option value="Underwater Inspection">Underwater Inspection</option>
                        <option value="Repair and Maintenance">Repair and Maintenance</option>
                        <option value="Cleaning and Desilting">Cleaning and Desilting</option>
                        <option value="Underwater Construction">Underwater Construction</option>
                        <option value="Cutting and Welding">Cutting and Welding</option>
                        <option value="Underwater Video Survey">Underwater Video Survey</option>
                        <option value="Other Air Diving Support">Other Air Diving Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-roboto font-semibold text-[#002365] text-xs uppercase tracking-wider block">
                        Work Location (Site/Port) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai Port, Dam Site, Intake Well"
                        value={quoteData.location}
                        onChange={(e) => setQuoteData({ ...quoteData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-roboto font-semibold text-[#002365] text-xs uppercase tracking-wider block">
                        Estimated Water Depth (Meters/Feet)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 12 meters / 40 feet"
                        value={quoteData.waterDepth}
                        onChange={(e) => setQuoteData({ ...quoteData, waterDepth: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-roboto font-semibold text-[#002365] text-xs uppercase tracking-wider block">
                      Work Requirements & Additional Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify task requirements, water conditions, vessel details or schedule..."
                      value={quoteData.requirementDetails}
                      onChange={(e) => setQuoteData({ ...quoteData, requirementDetails: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#002365] hover:bg-[#001742] text-white font-dm-sans font-bold text-base py-4 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Quotation Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* HSE POLICY MODAL */}
      {hseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#001947] border border-cyan-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 text-white relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setHseModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <div>
                <h3 className="font-poppins font-bold text-xl text-white">Ocean 9 HSE Policy Statement</h3>
                <p className="font-roboto text-xs text-emerald-300">Health, Safety & Environment Standards</p>
              </div>
            </div>

            <div className="space-y-4 font-roboto text-sm text-slate-200 leading-relaxed">
              <p>
                At Ocean 9 Offshore Services, Health, Safety, and Environmental (HSE) management is fundamental to all subsea air diving operations.
              </p>

              <div className="space-y-2 bg-[#002365] p-4 rounded-xl border border-white/10">
                <div className="font-poppins font-bold text-white text-sm">Key Safety Directives:</div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
                  <li>Mandatory pre-dive risk assessments and Toolbox Talks prior to every dive.</li>
                  <li>Continuous 2-way audio communication and real-time surface video monitoring.</li>
                  <li>Certified surface-supplied air panels with independent reserve cylinder systems.</li>
                  <li>Full compliance with recognised commercial diving practices and client safety specs.</li>
                  <li>Comprehensive emergency response plans and trained stand-by diver readiness.</li>
                </ul>
              </div>

              <p className="text-xs text-slate-400 italic">
                Our objective is zero accidents, zero injuries, and zero environmental damage across every onshore and offshore project location.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setHseModalOpen(false)}
                className="bg-[#0055ff] hover:bg-[#0042cb] text-white font-dm-sans font-bold text-xs px-6 py-3 rounded-full transition-all"
              >
                Close Policy Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
