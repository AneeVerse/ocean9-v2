import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Diver Image (Matches Right Column Height) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start h-full">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl w-full max-w-[424px] h-[380px] sm:h-[450px] lg:h-full min-h-[440px]">
              <Image
                src="/images/home-about-us2.png"
                alt="Underwater Operations & Marine Engineering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Copy & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag / Badge: About Ocean 9 */}
            <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#001742]/85 border border-white/30 shadow-md backdrop-blur-md shrink-0">
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
              <span className="font-roboto font-normal text-white text-[14px] tracking-normal">About Ocean 9</span>
            </div>

            <h2 className="font-poppins font-normal sm:font-medium text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-tight text-contrast-shadow">
              Your Partner for Underwater <br className="hidden sm:inline" />
              <span className="inline-flex items-center gap-2.5 sm:gap-3.5 align-middle">
                <span>Operations</span>
                <Image
                  src="/assets/logos/shaking-hand-bold.png"
                  alt="Partnership Handshake"
                  width={80}
                  height={40}
                  className="w-11 h-auto sm:w-13 lg:w-16 shrink-0 inline-block object-contain"
                />
              </span>
            </h2>

            <p className="font-roboto font-medium text-white text-sm sm:text-base lg:text-[15.5px] leading-relaxed tracking-normal max-w-none text-contrast-subtle">
              Ocean 9 Offshore Services Pvt. Ltd. provides underwater diving, marine and subsea engineering services.
            </p>

            <p className="font-roboto font-normal text-white/95 text-sm sm:text-base leading-relaxed tracking-normal max-w-2xl text-contrast-subtle">
              We support offshore and onshore projects with trained teams, diving equipment and marine support. Our focus is simple: complete every job safely, properly and on time.
            </p>

            <p className="font-roboto font-normal text-white/95 text-sm sm:text-base leading-relaxed tracking-normal max-w-2xl text-contrast-subtle">
              Ocean 9’s company profile describes the business as an underwater diving and subsea engineering service provider with diving personnel, equipment and vessel support.
            </p>
          </div>
        </div>

        {/* Bottom Stats Grid: 3 columns horizontal on all screens including mobile */}
        <div className="mt-8 sm:mt-14 pt-0 grid grid-cols-3 max-w-[1000px] mx-auto gap-2 sm:gap-6 text-center px-1 sm:px-0">
          <div className="space-y-1">
            <p className="font-poppins font-normal sm:font-medium text-white text-3xl sm:text-5xl lg:text-[73.6px] leading-tight tracking-normal text-contrast-shadow">
              38
            </p>
            <p className="font-roboto font-normal text-[11px] sm:text-sm text-white/95 leading-tight text-contrast-subtle">Project Assignments</p>
          </div>
          <div className="space-y-1">
            <p className="font-poppins font-normal sm:font-medium text-white text-3xl sm:text-5xl lg:text-[73.6px] leading-tight tracking-normal text-contrast-shadow">
              18
            </p>
            <p className="font-roboto font-normal text-[11px] sm:text-sm text-white/95 leading-tight text-contrast-subtle">Clients Served</p>
          </div>
          <div className="space-y-1">
            <p className="font-poppins font-normal sm:font-medium text-white text-3xl sm:text-5xl lg:text-[73.6px] leading-tight tracking-normal text-contrast-shadow">
              6<span className="font-poppins font-normal text-[#00d2ff] text-2xl sm:text-4xl lg:text-[65.6px] leading-none tracking-normal text-contrast-shadow">+</span>
            </p>
            <p className="font-roboto font-normal text-[11px] sm:text-sm text-white/95 leading-tight text-contrast-subtle">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
