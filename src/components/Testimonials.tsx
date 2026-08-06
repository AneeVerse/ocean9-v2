import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: Diver Image - Exact Figma 630x550 Sizing */}
          <div className="lg:col-span-6 flex flex-col justify-stretch">
            <div className="relative rounded-[24px] overflow-hidden shadow-lg border border-slate-200/60 w-full h-full min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] aspect-[630/550] lg:aspect-auto bg-slate-900">
              <Image
                src="/assets/home-what-our-clients-are-saying.png"
                alt="Client Testimonial Diver"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Side: Header Copy & Testimonial Card */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 lg:space-y-0">
            <div className="space-y-2.5">
              <span className="font-dm-sans font-bold text-xs sm:text-sm text-cyan-400 tracking-wider uppercase block">
                TESTIMONIAL
              </span>

              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-white leading-tight tracking-tight">
                What Our Clients <br className="hidden sm:inline" />
                Are Saying
              </h2>

              <p className="font-roboto text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
                Hear directly from port authorities, offshore contractors, and industrial facility managers about our commercial diving and subsea engineering performance.
              </p>
            </div>

            {/* Testimonial Quote Card in Ocean 9 Navy (#002365) */}
            <div className="bg-[#002365] border border-[#205b9e]/30 rounded-[24px] p-6 sm:p-7 lg:p-8 shadow-xl relative overflow-hidden mt-4 lg:mt-0">
              <p className="font-roboto text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
                &ldquo;Ocean 9 delivered exceptional commercial diving support during our dock gate maintenance and subsea pipeline inspection. Their IMCA-certified team operated with total safety, precision, and strict adherence to project schedules under challenging marine conditions.&rdquo;
              </p>

              {/* Author Info & Outline Quote Mark Icon */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
                    <Image
                      src="/assets/home-drew-fieg-client.jpg"
                      alt="Drew Feig"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-base text-white">Drew Feig</h4>
                    <p className="font-roboto text-xs text-slate-400 font-medium">Marine Engineering Manager</p>
                  </div>
                </div>

                {/* Outline Double Quote Mark Icon */}
                <div className="shrink-0">
                  <svg
                    className="w-9 h-9 sm:w-10 sm:h-10 text-[#0055ff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h4c0 2.5-1 4-3 5.5" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h4c0 2.5-1 4-3 5.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
