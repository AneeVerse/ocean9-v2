import Image from "next/image";
import Link from "next/link";
import { User, Calendar, ArrowUpRight } from "lucide-react";

export default function BlogSection() {
  const posts = [
    {
      title: "Subsea Pipeline Inspection & NDT Audits",
      date: "March 4, 2025",
      author: "Ocean 9 Team",
      category: "Subsea Engineering",
      excerpt:
        "Key methodologies and safety standards for deep sea NDT testing, ultrasonic thickness gauging, and subsea pipeline integrity verification.",
      image: "/images/home-commerical-air-diving-operations.png",
    },
    {
      title: "Offshore Platform Structural Integrity",
      date: "February 28, 2025",
      author: "Ocean 9 Team",
      category: "Offshore Services",
      excerpt:
        "Understanding jacket leg anode replacement, marine growth clearing, and structural maintenance for offshore oil & gas platforms.",
      image: "/images/home-offshore-platform-subsea.png",
    },
    {
      title: "Caisson Gate & Port Infrastructure Salvage",
      date: "February 20, 2025",
      author: "Ocean 9 Team",
      category: "Marine Salvage",
      excerpt:
        "Case study on precision underwater heavy lifting, pontoon recovery, and caisson gate maintenance under challenging tidal currents.",
      image: "/images/home-underwater-salvage.png",
    },
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-transparent relative text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-4">
          {/* Badge: Fixed SVG viewBox to prevent star clipping */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] backdrop-blur-md shrink-0">
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
            <span className="font-roboto font-normal text-white text-[14px] tracking-normal">
              Our Blog
            </span>
          </div>

          <h2 className="font-poppins font-normal text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-normal">
            Latest Insights & Articles
          </h2>

          <p className="font-roboto text-white text-sm sm:text-base leading-relaxed">
            Stay updated with expert articles on commercial diving, subsea engineering, and offshore marine operations.
          </p>
        </div>

        {/* Blog Cards Grid with Ocean Watery Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-transparent backdrop-blur-md rounded-[22px] border border-white/20 p-3.5 sm:p-4 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.22)] hover:bg-cyan-500/5 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                {/* Image Container with Ocean Wave Shimmer Sweep */}
                <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Ocean Water Caustic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Oceanic Light Sheen Sweep (Sunlight filtering through water) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#002365]/90 border border-cyan-400/40 text-cyan-300 text-[11px] font-medium tracking-wide group-hover:bg-cyan-400 group-hover:text-[#00173e] group-hover:border-cyan-400 transition-all duration-300 shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Author & Date Metadata */}
                <div className="flex items-center gap-5 text-white/90 text-xs font-normal pt-1">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {post.date}
                  </span>
                </div>

                {/* Blog Title */}
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-[#20c9d2] group-hover:text-white transition-colors duration-300 leading-snug">
                  <Link href="#">{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="font-roboto text-white/85 text-xs sm:text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Oceanic Action Row */}
                <div className="pt-3 flex items-center justify-between border-t border-white/10 mt-2">
                  <span className="text-xs font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                    Read Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-transparent border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#00173e] group-hover:border-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.7)] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
