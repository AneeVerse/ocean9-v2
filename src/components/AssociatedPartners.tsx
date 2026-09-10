"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Handshake,
  ShieldCheck,
  CheckCircle2,
  X,
  ChevronRight,
  ChevronLeft,
  Wrench,
  Clock,
  Sparkles,
  Layers,
  Briefcase,
} from "lucide-react";

export interface AssociatedPartner {
  id: string;
  name: string;
  established: string;
  role: string;
  logo: string;
  logoAlt: string;
  tagline: string;
  summary: string;
  topExpertise: string[];
  allExpertise: string[];
  specializedProjects: string[];
  associationOverview: string;
  overviewParagraphs?: string[];
  projectsParagraph?: string;
  quote?: string;
  commitment: string;
  classificationStandard: string;
}

const allPartnersDatabase: AssociatedPartner[] = [
  {
    id: "jagat-engineers",
    name: "Jagat Engineers",
    established: "1994",
    role: "Marine & Offshore Engineering Partner",
    logo: "/assets/logos/omega-ship-management.png", // Demo logo from existing assets
    logoAlt: "Jagat Engineers Logo",
    tagline: "Marine, Offshore, Shipbuilding & Infrastructure Engineering",
    summary:
      "Established in 1994, Jagat Engineers brings decades of experience in mechanical and structural engineering, shipbuilding, ship repairs, vessel conversion, offshore engineering, marine consultancy, and related engineering works.",
    overviewParagraphs: [
      "We are proud to be associated with Jagat Engineers, an established marine and engineering company with a strong track record in delivering specialized engineering solutions across the marine, offshore, shipbuilding, and infrastructure sectors.",
      "Established in 1994, Jagat Engineers brings decades of experience in mechanical and structural engineering, shipbuilding, ship repairs, vessel conversion, offshore engineering, marine consultancy, and related engineering works. The company has successfully undertaken complex projects while working in accordance with recognized classification and industry standards.",
      "Through this association, we combine our capabilities with Jagat Engineers’ technical expertise, engineering experience, project execution capabilities, and understanding of the marine industry to provide dependable solutions for challenging onshore and offshore requirements.",
    ],
    associationOverview:
      "Through this association, we combine our capabilities with Jagat Engineers’ technical expertise, engineering experience, project execution capabilities, and understanding of the marine industry to provide dependable solutions for challenging onshore and offshore requirements.",
    topExpertise: [
      "Shipbuilding & New Construction",
      "Ship Repairs & Refurbishment",
      "Vessel Conversion & Modification",
      "Mechanical & Structural Engineering",
      "Offshore Engineering & Construction",
      "Marine Consultancy",
    ],
    allExpertise: [
      "Shipbuilding & New Construction",
      "Ship Repairs & Refurbishment",
      "Vessel Conversion & Modernization",
      "Structural Fabrication & Installation",
      "Offshore Marine Construction & Engineering",
      "Marine Piling, Jetties & Coastal Structures",
      "Machinery Overhauling & Mechanical Works",
      "Underwater & Quayside Engineering Support",
      "Naval Architecture & Marine Consultancy",
      "Project Management & Technical Supervision",
    ],
    projectsParagraph:
      "Jagat Engineers has successfully completed diverse and demanding engineering projects for government bodies, port authorities, offshore operators, and private maritime enterprises. Their commitment to quality, safety, and timely delivery has made them a trusted partner in the marine industry.",
    specializedProjects: [
      "Structural fabrication and erection",
      "Pipeline works & subsea tie-ins",
      "Vessel conversions & modification",
      "Barge construction & marine outfitting",
      "Ship repairs & refurbishment",
      "Offshore infrastructure & specialized marine engineering",
    ],
    commitment:
      "Together with Jagat Engineers, we strive to deliver integrated engineering and marine services that meet the highest standards of safety, quality, and operational excellence. By combining our strengths, we ensure comprehensive project execution—from planning and design to on-site implementation.",
    quote:
      "A strong partnership built on experience, engineering expertise, and reliable project delivery.",
    classificationStandard: "Working in accordance with recognized classification and industry standards",
  },
  {
    id: "jagat-marine-infrastructure",
    name: "Jagat Marine & Infrastructure",
    established: "1998",
    role: "Vessel Conversion & Shipbuilding Division",
    logo: "/assets/home-UD-group-logo.png",
    logoAlt: "Jagat Marine & Infrastructure Logo",
    tagline: "Specialized Marine Fabrication & Heavy Structural Works",
    summary:
      "Dedicated infrastructure and vessel conversion division handling heavy marine structural fabrication, barge builds, subsea pipeline installations, and turnkey maritime dock modifications.",
    associationOverview:
      "This alliance expands Ocean 9’s offshore construction footprint, enabling simultaneous execution of subsea diving interventions and heavy topside marine structural fabrication under unified quality and safety frameworks.",
    topExpertise: [
      "Barge & Pontoon Construction",
      "Subsea Pipeline Laying & Tie-Ins",
      "Harbor & Dock Infrastructure",
      "Heavy Structural Fabrication",
      "Marine Crane & Gate Modifications",
      "Turnkey Shipyard Overhauls",
    ],
    allExpertise: [
      "Barge & Pontoon Construction",
      "Subsea Pipeline Laying & Tie-Ins",
      "Harbor & Dock Infrastructure",
      "Heavy Structural Fabrication",
      "Marine Crane & Gate Modifications",
      "Turnkey Shipyard Overhauls",
      "Loadout & Ballasting Engineering",
      "Subsea Scour Protection",
      "Hydrodynamic Mooring Upgrades",
      "Offshore Quayside Fabrications",
    ],
    specializedProjects: [
      "Construction and delivery of 2,500-ton cargo deck barges",
      "Deepwater pipeline stabilization and sleeve protections",
      "Drydock gate overhaul and seal refurbishment",
      "Offshore mooring dolphin structural strengthening",
      "Heavy crane pedestal fabrication and NDT certification",
    ],
    commitment:
      "Delivering precision-engineered marine infrastructure built to withstand severe subsea conditions, backed by stringent safety standards and proven execution milestones.",
    classificationStandard: "ISO 9001:2015 & IRS / DNV-GL Certified Procedures",
  },
  {
    id: "care-marine-technical",
    name: "Care Marine Technical Services",
    established: "2004",
    role: "Offshore Marine Consultancy & Surveys",
    logo: "/assets/logos/Care-Marine-Services-Logo-1024x328.png",
    logoAlt: "Care Marine Technical Services Logo",
    tagline: "Specialized Surveys, NDT Inspections & Marine Consultancy",
    summary:
      "Providing certified marine engineering surveys, non-destructive testing (NDT), underwater salvage project management, and maritime compliance consultancy across commercial ports and offshore platforms.",
    associationOverview:
      "Collaborating on specialized marine engineering surveys, pre-purchase vessel inspections, underwater salvage feasibility studies, and marine equipment provisioning for rapid mobilization across coastal sectors.",
    topExpertise: [
      "Engineering Surveys & Inspections",
      "Subsea NDT & Structural Audits",
      "Salvage Engineering & Feasibility",
      "Project Construction Supervision",
      "Marine Equipment & Spares Sourcing",
      "Vessel Classification Certification",
    ],
    allExpertise: [
      "Engineering Surveys & Inspections",
      "Subsea NDT & Structural Audits",
      "Salvage Engineering & Feasibility",
      "Project Construction Supervision",
      "Marine Equipment & Spares Sourcing",
      "Vessel Classification Certification",
      "Ultrasonic Thickness Gauging (UTG)",
      "Hull Integrity & Condition Assessment",
      "Naval Architecture Feasibility Studies",
      "Rapid Response Salvage Logistics",
    ],
    specializedProjects: [
      "Ultrasonic subsea hull surveys for commercial container fleets",
      "Offshore jacket structural re-certification inspection",
      "Sunken vessel salvage engineering and recovery planning",
      "Harbor tugboat repowering and technical survey audits",
      "Emergency marine spares procurement for offshore vessels",
    ],
    commitment:
      "Uncompromising technical rigor in survey audits and consultancy, ensuring operational safety, regulatory compliance, and peace of mind for vessel operators and asset owners.",
    classificationStandard: "Class Approved NDT & IMCA-Aligned Diving Audits",
  },
  {
    id: "sea-geo-surveys",
    name: "Sea Geo Surveys",
    established: "2001",
    role: "Hydrographic & Geotechnical Survey Partner",
    logo: "/assets/home-sea-geo-logo.png",
    logoAlt: "Sea Geo Surveys Logo",
    tagline: "High-Resolution Bathymetry & Seabed Geophysical Mapping",
    summary:
      "Pioneers in high-precision marine hydrographic surveys, side-scan sonar subsea mapping, and geotechnical seabed investigations for port dredging, cable routing, and offshore wind installations.",
    associationOverview:
      "Ocean 9 pairs deep diving and intervention capabilities with Sea Geo’s advanced hydrographic data modeling to map underwater topography and pinpoint subsea obstacles before dive operations begin.",
    topExpertise: [
      "Multibeam Bathymetric Surveys",
      "Subsea Cable Route Feasibility",
      "Side-Scan Sonar Hazard Mapping",
      "Geotechnical Seabed Coring",
      "Pre/Post Dredge Volumetric Audits",
      "Underwater Acoustic Profiling",
    ],
    allExpertise: [
      "Multibeam Bathymetric Surveys",
      "Subsea Cable Route Feasibility",
      "Side-Scan Sonar Hazard Mapping",
      "Geotechnical Seabed Coring",
      "Pre/Post Dredge Volumetric Audits",
      "Underwater Acoustic Profiling",
      "Magnetometer Metallic Anomaly Detection",
      "Tidal & Current Hydrodynamic Modeling",
      "Sub-Bottom Acoustic Stratigraphy",
      "Coastal GIS Cartography & Mapping",
    ],
    specializedProjects: [
      "Subsea telecom cable route survey across continental shelf",
      "Port navigational channel multi-beam depth re-mapping",
      "Offshore wind turbine foundation geotechnical core sampling",
      "Anchor drag scar seabed survey and debris locating",
      "Dredging baseline bathymetry for major port expansion",
    ],
    commitment:
      "Precision subsea geodata enabling safer, faster, and cost-effective underwater engineering and diving missions.",
    classificationStandard: "IHO Order 1A Hydrographic Survey Standards",
  },
  {
    id: "mkc-marine-constructions",
    name: "MKC Marine Constructions",
    established: "1996",
    role: "Quayside & Coastal Maritime Civil Works",
    logo: "/assets/logos/MKC_Logo_registered-01-scaled.jpeg",
    logoAlt: "MKC Constructions Logo",
    tagline: "Heavy Marine Civil Engineering & Coastal Infrastructure",
    summary:
      "Specialists in heavy civil marine engineering, jetty constructions, breakwater installations, underwater piling, and coastal revetment projects across major industrial ports.",
    associationOverview:
      "Combining topside civil marine heavy machinery and underwater diving teams to execute complex quay wall repairs, underwater concrete pourings, and piling cutoff operations.",
    topExpertise: [
      "Jetty & Quay Wall Construction",
      "Subsea Piling & Pile Jackets",
      "Breakwater & Sea Revetment Works",
      "Underwater Tremie Concrete Pouring",
      "Heavy Marine Anchor Bollards",
      "Cathodic Protection Pile Encasement",
    ],
    allExpertise: [
      "Jetty & Quay Wall Construction",
      "Subsea Piling & Pile Jackets",
      "Breakwater & Sea Revetment Works",
      "Underwater Tremie Concrete Pouring",
      "Heavy Marine Anchor Bollards",
      "Cathodic Protection Pile Encasement",
      "Sheet Pile Shoring & Bracing",
      "Port Berth Deepening Civil Support",
      "Marine Fender System Turnkey Installs",
      "Coastal Riprap & Armour Rock Placement",
    ],
    specializedProjects: [
      "Deepwater commercial jetty rehabilitation and pile encasement",
      "Underwater foundation stabilization for port gantry cranes",
      "Rubble mound breakwater extension against monsoon surge",
      "Harbor basin sheet pile cofferdam construction",
      "Quayside cathodic protection retrofits and subsea welding",
    ],
    commitment:
      "Enduring civil engineering maritime assets designed to withstand harsh wave dynamics, corrosion, and extreme coastal environments.",
    classificationStandard: "ISO 9001:2015 & National Port Authority Certified",
  },
  {
    id: "noorani-shipping",
    name: "Noorani Shipping & Logistics",
    established: "2008",
    role: "Offshore Support Vessels & Towage Partner",
    logo: "/assets/logos/ns_logo.png",
    logoAlt: "Noorani Shipping Services Logo",
    tagline: "Specialized Offshore Support Vessels & Marine Logistics",
    summary:
      "Operating a modern fleet of offshore tugboats, flat-top utility barges, crew transfer vessels (CTV), and multicats providing marine towage and subsea equipment mobilization support.",
    associationOverview:
      "Provides dedicated floating support assets, crane barges, and diving spread utility vessels ensuring round-the-clock mobilization for subsea emergency response and salvage campaigns.",
    topExpertise: [
      "Offshore Tugboat & Towage Support",
      "Flat-Top Crane Barge Mobilization",
      "Crew Transfer & Supply Operations",
      "Anchor Handling & Positioning",
      "Emergency Salvage Vessel Charters",
      "Subsea Equipment Quayside Transit",
    ],
    allExpertise: [
      "Offshore Tugboat & Towage Support",
      "Flat-Top Crane Barge Mobilization",
      "Crew Transfer & Supply Operations",
      "Anchor Handling & Positioning",
      "Emergency Salvage Vessel Charters",
      "Subsea Equipment Quayside Transit",
      "Bunker & Fresh Water Offshore Delivery",
      "Vessel Mooring & Demobilization",
      "Deck Cargo Lashing & Securing",
      "Heavy Marine Lift Logistics",
    ],
    specializedProjects: [
      "Towing and dynamic positioning of 150-ton diving spread barge",
      "Emergency towage support for stranded cargo vessel in port limits",
      "Crew transfer campaigns during offshore platform shutdowns",
      "Deployment and retrieval of 10-ton subsea anchor blocks",
      "Harbor lighterage and heavy machinery quayside logistics",
    ],
    commitment:
      "Rapid maritime mobilization, seaworthy fleet readiness, and seamless offshore logistical support.",
    classificationStandard: "Merchant Shipping Act & SOLAS Compliant Operations",
  },
  {
    id: "paramount-cables",
    name: "Paramount Subsea Systems",
    established: "1995",
    role: "Subsea Cabling & Electrical Systems Partner",
    logo: "/assets/home-paramount-logo-removebg-preview.png",
    logoAlt: "Paramount Wires & Cables Logo",
    tagline: "Underwater High-Voltage Cabling & Umbilical Technologies",
    summary:
      "Industry pioneers manufacturing and engineering submarine power cables, subsea optical communications fiber, and diver umbilical systems for offshore energy and coastal grids.",
    associationOverview:
      "Ocean 9 performs underwater trenching, burial, clamping, and subsea cable jointing in close partnership with Paramount’s electrical engineering and technical testing divisions.",
    topExpertise: [
      "Subsea Power Cable Engineering",
      "Optical Subsea Fiber Networks",
      "Underwater Jointing & Splicing",
      "Subsea Cable Armor & Articulated Pipes",
      "Diver Umbilical Cable Systems",
      "High-Voltage Subsea Insulation Testing",
    ],
    allExpertise: [
      "Subsea Power Cable Engineering",
      "Optical Subsea Fiber Networks",
      "Underwater Jointing & Splicing",
      "Subsea Cable Armor & Articulated Pipes",
      "Diver Umbilical Cable Systems",
      "High-Voltage Subsea Insulation Testing",
      "Pre-Lay Grapnel Run (PLGR) Technical Specs",
      "Shore-End Cable Landing Hardware",
      "Subsea Splice Protection Chambers",
      "Dynamic Umbilical Fatigue Resistance",
    ],
    specializedProjects: [
      "Island grid interconnection submarine power cable deployment",
      "Deepwater fiber optic cable shoreline landing protection",
      "Turnkey diver life-support umbilical assembly and certification",
      "Subsea pipeline cathodic cable tie-ins and test points",
      "Articulated split-pipe cable protection over rocky sea floors",
    ],
    commitment:
      "Uncompromising reliability in subsea power and data transmission engineered for continuous high-pressure underwater lifespans.",
    classificationStandard: "CIGRE, IEC 60840 & IEEE Certified Submarine Systems",
  },
];

