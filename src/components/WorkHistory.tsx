import Image from "next/image";

export default function WorkHistory() {
  const clientsList = [
    {
      name: "Indian Navy",
      src: "/images/indian-navy-logo2.png",
      heightClass: "h-10 sm:h-12 lg:h-13",
      showText: true,
      text: "INDIAN NAVY",
    },
    {
      name: "Adani",
      src: "/images/adani-transparent-logo.png",
      heightClass: "h-8 sm:h-10 lg:h-11",
    },
    {
      name: "Airtel",
      src: "/assets/Airtel-logo.png",
      heightClass: "h-9 sm:h-11 lg:h-12",
    },
    {
      name: "Reliance Industries",
      src: "/images/reliance-logo.png",
      heightClass: "h-12 sm:h-15 lg:h-16",
    },
    {
      name: "Tata Communications",
      src: "/assets/397-3971561_tata-communications-logo-tata-communications-logo.png",
      heightClass: "h-8 sm:h-10 lg:h-11",
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

            {/* Right Side: Infinite Marquee Carousel with 3 Logos visible in view */}
            <div
              className="lg:col-span-6 w-full overflow-hidden relative py-2"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex items-center animate-marquee shrink-0">
                {/* Track Set 1 */}
                <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`set1-${idx}`}
                      className="w-[120px] sm:w-[150px] shrink-0 group flex flex-col items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={`${client.heightClass} w-auto object-contain transition-all duration-300`}
                      />
                      {client.showText && (
                        <span className="font-poppins font-bold text-white text-[11px] sm:text-xs lg:text-[13px] tracking-[0.14em] uppercase text-center drop-shadow-md whitespace-nowrap mt-1">
                          {client.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Track Set 2 (Identical Duplicate for Seamless 60fps Loop) */}
                <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
                  {clientsList.map((client, idx) => (
                    <div
                      key={`set2-${idx}`}
                      className="w-[120px] sm:w-[150px] shrink-0 group flex flex-col items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={`${client.heightClass} w-auto object-contain transition-all duration-300`}
                      />
                      {client.showText && (
                        <span className="font-poppins font-bold text-white text-[11px] sm:text-xs lg:text-[13px] tracking-[0.14em] uppercase text-center drop-shadow-md whitespace-nowrap mt-1">
                          {client.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
