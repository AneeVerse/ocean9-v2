"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subjects = [
    "Diving Services",
    "Offshore Operations",
    "Salvage & Subsea",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-transparent relative text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Form Container (Ocean Transparent Glass Card) */}
          <div className="lg:col-span-6 bg-transparent backdrop-blur-md border border-white/20 rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 text-white shadow-2xl flex flex-col justify-between">
            <div className="space-y-3 mb-6 sm:mb-8">
              <h2 className="font-poppins font-normal text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-normal">
                Get in Touch
              </h2>
              <p className="font-roboto text-white/95 text-sm sm:text-base leading-relaxed">
                Have questions about our subsea services or commercial diving operations? Send us a message—we&apos;ll get back to you soon.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-6 rounded-[16px] text-center space-y-2 my-auto shadow-sm">
                <h3 className="font-poppins font-bold text-lg">Thank You!</h3>
                <p className="font-roboto text-sm">Your message has been sent successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-roboto font-semibold text-cyan-300 text-sm block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-transparent border border-white/20 rounded-[12px] text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-400 backdrop-blur-md shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-roboto font-semibold text-cyan-300 text-sm block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-transparent border border-white/20 rounded-[12px] text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-400 backdrop-blur-md shadow-inner"
                    />
                  </div>
                </div>

                {/* Custom Transparent Glass Dropdown */}
                <div className="space-y-2 relative">
                  <label className="font-roboto font-semibold text-cyan-300 text-sm block">
                    Subject
                  </label>
                  <div ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3.5 bg-transparent border rounded-[12px] text-sm text-left flex items-center justify-between backdrop-blur-md shadow-inner transition-all cursor-pointer ${
                        isDropdownOpen
                          ? "border-cyan-400 ring-1 ring-cyan-400/50 text-white"
                          : "border-white/20 text-white hover:border-white/40"
                      }`}
                    >
                      <span className={formData.subject ? "text-white" : "text-slate-400"}>
                        {formData.subject || "Select a subject"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 stroke-[2.5] text-cyan-300 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    </button>

                    {/* Glassmorphism Dropdown Menu Popover */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-[#001438]/85 backdrop-blur-xl border border-white/20 rounded-[14px] shadow-[0_12px_35px_rgba(0,0,0,0.7)] z-50 overflow-hidden py-1.5">
                        {subjects.map((sub) => (
                          <div
                            key={sub}
                            onClick={() => {
                              setFormData({ ...formData, subject: sub });
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-3 text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                              formData.subject === sub
                                ? "bg-cyan-500/20 text-cyan-300 font-bold"
                                : "text-white/90 hover:bg-cyan-500/15 hover:text-cyan-300"
                            }`}
                          >
                            <span>{sub}</span>
                            {formData.subject === sub && (
                              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-roboto font-semibold text-cyan-300 text-sm block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-transparent border border-white/20 rounded-[12px] text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-400 resize-none backdrop-blur-md shadow-inner"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-white hover:bg-slate-100 text-[#002365] font-dm-sans font-semibold text-sm sm:text-base px-8 py-3.5 rounded-[12px] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Diver Image Panel with Overlay Quote */}
          <div className="lg:col-span-6 relative rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-2xl min-h-[440px] lg:h-full w-full bg-slate-900">
            <Image
              src="/assets/home-get-in-touch.png"
              alt="Get in Touch Diving Operations"
              fill
              className="object-cover"
            />
            {/* Bottom Glassmorphism Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/5 backdrop-blur-sm backdrop-saturate-150 px-4 sm:px-5 py-4.5 sm:py-5 rounded-[16px] shadow-2xl space-y-3.5">
              <p className="font-roboto font-normal text-white text-[18px] sm:text-[21.5px] lg:text-[23px] leading-relaxed drop-shadow-md tracking-tight">
                Delivering safe, precise, and reliable underwater engineering solutions for complex subsea and offshore operations.
              </p>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <span className="font-roboto font-medium text-white drop-shadow-sm">Capt. Rajesh Sharma</span>
                <span className="text-white/80 font-normal">•</span>
                <span className="font-roboto text-white/90 font-normal drop-shadow-sm">Lead Subsea Operations Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
