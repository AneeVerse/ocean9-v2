import Image from "next/image";

export default function ClientStrip() {
  const clients = [
    {
      name: "Sea Geo Surveys",
      src: "/assets/home-sea-geo-logo.png",
      alt: "Sea Geo Surveys Pvt. Ltd. Logo",
      heightClass: "h-9 sm:h-11 lg:h-13",
    },
    {
      name: "Paramount Wires & Cables",
      src: "/assets/home-paramount-logo-removebg-preview.png",
      alt: "Paramount Wires & Cables Logo",
      heightClass: "h-9 sm:h-11 lg:h-13",
    },
    {
      name: "UD Group",
      src: "/assets/home-UD-group-logo.png",
      alt: "UD Group Logo",
      heightClass: "h-10 sm:h-12 lg:h-14",
    },
    {
      name: "Adani Ports and Logistics",
      src: "/assets/home-adani-ports-logistics-logo.png",
      alt: "Adani Ports and Logistics Logo",
      heightClass: "h-11 sm:h-14 lg:h-16",
    },
    {
      name: "Gulf Dredging",
      src: "/assets/home-gulf-logo.png",
      alt: "Gulf Logo",
      heightClass: "h-5 sm:h-7 lg:h-8",
    },
  ];

  // Repeat logo set for dense continuous track
  const trackClients = [...clients, ...clients, ...clients];

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

      {/* Main White Banner with Auto Infinite Marquee Scrolling */}
      <section className="bg-white py-0.5 sm:py-1 overflow-hidden relative isolate transform-gpu">
        <div className="w-full flex overflow-hidden isolate">
          {/* Unified 60fps Marquee Wrapper with Optimal 30s Speed */}
          <div
            className="animate-marquee flex items-center shrink-0 [will-change:transform] [transform:translateZ(0)] hover:[animation-play-state:paused]"
            style={{ animationDuration: "30s" }}
          >
            {/* Track Set 1 */}
            <div className="flex items-center shrink-0">
              {trackClients.map((client, index) => (
                <div
                  key={`t1-${index}`}
                  className="flex items-center justify-center shrink-0 px-6 sm:px-8 lg:px-10"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    decoding="async"
                    loading="eager"
                    className={`${client.heightClass} w-auto object-contain mix-blend-multiply`}
                  />
                </div>
              ))}
            </div>

            {/* Track Set 2 (Identical Duplicate for Seamless 60fps Loop) */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {trackClients.map((client, index) => (
                <div
                  key={`t2-${index}`}
                  className="flex items-center justify-center shrink-0 px-6 sm:px-8 lg:px-10"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    decoding="async"
                    loading="eager"
                    className={`${client.heightClass} w-auto object-contain mix-blend-multiply`}
                  />
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
