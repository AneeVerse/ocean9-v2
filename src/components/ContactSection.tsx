"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    customService: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  // Listen for service selection from Service scroll cards or Footer links
  useEffect(() => {
    try {
      const savedService = sessionStorage.getItem("selected_service");
      if (savedService) {
        setFormData((prev) => ({
          ...prev,
          service: savedService,
          customService: savedService === "Other" ? prev.customService : "",
        }));
        sessionStorage.removeItem("selected_service");
      }
    } catch (e) {}

    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          service: customEvent.detail,
          customService: customEvent.detail === "Other" ? prev.customService : "",
        }));
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("select-service", handleSelectService);
    return () => {
      window.removeEventListener("select-service", handleSelectService);
    };
  }, []);

  const servicesList = [
    "Air Diving",
    "Mixed Gas Diving",
    "Saturation Diving",
    "Offshore Operations",
    "Onshore Operations",
    "Marine Survey and Inspection",
    "Underwater Cutting, Welding and Salvage",
    "Marine Crew and Manning",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const selectedService =
      formData.service === "Other"
        ? formData.customService
          ? `Other: ${formData.customService}`
          : "Other"
        : formData.service || "General Inquiry";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: selectedService,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send requirement. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", service: "", customService: "", message: "" });
    } catch (err: any) {
      setErrorMessage(err.message || "Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-transparent relative text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Form Container */}
          <div className="lg:col-span-6 bg-transparent backdrop-blur-md border border-white/20 rounded-[28px] lg:rounded-[32px] p-7 sm:p-9 lg:p-11 text-white shadow-2xl flex flex-col justify-between">
            <div className="space-y-2 mb-6 sm:mb-8">
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight">
                Share Your Requirement
              </h2>
              <p className="font-roboto text-white/90 text-sm sm:text-base leading-relaxed">
                Share your project details with us. <br className="hidden sm:inline" />
                We will understand your needs and suggest the right solution.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/15 border border-emerald-400/30 text-emerald-100 p-8 rounded-2xl text-center space-y-3 my-auto shadow-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto text-emerald-300 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-poppins font-bold text-2xl text-white">Thank You!</h3>
                <p className="font-roboto text-sm sm:text-base text-emerald-200/90 leading-relaxed max-w-md mx-auto">
                  Your requirement has been sent successfully. Our team will review your details and connect with you shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 underline cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs sm:text-sm p-3.5 rounded-xl flex items-center gap-2">
                    <span className="text-base">⚠️</span>
                    <span>{errorMessage}</span>
                  </div>
                )}
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

                {/* Custom Service Dropdown */}
                <div className="space-y-1.5 relative">
                  <label className="font-poppins font-bold text-cyan-300 text-xs uppercase tracking-wider block">
                    Service
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
                      <span className={formData.service ? "text-white font-medium" : "text-slate-400"}>
                        {formData.service || "Select a service"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 stroke-[2.5] text-cyan-300 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-[#001438]/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50 py-1.5 max-h-60 overflow-y-auto ocean-scrollbar">
                        {servicesList.map((svc) => (
                          <div
                            key={svc}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                service: svc,
                                customService: svc === "Other" ? formData.customService : "",
                              });
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-2.5 mx-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                              formData.service === svc
                                ? "bg-cyan-500/20 text-cyan-300 font-bold"
                                : "text-white/90 hover:bg-cyan-500/15 hover:text-cyan-300"
                            }`}
                          >
                            <span>{svc}</span>
                            {formData.service === svc && (
                              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Specify Custom Service Input when "Other" is selected */}
                {formData.service === "Other" && (
                  <div className="space-y-1.5 pt-1">
                    <label className="font-poppins font-bold text-cyan-300 text-xs uppercase tracking-wider block">
                      Specify Service
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your service name"
                      value={formData.customService}
                      onChange={(e) => setFormData({ ...formData, customService: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-400 shadow-inner"
                    />
                  </div>
                )}

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
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-400 resize-none shadow-inner min-h-[110px] ocean-scrollbar"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white hover:bg-slate-100 disabled:opacity-60 disabled:cursor-not-allowed text-[#001742] font-dm-sans font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 min-w-[150px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-[#001742]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Contact us</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Diver Image Panel */}
          <div className="lg:col-span-6 relative rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-2xl min-h-[460px] lg:h-full w-full bg-slate-900">
            <Image
              src="/assets/home-get-in-touch.png"
              alt="Ocean 9 Commercial Diver"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
