export default function ClientStrip() {
  const clients = [
    {
      name: "Sea Geo Surveys",
      src: "/assets/home-sea-geo-logo.png",
      alt: "Sea Geo Surveys Pvt. Ltd. Logo",
      heightClass: "h-9 sm:h-11 lg:h-13",
    },
    {
      name: "BSNL",
      src: "/assets/bsnl-logo-icon.svg",
      alt: "BSNL Logo",
      heightClass: "h-9 sm:h-11 lg:h-13",
    },
    {
      name: "Tata Communications",
      src: "/assets/397-3971561_tata-communications-logo-tata-communications-logo.png",
      alt: "Tata Communications Logo",
      heightClass: "h-5 sm:h-6 lg:h-7",
    },
    {
      name: "Adani Ports and Logistics",
      src: "/assets/home-adani-ports-logistics-logo.png",
      alt: "Adani Ports and Logistics Logo",
      heightClass: "h-6 sm:h-7 lg:h-8",
    },
    {
      name: "Ultra Dimensions",
      src: "/assets/home-UD-group-logo.png",
      alt: "Ultra Dimensions Pvt Ltd Logo",
      heightClass: "h-10 sm:h-12 lg:h-14",
    },
    {
      name: "Naval Dock",
      src: "/images/indian-navy-logo2.png",
      alt: "Naval Dock / Indian Navy Logo",
      heightClass: "h-9 sm:h-11 lg:h-12",
      showText: true,
      text: "INDIAN NAVY",
    },
    {
      name: "MKC Constructions",
      src: "/assets/logos/MKC_Logo_registered-01-scaled.jpeg",
      alt: "MKC Constructions Logo",
      heightClass: "h-10 sm:h-12 lg:h-14",
    },
    {
      name: "SANMAH Infotech",
      src: "/assets/logos/sanmahinfotect-logo-new.jpg",
      alt: "SANMAH Infotech Pvt Ltd Logo",
      heightClass: "h-10 sm:h-12 lg:h-14",
    },
    {
      name: "Omega Ship Management",
      src: "/assets/logos/omega-ship-management.png",
      alt: "Omega Ship Management Logo",
      heightClass: "h-9 sm:h-11 lg:h-13",
    },
    {
      name: "Noorani Shipping Services",
      src: "/assets/logos/ns_logo.png",
      alt: "Noorani Shipping Services Logo",
      heightClass: "h-6 sm:h-7 lg:h-8",
    },
    {
      name: "Care Marine & Allied Services",
      src: "/assets/logos/Care-Marine-Services-Logo-1024x328.png",
      alt: "Care Marine & Allied Services Logo",
      heightClass: "h-9 sm:h-12 lg:h-14",
    },
    {
      name: "Gulf Dredging",
      src: "/assets/home-gulf-logo.png",
      alt: "Gulf Dredging Logo",
      heightClass: "h-5 sm:h-7 lg:h-8",
    },
    {
      name: "Sri Ram Janki Constructions",
      src: "/assets/logos/sri-ram-janki.webp",
      alt: "Sri Ram Janki Constructions Logo",
      heightClass: "h-9 sm:h-11 lg:h-13",
      showText: true,
      textPosition: "right",
      textLines: ["SRI RAM JANKI", "CONSTRUCTIONS"],
    },
  ];

  // Repeat logo set for dense continuous track
  const trackClients = [...clients, ...clients];

  return (
    <div className="relative bg-transparent z-20 overflow-hidden [contain:layout_paint] [transform:translateZ(0)]">
      {/* Top Wave: Sweeping Curve */}
      <div className="w-full overflow-hidden leading-none bg-[#020917] -mb-px">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[46px] sm:h-[64px] lg:h-[84px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 Q 720 76 1440 0 L 1440 101 L 0 101 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* White client logo strip */}
      <section className="bg-white py-0.5 sm:py-1 overflow-hidden relative isolate transform-gpu">
        <div className="w-full flex overflow-hidden isolate">
          <div
            className="animate-marquee flex items-center shrink-0 [will-change:transform] [transform:translateZ(0)] hover:[animation-play-state:paused]"
            style={{ animationDuration: "60s" }}
          >
            <div className="flex items-center shrink-0">
              {trackClients.map((client, index) => (
                <div
                  key={`t1-${index}`}
                  className={`flex ${client.textPosition === "right" ? "flex-row items-center gap-2.5 sm:gap-3" : "flex-col items-center justify-center"} shrink-0 px-6 sm:px-7 lg:px-8`}
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    decoding="async"
                    loading="eager"
                    className={`${client.heightClass} w-auto object-contain mix-blend-multiply`}
                  />
                  {client.showText && client.textPosition === "right" ? (
                    <div className="flex flex-col text-left leading-tight">
                      {client.textLines?.map((line, lIdx) => (
                        <span
                          key={lIdx}
                          className="font-poppins font-bold text-[#002365] text-[10px] sm:text-[12px] lg:text-[13.5px] tracking-[0.10em] uppercase whitespace-nowrap"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  ) : client.showText ? (
                    <span className="font-poppins font-bold text-[#002365] text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.14em] uppercase text-center whitespace-nowrap mt-1 sm:mt-1.5">
                      {client.text}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="flex items-center shrink-0" aria-hidden="true">
              {trackClients.map((client, index) => (
                <div
                  key={`t2-${index}`}
                  className={`flex ${client.textPosition === "right" ? "flex-row items-center gap-2.5 sm:gap-3" : "flex-col items-center justify-center"} shrink-0 px-6 sm:px-7 lg:px-8`}
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    decoding="async"
                    loading="eager"
                    className={`${client.heightClass} w-auto object-contain mix-blend-multiply`}
                  />
                  {client.showText && client.textPosition === "right" ? (
                    <div className="flex flex-col text-left leading-tight">
                      {client.textLines?.map((line, lIdx) => (
                        <span
                          key={lIdx}
                          className="font-poppins font-bold text-[#002365] text-[10px] sm:text-[12px] lg:text-[13.5px] tracking-[0.10em] uppercase whitespace-nowrap"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  ) : client.showText ? (
                    <span className="font-poppins font-bold text-[#002365] text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.14em] uppercase text-center whitespace-nowrap mt-1 sm:mt-1.5">
                      {client.text}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Wave: Sweeping Curve */}
      <div className="w-full overflow-hidden leading-none bg-transparent -mt-px">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[46px] sm:h-[64px] lg:h-[84px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 L 1440 0 L 1440 101 Q 720 25 0 101 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}
