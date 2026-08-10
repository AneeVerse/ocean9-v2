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

  const row1 = clientsList.slice(0, 3);
  const row2 = clientsList.slice(3, 5);

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

            {/* Right Compact 3-col & 2-col Logo Rows */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center gap-4 sm:gap-5 lg:gap-6">
              {/* Row 1: 3 Logos */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-5 sm:gap-7 lg:gap-8">
                {row1.map((client, idx) => (
                  <div
                    key={idx}
                    className={`group flex ${
                      client.showText
                        ? "flex-col items-center justify-center gap-1.5"
                        : "items-center justify-center"
                    } px-1 transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className={`${client.heightClass} w-auto object-contain transition-all duration-300`}
                    />
                    {client.showText && (
                      <span className="font-poppins font-bold text-white text-[11px] sm:text-xs lg:text-[13px] tracking-[0.14em] uppercase text-center drop-shadow-md whitespace-nowrap mt-0.5">
                        {client.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Row 2: 2 Logos */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 sm:gap-8 lg:gap-10">
                {row2.map((client, idx) => (
                  <div
                    key={idx}
                    className={`group flex ${
                      client.showText
                        ? "flex-col items-center justify-center gap-1.5"
                        : "items-center justify-center"
                    } px-1 transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className={`${client.heightClass} w-auto object-contain transition-all duration-300`}
                    />
                    {client.showText && (
                      <span className="font-poppins font-bold text-white text-[11px] sm:text-xs lg:text-[13px] tracking-[0.14em] uppercase text-center drop-shadow-md whitespace-nowrap mt-0.5">
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
    </section>
  );
}
