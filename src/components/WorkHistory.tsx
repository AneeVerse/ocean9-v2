import Image from "next/image";

export default function WorkHistory() {
  const clientsList = [
    "Indian Navy",
    "Adani",
    "Airtel",
    "Reliance Industries",
    "Tata Communications",
  ];

  return (
    <section className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-transparent border border-white/20 rounded-[28px] sm:rounded-[32px] py-12 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-poppins font-normal text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-normal drop-shadow-md">
                Ocean 9’s work history
              </h2>
              <p className="font-roboto font-normal text-white text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl drop-shadow-sm">
                Includes projects for Reliance Industries, the Indian Navy, Adani, Airtel, Tata
                Communications and other marine and infrastructure clients.
              </p>
            </div>

            {/* Right Badges / Client Tags */}
            <div className="lg:col-span-5 flex flex-wrap gap-3 justify-start lg:justify-end">
              {clientsList.map((client, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/20 border border-white/25 text-white font-medium text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md backdrop-blur-xs transform hover:scale-105"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
