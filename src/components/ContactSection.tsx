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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-transparent relative text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Form Container */}
          <div className="lg:col-span-6 bg-transparent backdrop-blur-md border border-white/20 rounded-[28px] lg:rounded-[32px] p-7 sm:p-9 lg:p-11 text-white shadow-2xl flex flex-col justify-between">
            <div className="space-y-2 mb-6 sm:mb-8">
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight">
                Get in Touch
              </h2>
              <p className="font-roboto text-white/90 text-sm sm:text-base leading-relaxed">
                Have questions about our courses or dives? Send us a message—we&apos;ll get back to you soon.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/15 border border-emerald-400/30 text-emerald-100 p-6 rounded-2xl text-center space-y-2 my-auto shadow-xs">
                <h3 className="font-poppins font-bold text-lg">Thank You!</h3>
                <p className="font-roboto text-sm">Your message has been sent successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-poppins font-bold text-cyan-300 text-xs uppercase tracking-wider block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-400 shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-poppins font-bold text-cyan-300 text-xs uppercase tracking-wider block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-400 shadow-inner"
                    />
                  </div>
                </div>

                {/* Custom Dropdown */}
                <div className="space-y-1.5 relative">
                  <label className="font-poppins font-bold text-cyan-300 text-xs uppercase tracking-wider block">
                    Subject
                  </label>
                  <div ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-sm text-left flex items-center justify-between shadow-inner transition-all cursor-pointer ${
                        isDropdownOpen
                          ? "border-cyan-400 ring-2 ring-cyan-400/20 text-white"
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

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-[#001438]/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl z-50 overflow-hidden py-1.5">
                        {subjects.map((sub) => (
                          <div
                            key={sub}
                            onClick={() => {
                              setFormData({ ...formData, subject: sub });
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                              formData.subject === sub
                                ? "bg-cyan-500/20 text-cyan-300 font-bold"
                                : "text-white/90 hover:bg-cyan-500/15 hover:text-cyan-300"
                            }`}
                          >
                            <span>{sub}</span>
                            {formData.subject === sub && (
                              <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-poppins font-bold text-cyan-300 text-xs uppercase tracking-wider block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-400 resize-none shadow-inner min-h-[110px]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-white hover:bg-slate-100 text-[#001742] font-dm-sans font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Diver Image Panel with Overlay Quote */}
          <div className="lg:col-span-6 relative rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-2xl min-h-[460px] lg:h-full w-full bg-slate-900 flex flex-col justify-end">
            <Image
              src="/assets/home-get-in-touch.png"
              alt="Get in Touch Diving Operations"
              fill
              className="object-cover object-[center_18%]"
            />
            {/* Bottom Glassmorphism Overlay Card */}
            <div className="relative z-10 m-5 sm:m-7 bg-[#001742]/65 backdrop-blur-md px-6 py-5 sm:py-6 rounded-2xl shadow-2xl space-y-2.5 border border-white/15">
              <p className="font-poppins font-semibold text-white text-base sm:text-lg lg:text-[21px] leading-snug drop-shadow-md">
                Dive beneath the surface and discover endless wonder, where treasures await at every turn.
              </p>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-cyan-300">
                <span>John Smith</span>
                <span>•</span>
                <span>Dive Instructor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
