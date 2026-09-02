import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      number: "1",
      title: "Experienced Team",
      description:
        "Professional Divers Team, Marine Crew & Project Professionals.",
    },
    {
      number: "2",
      title: "Complete Support",
      description:
        "Personnel, Equipment And Marine Speeds Support From One Team.",
    },
    {
      number: "3",
      title: "Safety First",
      description:
        "Every job is planned and completed with safety as the main priority.",
      badgeImage: "/assets/safety-img.png",
    },
    {
      number: "4",
      title: "Practical Solutions",
      description:
        "We provide clear and cost-effective solutions for each project.",
    },
    {
      number: "5",
      title: "Cost Implementation",
      description:
        "We focus on cost-conscious planning, efficient execution, and outcomes that maximize value for every effort.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-14 sm:py-18 lg:py-22 bg-white relative z-40 text-slate-900">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Text Above & Image Below */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            {/* Top Copy: Main Heading, Paragraph */}
            <div className="space-y-4">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#001742] leading-tight tracking-tight uppercase">
                WHY CHOOSE OCEAN 9
              </h2>

              <p className="font-roboto text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                Ocean 9 provides complete underwater, subsea and marine support with a focus on safety, reliability, and practical engineering solutions for every project.
              </p>
            </div>

            {/* Bottom Image */}
            <div className="relative rounded-[28px] overflow-hidden shadow-xl aspect-[16/10] w-full shrink-0">
              <Image
                src="/assets/why-choose-us-img.png"
                alt="Why Choose Ocean 9"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: 5 Stacked Dark Navy Cards (Exact match with reference UI) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3.5 sm:gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-[#001742] hover:bg-[#001e54] rounded-[20px] px-5 sm:px-6 py-4.5 flex items-center gap-4 sm:gap-5 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Number Circle Badge and Optional Inline Badge Logo */}
                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1e66f5] text-white flex items-center justify-center font-poppins font-bold text-lg sm:text-xl shadow-md transition-transform duration-300 group-hover:scale-105">
                    {feature.number}
                  </div>

                  {feature.badgeImage && (
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={feature.badgeImage}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Card Title + Subtitle */}
                <div className="space-y-1 relative z-10 flex-1">
                  <h3 className="font-poppins font-bold text-base sm:text-[17px] leading-snug text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-roboto text-slate-300 text-xs sm:text-[13.5px] leading-relaxed">
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