// Active partners list - currently displaying only Jagat Engineers per user instruction.
// The system automatically responds when more partners are added to this array:
// - 1 partner: No logo tabs above; main card features rich overview, undertakings & expertise.
// - 2 or 3 partners: Logo tabs displayed centered above; main card is concise.
// - 4 partners: Logo tabs stretch across full width; main card is concise.
// - > 4 partners: Continuous carousel with Partner counter & next/previous controls.
const partnersList: AssociatedPartner[] = [
  allPartnersDatabase[0], // Jagat Engineers
];

const COPIES = 5;
const BASE_OFFSET = partnersList.length > 4 ? partnersList.length * 2 : 0;

export default function AssociatedPartners() {
  const [offsetIndex, setOffsetIndex] = useState(BASE_OFFSET);
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [stepWidth, setStepWidth] = useState(0);
  const [selectedPartnerForModal, setSelectedPartnerForModal] =
    useState<AssociatedPartner | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Extended clones array for seamless infinite looping (active when > 4 partners)
  const extendedPartners = useMemo(() => {
    if (partnersList.length <= 4) return [];
    const list: (AssociatedPartner & { uniqueKey: string; originalIndex: number })[] = [];
    for (let c = 0; c < COPIES; c++) {
      partnersList.forEach((partner, pIdx) => {
        list.push({
          ...partner,
          originalIndex: pIdx,
          uniqueKey: `copy-${c}-${partner.id}-${pIdx}`,
        });
      });
    }
    return list;
  }, []);

  const activePartnerIndex = selectedPartnerIndex;
  const activePartner = partnersList[activePartnerIndex] || partnersList[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute exact pixel step size dynamically to match responsive layout without clipping
  const updateStep = useCallback(() => {
    if (partnersList.length <= 4) return;
    if (trackRef.current && trackRef.current.children.length > 1) {
      const c0 = trackRef.current.children[0] as HTMLElement;
      const c1 = trackRef.current.children[1] as HTMLElement;
      if (c0 && c1) {
        const r0 = c0.getBoundingClientRect();
        const r1 = c1.getBoundingClientRect();
        const dist = r1.left - r0.left;
        if (dist > 0) {
          setStepWidth(dist);
          return;
        }
      }
    }
    if (carouselContainerRef.current) {
      const w = carouselContainerRef.current.offsetWidth;
      if (w >= 1024) {
        setStepWidth(w * 0.25 + 3);
      } else if (w >= 640) {
        setStepWidth(w / 3 + 4);
      } else {
        setStepWidth(w * 0.5 + 5);
      }
    }
  }, []);

  useEffect(() => {
    updateStep();
    const container = carouselContainerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      setIsTransitioning(false);
      updateStep();
    });
    ro.observe(container);

    const handleResize = () => {
      setIsTransitioning(false);
      updateStep();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [updateStep, mounted]);

  // Handle transition end for seamless circular buffer normalization (invisible teleport)
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (partnersList.length <= 4 || e.target !== trackRef.current || e.propertyName !== "transform") return;

    let normalized = offsetIndex;
    while (normalized >= BASE_OFFSET + partnersList.length) {
      normalized -= partnersList.length;
    }
    while (normalized < BASE_OFFSET) {
      normalized += partnersList.length;
    }

    if (normalized !== offsetIndex) {
      setIsTransitioning(false);
      setOffsetIndex(normalized);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    } else {
      setIsTransitioning(false);
    }
  };

  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 3;
    return 2;
  }, []);

  const handlePrev = useCallback(() => {
    if (partnersList.length <= 1) return;
    setIsAutoPlaying(false);
    if (partnersList.length <= 4) {
      setSelectedPartnerIndex((prev) => (prev - 1 + partnersList.length) % partnersList.length);
      return;
    }
    const visibleCount = getVisibleCount();
    const prevPartner =
      (selectedPartnerIndex - 1 + partnersList.length) % partnersList.length;

    const visibleOriginalIndices: number[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const item = extendedPartners[offsetIndex + i];
      if (item) visibleOriginalIndices.push(item.originalIndex);
    }

    if (visibleOriginalIndices.includes(prevPartner)) {
      setSelectedPartnerIndex(prevPartner);
    } else {
      setIsTransitioning(true);
      setOffsetIndex((prev) => prev - 1);
      setSelectedPartnerIndex(prevPartner);
    }
  }, [selectedPartnerIndex, offsetIndex, extendedPartners, getVisibleCount]);

  const handleNext = useCallback(() => {
    if (partnersList.length <= 1) return;
    setIsAutoPlaying(false);
    if (partnersList.length <= 4) {
      setSelectedPartnerIndex((prev) => (prev + 1) % partnersList.length);
      return;
    }
    const visibleCount = getVisibleCount();
    const nextPartner = (selectedPartnerIndex + 1) % partnersList.length;

    const visibleOriginalIndices: number[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const item = extendedPartners[offsetIndex + i];
      if (item) visibleOriginalIndices.push(item.originalIndex);
    }

    if (visibleOriginalIndices.includes(nextPartner)) {
      setSelectedPartnerIndex(nextPartner);
    } else {
      setIsTransitioning(true);
      setOffsetIndex((prev) => prev + 1);
      setSelectedPartnerIndex(nextPartner);
    }
  }, [selectedPartnerIndex, offsetIndex, extendedPartners, getVisibleCount]);

  // Auto-play partner rotation every 6.5s (pauses on hover)
  useEffect(() => {
    if (!isAutoPlaying || partnersList.length <= 1) return;

    autoPlayTimerRef.current = setInterval(() => {
      handleNext();
    }, 6500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, handleNext]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedPartnerForModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPartnerForModal]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPartnerForModal(null);
    };
    if (selectedPartnerForModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPartnerForModal]);

  const handleSelectPartner = (targetIdx: number) => {
    setIsAutoPlaying(false);
    if (partnersList.length <= 4) {
      setSelectedPartnerIndex(targetIdx);
      return;
    }
    const visibleCount = getVisibleCount();

    const visibleOriginalIndices: number[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const item = extendedPartners[offsetIndex + i];
      if (item) visibleOriginalIndices.push(item.originalIndex);
    }

    if (visibleOriginalIndices.includes(targetIdx)) {
      setSelectedPartnerIndex(targetIdx);
    } else {
      let targetOffset = offsetIndex;
      for (let d = 1; d <= partnersList.length; d++) {
        if (extendedPartners[offsetIndex + d]?.originalIndex === targetIdx) {
          targetOffset = offsetIndex + (d - (visibleCount - 1));
          break;
        }
        if (extendedPartners[offsetIndex - d]?.originalIndex === targetIdx) {
          targetOffset = offsetIndex - d;
          break;
        }
      }
      setIsTransitioning(true);
      setOffsetIndex(targetOffset);
      setSelectedPartnerIndex(targetIdx);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="partners"
      className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden text-white"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-transparent backdrop-blur-md border border-white/20 rounded-[28px] sm:rounded-[32px] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow Elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
            {/* ========================================================================= */}
            {/* LEFT COLUMN: Section Information & Value Pillars */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full gap-5 sm:gap-6">
              <div className="space-y-4 sm:space-y-5">
                {/* Section Heading */}
                <div className="space-y-3">
                  <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] leading-[1.18] text-white tracking-tight drop-shadow-md">
                    Our Associate<br />
                    {partnersList.length === 1 ? "Partner" : "Partners"}
                  </h2>
                  {partnersList.length === 1 ? (
                    <>
                      <p className="font-roboto font-normal text-white/90 text-xs sm:text-[13.5px] leading-relaxed drop-shadow-sm">
                        Established in 1994, Jagat Engineers brings decades of experience in mechanical and structural engineering, shipbuilding, ship repairs, vessel conversion, offshore engineering, marine consultancy, and related engineering works.
                      </p>
                      <p className="font-roboto font-normal text-white/80 text-xs sm:text-[13px] leading-relaxed drop-shadow-sm">
                        Together with Jagat Engineers, we strive to deliver integrated engineering and marine services that meet the highest standards of safety, quality, and operational excellence, ensuring comprehensive project execution from planning and design to on-site implementation.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-roboto font-normal text-white/90 text-xs sm:text-[13.5px] leading-relaxed drop-shadow-sm">
                        We are proud to collaborate with established marine and
                        engineering leaders, combining specialized subsea operations
                        with proven mechanical, structural, and vessel engineering
                        capabilities to deliver dependable onshore and offshore solutions.
                      </p>
                      <p className="font-roboto font-normal text-white/80 text-xs sm:text-[13px] leading-relaxed drop-shadow-sm">
                        Through strategic industry associations, we pair commercial diving interventions with heavy marine fabrication, classification surveys, and vessel engineering for unified turnkey execution.
                      </p>
                    </>
                  )}
                </div>

                {/* Partnership Commitment Card - Quoted Box placed above the two cards */}
                <div className="flex items-center gap-3.5 bg-transparent backdrop-blur-md border border-white/20 border-l-[4px] border-l-cyan-400 rounded-r-2xl rounded-l-xs p-3.5 sm:p-4 shadow-xl">
                  <span className="font-serif font-black text-2xl sm:text-3xl text-cyan-400 leading-none select-none shrink-0">
                    “
                  </span>
                  <p className="font-poppins font-semibold text-cyan-100 text-xs sm:text-sm leading-relaxed">
                    &ldquo;A strong partnership built on experience, engineering expertise, and reliable project delivery.&rdquo;
                  </p>
                </div>
              </div>

              {/* Integration Pillars matching HSE Card Aesthetics - Placed at the bottom */}
              <div className="space-y-2.5 pt-2 sm:pt-3 mt-auto">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 flex items-center gap-3.5 shadow-xs hover:border-cyan-400/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="font-poppins font-semibold text-xs sm:text-[13px] text-white block">
                      Project Undertakings
                    </span>
                    <span className="font-roboto text-[11px] text-white/75 block">
                      Diverse engineering projects for government bodies, port authorities &amp; offshore operators
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 flex items-center gap-3.5 shadow-xs hover:border-cyan-400/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="font-poppins font-semibold text-xs sm:text-[13px] text-white block">
                      Classification &amp; Industry Standards
                    </span>
                    <span className="font-roboto text-[11px] text-white/75 block">
                      Working in accordance with recognized classification and industry standards
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: Interactive Multi-Partner Showcase */}
            {/* ========================================================================= */}
            <div
              className="lg:col-span-7 w-full flex flex-col h-full space-y-3.5"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Partner Quick-Select Header with Integrated Controls (only when > 4 partners) */}
              {partnersList.length > 4 && (
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-poppins text-xs font-semibold text-cyan-300 tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>
                        Partner {String(activePartnerIndex + 1).padStart(2, "0")} /{" "}
                        {String(partnersList.length).padStart(2, "0")}
                      </span>
                    </span>
                    <div className="flex items-center gap-1 ml-1">
                      {partnersList.map((_, idx) => (
                        <button
                          key={`dot-${idx}`}
                          onClick={() => handleSelectPartner(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            activePartnerIndex === idx
                              ? "w-5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                              : "w-1.5 bg-white/25 hover:bg-white/50"
                          }`}
                          aria-label={`Go to partner ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Unified Prev / Next Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full bg-cyan-400/15 hover:bg-cyan-400 text-cyan-300 hover:text-[#00173e] flex items-center justify-center transition-all cursor-pointer border border-cyan-400/40 shadow-xs hover:scale-105 active:scale-95"
                      aria-label="Previous partner"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full bg-cyan-400/15 hover:bg-cyan-400 text-cyan-300 hover:text-[#00173e] flex items-center justify-center transition-all cursor-pointer border border-cyan-400/40 shadow-xs hover:scale-105 active:scale-95"
                      aria-label="Next partner"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[2.2]" />
                    </button>
                  </div>
                </div>
              )}

              {/* Partner Quick-Select Logo Tabs (only when > 1 partner):
                  - 2 or 3 partners: Centered in the middle
                  - 4 partners: Spanning full width
                  - > 4 partners: Continuous virtual carousel track
              */}
              {partnersList.length > 1 && (
                <div className="w-full">
                  {partnersList.length <= 4 ? (
                    <div
                      className={`w-full flex items-center gap-2.5 sm:gap-3 ${
                        partnersList.length < 4 ? "justify-center" : ""
                      }`}
                    >
                      {partnersList.map((partner, idx) => {
                        const isSelected = idx === activePartnerIndex;
                        return (
                          <button
                            key={partner.id}
                            onClick={() => {
                              setIsAutoPlaying(false);
                              setSelectedPartnerIndex(idx);
                            }}
                            className={`group/tab p-2 sm:p-2.5 rounded-2xl border transition-[background-color,border-color,box-shadow,opacity,transform] duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center relative ${
                              partnersList.length < 4
                                ? "w-36 sm:w-44 shrink-0"
                                : "flex-1 min-w-0"
                            } ${
                              isSelected
                                ? "bg-cyan-400/15 backdrop-blur-md border-cyan-400 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.4),inset_0_0_12px_rgba(34,211,238,0.25)]"
                                : "bg-white/5 hover:bg-white/10 backdrop-blur-md border-white/10 hover:border-cyan-400/30 text-white/80 opacity-75 hover:opacity-100"
                            }`}
                          >
                            <div className="h-7 sm:h-8 w-full flex items-center justify-center px-1 rounded-lg bg-white/95 p-1">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover/tab:scale-105"
                              />
                            </div>
                            <span
                              className={`font-poppins text-[10px] sm:text-[11px] font-semibold truncate w-full text-center leading-tight ${
                                isSelected ? "text-cyan-300 font-bold" : "text-white/90"
                              }`}
                            >
                              {partner.name}
                            </span>
                            {isSelected && (
                              <div className="absolute -bottom-[1px] left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div
                      ref={carouselContainerRef}
                      className="w-[calc(100%+24px)] sm:w-[calc(100%+32px)] -mx-3 sm:-mx-4 overflow-hidden py-4 sm:py-5 px-3 sm:px-4 -my-3 sm:-my-4 select-none"
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div
                        ref={trackRef}
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                          transform:
                            stepWidth > 0
                              ? `translate3d(-${offsetIndex * stepWidth}px, 0, 0)`
                              : undefined,
                          transition: isTransitioning
                            ? "transform 350ms cubic-bezier(0.25, 1, 0.5, 1)"
                            : "none",
                        }}
                        className="flex items-center gap-2.5 sm:gap-3 will-change-transform"
                      >
                        {extendedPartners.map((partner, idx) => {
                          const isSelected =
                            partner.originalIndex === activePartnerIndex;
                          const isHiddenBefore =
                            !isTransitioning && idx < offsetIndex;

                          return (
                            <button
                              key={partner.uniqueKey}
                              onClick={() => {
                                setIsAutoPlaying(false);
                                setSelectedPartnerIndex(partner.originalIndex);
                              }}
                              className={`group/tab shrink-0 w-[calc(50%-5px)] sm:w-[calc(33.333%-8px)] lg:w-[calc(25%-9px)] p-2 sm:p-2.5 rounded-2xl border transition-[background-color,border-color,box-shadow,opacity,transform] duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center relative ${
                                isHiddenBefore
                                  ? "opacity-0 pointer-events-none"
                                  : "opacity-100"
                              } ${
                                isSelected
                                  ? "bg-cyan-400/15 backdrop-blur-md border-cyan-400 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.4),inset_0_0_12px_rgba(34,211,238,0.25)]"
                                  : "bg-white/5 hover:bg-white/10 backdrop-blur-md border-white/10 hover:border-cyan-400/30 text-white/80 opacity-75 hover:opacity-100"
                              }`}
                            >
                              <div className="h-7 sm:h-8 w-full flex items-center justify-center px-1 rounded-lg bg-white/95 p-1">
                                <img
                                  src={partner.logo}
                                  alt={partner.name}
                                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover/tab:scale-105"
                                />
                              </div>
                              <span
                                className={`font-poppins text-[10px] sm:text-[11px] font-semibold truncate w-full text-center leading-tight ${
                                  isSelected ? "text-cyan-300 font-bold" : "text-white/90"
                                }`}
                              >
                                {partner.name}
                              </span>
                              {isSelected && (
                                <div className="absolute -bottom-[1px] left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Active Featured Partner Spotlight Card - Transparent HSE Container Style */}
              <div
                key={activePartner.id}
                className="group relative rounded-[28px] bg-transparent backdrop-blur-md border border-white/20 hover:border-cyan-300/40 shadow-2xl transition-all duration-300 p-6 sm:p-7 flex-1 flex flex-col justify-between overflow-hidden animate-partner-fade hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="space-y-4">
                  {/* Card Header: Logo Plate + Partner Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      {/* Logo Container with Light Plate for Contrast */}
                      <div className="h-14 sm:h-16 w-32 sm:w-40 px-3 py-1.5 rounded-2xl bg-white shadow-md border border-white/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <img
                          src={activePartner.logo}
                          alt={activePartner.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Partner Name & Subtitle */}
                      <div className="space-y-1">
                        <h3 className="font-poppins font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-cyan-200 transition-colors drop-shadow-sm leading-tight">
                          {activePartner.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                          <span className="font-roboto text-xs sm:text-[13px] font-medium text-cyan-300">
                            {activePartner.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Establishment Pill */}
                    <div className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 text-xs font-poppins font-medium shadow-xs">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0 stroke-[2]" />
                      <span>Est. {activePartner.established}</span>
                    </div>
                  </div>

                  {partnersList.length === 1 ? (
                    /* Rich full-text view when single partner (Jagat Engineers) */
                    <>
                      {/* Detailed Overview Paragraphs from Full Text */}
                      <div className="space-y-2.5 text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-roboto">
                        <p>
                          We are proud to be associated with Jagat Engineers, an established marine and engineering company with a strong track record in delivering specialized engineering solutions across the marine, offshore, shipbuilding, and infrastructure sectors.
                        </p>
                        <p className="text-white/80 text-xs sm:text-[13px]">
                          Through this association, we combine our capabilities with Jagat Engineers’ technical expertise, engineering experience, project execution capabilities, and understanding of the marine industry to provide dependable solutions for challenging onshore and offshore requirements.
                        </p>
                      </div>

                      {/* Core Engineering Specializations - Full 10 Items from Full Text */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-300 font-poppins">
                          <Wrench className="w-3.5 h-3.5 text-cyan-400 shrink-0 stroke-[2]" />
                          <span>Areas of Expertise</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activePartner.allExpertise.map((item, idx) => (
                            <div
                              key={`tag-${idx}`}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 text-white/90 text-xs font-roboto transition-all"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Concise view when multi-partner mode (>1 partner) */
                    <>
                      {/* Summary / Condensed Bio */}
                      <p className="font-roboto text-xs sm:text-sm text-white/90 leading-relaxed mt-4">
                        {activePartner.summary}
                      </p>

                      {/* Core Specializations */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-300 font-poppins">
                          <Wrench className="w-3.5 h-3.5 text-cyan-400 shrink-0 stroke-[2]" />
                          <span>Core Engineering Specializations</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activePartner.topExpertise.map((item, idx) => (
                            <div
                              key={`tag-${idx}`}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 text-white/90 text-xs font-roboto transition-all"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedPartnerForModal(activePartner)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400/15 hover:bg-cyan-400 text-cyan-300 hover:text-[#00173e] border border-cyan-400/40 text-xs sm:text-[13px] font-poppins font-bold transition-all duration-300 cursor-pointer group/btn shadow-xs hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    <span>Know More</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DETAILED PARTNER PROFILE MODAL (PORTAL) */}
      {/* ========================================================================= */}
      {mounted &&
        selectedPartnerForModal &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
            onClick={() => setSelectedPartnerForModal(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-[#00173e] border border-cyan-400/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-[#001333] to-[#002256] border-b border-white/15 shrink-0">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="h-12 w-28 px-2 py-1 rounded-xl bg-white border border-white/50 flex items-center justify-center shrink-0 shadow-md">
                    <img
                      src={selectedPartnerForModal.logo}
                      alt={selectedPartnerForModal.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                      {selectedPartnerForModal.name}
                    </h3>
                    <p className="font-roboto text-xs text-cyan-300 font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{selectedPartnerForModal.role}</span>
                      <span>•</span>
                      <span>Est. {selectedPartnerForModal.established}</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPartnerForModal(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 text-white hover:text-[#00173e] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Scrollable */}
              <div className="p-5 sm:p-7 space-y-6 overflow-y-auto ocean-scrollbar text-white">
                {/* Association Overview */}
                <div className="space-y-2.5">
                  <h4 className="font-poppins text-xs sm:text-sm font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                    <Handshake className="w-4 h-4 text-cyan-400" />
                    <span>Association Overview</span>
                  </h4>
                  {selectedPartnerForModal.overviewParagraphs &&
                  selectedPartnerForModal.overviewParagraphs.length > 0 ? (
                    <div className="space-y-3 font-roboto text-xs sm:text-sm text-white/90 leading-relaxed">
                      {selectedPartnerForModal.overviewParagraphs.map((para, pIdx) => (
                        <p key={`para-${pIdx}`}>{para}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="font-roboto text-xs sm:text-sm text-white/90 leading-relaxed">
                      {selectedPartnerForModal.associationOverview}
                    </p>
                  )}
                </div>

                {/* All Areas of Expertise */}
                <div className="space-y-3">
                  <h4 className="font-poppins text-xs sm:text-sm font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-cyan-400" />
                    <span>Areas of Expertise ({selectedPartnerForModal.allExpertise.length})</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPartnerForModal.allExpertise.map((item, idx) => (
                      <div
                        key={`modal-exp-${idx}`}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-[13px] text-white/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized Projects & Track Record */}
                <div className="space-y-3">
                  <h4 className="font-poppins text-xs sm:text-sm font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>Project Scope & Capabilities</span>
                  </h4>
                  {selectedPartnerForModal.projectsParagraph && (
                    <p className="font-roboto text-xs sm:text-sm text-white/90 leading-relaxed bg-white/[0.03] border border-white/10 rounded-xl p-3 sm:p-3.5">
                      {selectedPartnerForModal.projectsParagraph}
                    </p>
                  )}
                  {selectedPartnerForModal.specializedProjects &&
                    selectedPartnerForModal.specializedProjects.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedPartnerForModal.specializedProjects.map(
                          (project, idx) => (
                            <div
                              key={`modal-proj-${idx}`}
                              className="flex items-start gap-2 p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-400/20 text-xs sm:text-[13px] text-cyan-100/90"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                              <span>{project}</span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>

                {/* Partnership Commitment */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-[#002256] border border-cyan-400/30 space-y-2.5">
                  <div className="flex items-center gap-2 text-cyan-300 font-poppins text-xs sm:text-sm font-semibold">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Partnership Commitment</span>
                  </div>
                  <p className="font-roboto text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
                    {selectedPartnerForModal.commitment}
                  </p>
                  <p className="font-poppins text-xs sm:text-sm font-semibold text-cyan-300 pt-1.5 border-t border-cyan-400/20 italic">
                    &ldquo;{selectedPartnerForModal.quote || "A strong partnership built on experience, engineering expertise, and reliable project delivery."}&rdquo;
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-[#001333] border-t border-white/10 flex items-center justify-between shrink-0">
                <span className="text-[11px] sm:text-xs text-white/60 font-roboto">
                  {selectedPartnerForModal.classificationStandard}
                </span>
                <button
                  onClick={() => setSelectedPartnerForModal(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-poppins font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
