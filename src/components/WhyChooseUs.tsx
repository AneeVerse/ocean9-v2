import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      number: "1",
      title: "Experienced Team",
      description:
        "Skilled divers, marine crew and project professionals.",
    },
    {
      number: "2",
      title: "Complete Support",
      description:
        "Personnel, equipment and marine support from one team.",
    },
    {
      number: "3",
      title: "Safety First",
      description:
        "Every job is planned and completed with safety as the main priority.",
    },
    {
      number: "4",
      title: "Practical Solutions",
      description:
        "We provide clear and cost-effective solutions for each project.",
    },
    {
      number: "5",
      title: "Reliable Execution",
      description:
        "We focus on quality work, clear communication and timely completion.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 lg:py-20 bg-transparent relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Image & Copy Below (Aligned with top & bottom of right cards track) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:space-y-0">
            {/* Top Image */}
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[16/10] w-full shrink-0">
              <Image
                src="/images/home-why-choose-us2.png"
                alt="Why Choose Ocean 9"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Copy: Subheader, Main Heading (2 lines), Paragraph */}
            <div className="space-y-3 pt-4 sm:pt-5">
              <span className="font-dm-sans font-bold text-xs sm:text-sm text-cyan-400 tracking-wider uppercase block mt-2.5 mb-2.5">
                WHY CHOOSE OCEAN 9
              </span>

              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-white leading-[1.2] tracking-tight">
                Why Work <br className="hidden sm:inline" />
                With Us
              </h2>

              <p className="font-roboto text-white text-sm sm:text-base leading-relaxed max-w-xl">
                Ocean 9 provides complete underwater, subsea and marine support with a focus on safety, reliability, and practical engineering solutions for every project.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Stacked Watery Glass Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white/15 hover:border-cyan-300/30 rounded-[18px] sm:rounded-[20px] p-4.5 sm:p-5 transition-all duration-500 flex items-start gap-4 sm:gap-5 shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:bg-cyan-500/5 cursor-pointer"
              >
                {/* Watery Ripple Ambient Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#00173e] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center shrink-0 font-poppins font-bold text-base sm:text-lg shadow-md mt-0.5 transition-all duration-300 group-hover:scale-105">
                  {feature.number}
                </div>
                <div className="space-y-0.5 relative z-10">
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-roboto text-cyan-50/90 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
