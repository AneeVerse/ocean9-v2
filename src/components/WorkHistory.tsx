import Image from "next/image";

export default function WorkHistory() {
  const clientsList = [
    {
      name: "Indian Navy",
      src: "/images/indian-navy-logo2.png",
      heightClass: "h-8 sm:h-9",
      boxClass: "w-12 sm:w-14",
      role: "Maritime Defense Client",
    },
    {
      name: "Adani",
      src: "/images/adani-transparent-logo.png",
      heightClass: "h-6 sm:h-7",
      boxClass: "w-16 sm:w-18",
      role: "Port & Infrastructure Client",
    },
    {
      name: "Airtel",
      src: "/assets/Airtel-logo.png",
      heightClass: "h-6 sm:h-7",
      boxClass: "w-16 sm:w-18",
      role: "Telecom Network Partner",
    },
    {
      name: "Reliance Industries",
      src: "/images/reliance-logo.png",
      heightClass: "h-7 sm:h-8",
      boxClass: "w-14 sm:w-16",
      role: "Offshore & Marine Client",
    },
    {
      name: "Tata Communications",
      src: "/assets/397-3971561_tata-communications-logo-tata-communications-logo.png",
      heightClass: "h-7 sm:h-8",
      boxClass: "w-24 sm:w-28",
      extraClass: "brightness-125 contrast-125 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]",
      role: "Network Partner",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-transparent border border-white/20 rounded-[28px] sm:rounded-[32px] py-12 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-poppins font-normal text-white text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] whitespace-nowrap leading-tight tracking-normal drop-shadow-md">
                Ocean 9’s work history
              </h2>
              <p className="font-roboto font-normal text-white text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl drop-shadow-sm">
                Includes projects for Reliance Industries, the Indian Navy, Adani, Airtel, Tata
                Communications and other marine and infrastructure clients.
              </p>
            </div>

            {/* Right Side: Option 3 Frosted Glass Client Cards Marquee */}
            <div
              className="lg:col-span-6 w-full overflow-hidden relative py-2"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div className="flex items-center animate-marquee shrink-0 hover:[animation-play-state:paused]">
                {/* Track Set 1 */}
                <div className="flex items-center gap-4 sm:gap-5 shrink-0 pr-4 sm:pr-5">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`card-set1-${idx}`}
                      className="group shrink-0 flex items-center gap-3 sm:gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-transparent hover:bg-white/5 border border-white/20 hover:border-cyan-400/50 shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer select-none"
                    >
                      {/* Transparent Logo Box */}
                      <div className={`${client.boxClass || "w-12 sm:w-14"} h-10 sm:h-11 flex items-center justify-center p-1 shrink-0`}>
                        <img
                          src={client.src}
                          alt={client.name}
                          className={`${client.heightClass} ${client.extraClass || ""} w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110`}
                        />
                      </div>

                      {/* Client Name & Partnership Role */}
                      <div className="flex flex-col justify-center space-y-0.5 text-left pr-1">
                        <span className="font-poppins font-bold text-xs sm:text-[13px] text-white group-hover:text-cyan-200 transition-colors whitespace-nowrap leading-tight drop-shadow-sm">
                          {client.name}
                        </span>
                        <span className="font-roboto text-[10px] sm:text-[11px] font-medium text-cyan-300 whitespace-nowrap leading-tight flex items-center gap-1.5 drop-shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                          <span>{client.role}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Track Set 2 (Identical Duplicate for Seamless 60fps Loop) */}
                <div className="flex items-center gap-4 sm:gap-5 shrink-0 pr-4 sm:pr-5" aria-hidden="true">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`card-set2-${idx}`}
                      className="group shrink-0 flex items-center gap-3 sm:gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-transparent hover:bg-white/5 border border-white/20 hover:border-cyan-400/50 shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer select-none"
                    >
                      {/* Transparent Logo Box */}
                      <div className={`${client.boxClass || "w-12 sm:w-14"} h-10 sm:h-11 flex items-center justify-center p-1 shrink-0`}>
                        <img
                          src={client.src}
                          alt={client.name}
                          className={`${client.heightClass} ${client.extraClass || ""} w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110`}
                        />
                      </div>

                      {/* Client Name & Partnership Role */}
                      <div className="flex flex-col justify-center space-y-0.5 text-left pr-1">
                        <span className="font-poppins font-bold text-xs sm:text-[13px] text-white group-hover:text-cyan-200 transition-colors whitespace-nowrap leading-tight drop-shadow-sm">
                          {client.name}
                        </span>
                        <span className="font-roboto text-[10px] sm:text-[11px] font-medium text-cyan-300 whitespace-nowrap leading-tight flex items-center gap-1.5 drop-shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                          <span>{client.role}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* OPTION 1 IMPLEMENTATION (ROLE BADGES UNDER LOGO - PRESERVED FOR FUTURE USE) */}
            {/* ========================================================================= */}
            {/*
            <div
              className="hidden lg:col-span-6 w-full overflow-hidden relative py-2"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex items-center animate-marquee shrink-0">
                <div className="flex items-center gap-8 sm:gap-10 shrink-0 pr-8 sm:pr-10">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`opt1-set1-${idx}`}
                      className="w-[170px] sm:w-[210px] shrink-0 group flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer py-2"
                    >
                      <div className="h-12 sm:h-14 flex items-center justify-center">
                        <img
                          src={client.src}
                          alt={client.name}
                          className={`${client.heightClass} w-auto object-contain transition-all duration-300 group-hover:brightness-110`}
                        />
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001c47]/85 border border-cyan-400/35 backdrop-blur-md text-cyan-300 text-[10px] sm:text-[11px] font-poppins font-medium tracking-normal whitespace-nowrap shadow-sm group-hover:border-cyan-300/60 group-hover:bg-[#002866]/90 transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                        <span>{client.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 sm:gap-10 shrink-0 pr-8 sm:pr-10" aria-hidden="true">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`opt1-set2-${idx}`}
                      className="w-[170px] sm:w-[210px] shrink-0 group flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer py-2"
                    >
                      <div className="h-12 sm:h-14 flex items-center justify-center">
                        <img
                          src={client.src}
                          alt={client.name}
                          className={`${client.heightClass} w-auto object-contain transition-all duration-300 group-hover:brightness-110`}
                        />
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001c47]/85 border border-cyan-400/35 backdrop-blur-md text-cyan-300 text-[10px] sm:text-[11px] font-poppins font-medium tracking-normal whitespace-nowrap shadow-sm group-hover:border-cyan-300/60 group-hover:bg-[#002866]/90 transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                        <span>{client.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            */}

            {/* ========================================================================= */}
            {/* ORIGINAL LOGO-ONLY IMPLEMENTATION (PRESERVED FOR FUTURE USE) */}
            {/* ========================================================================= */}
            {/*
            <div
              className="hidden lg:col-span-6 w-full overflow-hidden relative py-2"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex items-center animate-marquee shrink-0">
                <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`prev-set1-${idx}`}
                      className="w-[120px] sm:w-[150px] shrink-0 group flex flex-col items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={`${client.heightClass} w-auto object-contain transition-all duration-300`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`prev-set2-${idx}`}
                      className="w-[120px] sm:w-[150px] shrink-0 group flex flex-col items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={`${client.heightClass} w-auto object-contain transition-all duration-300`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
