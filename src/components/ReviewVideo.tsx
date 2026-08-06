"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, X, ArrowRight, VideoOff } from "lucide-react";
import Image from 'next/image';

interface VideoCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  timestamp: string;
  transcript: string;
  reviewerName: string;
  rating: number;
}

const videos: VideoCard[] = [
  {
    id: 1,
    title: "OFFSHORE PLATFORM INSPECTION",
    subtitle: "CLIENT TESTIMONIAL",
    description: "Subsea structural audit and underwater platform maintenance completed with zero safety incidents.",
    videoUrl: "",
    thumbnailUrl: "/assets/home-offshore-operations-card.png",
    timestamp: "0:00",
    transcript: "Ocean 9 delivered exceptional underwater inspection and maintenance for our offshore platforms. Their diving team was highly professional, safety-focused, and completed all subsea tasks smoothly.",
    reviewerName: "Capt. Rajesh Sharma",
    rating: 5
  },
  {
    id: 2,
    title: "CAISSON GATE SALVAGE",
    subtitle: "PROJECT SPOTLIGHT",
    description: "Successful recovery and underwater salvage operation of a 247-ton caisson gate under challenging marine conditions.",
    videoUrl: "",
    thumbnailUrl: "/images/home-underwater-salvage.png",
    timestamp: "0:00",
    transcript: "The underwater salvage operation executed by Ocean 9 was flawless. Their technical expertise, trained diving crews, and marine support equipment ensured complete safety and precision throughout.",
    reviewerName: "Anil Kulkarni",
    rating: 5
  },
  {
    id: 3,
    title: "UNDERWATER WELDING & REPAIR",
    subtitle: "CLIENT TESTIMONIAL",
    description: "High-precision commercial wet welding and structural reinforcement for harbor dock gates and subsea pilings.",
    videoUrl: "",
    thumbnailUrl: "/assets/home-air-diving-card.png",
    timestamp: "0:00",
    transcript: "Working with Ocean 9 Offshore Services has been an outstanding experience. Their underwater welding and diving support for our port infrastructure met the highest industry standards.",
    reviewerName: "Vikram Singh",
    rating: 5
  },
  {
    id: 4,
    title: "SUBSEA PIPELINE INSPECTION",
    subtitle: "CLIENT TESTIMONIAL",
    description: "Advanced NDT testing and subsea pipeline thickness survey conducted by certified mixed gas commercial divers.",
    videoUrl: "",
    thumbnailUrl: "/assets/home-saturation-diving-card.png",
    timestamp: "0:00",
    transcript: "Ocean 9 provided top-tier subsea pipeline inspection and NDT testing. Their equipment, diving safety protocols, and detailed reporting made them our trusted marine engineering partner.",
    reviewerName: "Suresh Nair",
    rating: 5
  },
  {
    id: 5,
    title: "DREDGING & DIVE SUPPORT",
    subtitle: "CLIENT SPOTLIGHT",
    description: "Rapid-response commercial diving crew deployment for harbor clearing, sediment management, and gate maintenance.",
    videoUrl: "",
    thumbnailUrl: "/images/home-commerical-air-diving-operations.png",
    timestamp: "0:00",
    transcript: "Ocean 9's commercial diving crew responded promptly to our emergency harbor maintenance request. Efficient, fully equipped, and zero compromise on safety guidelines.",
    reviewerName: "Amitabh Roy",
    rating: 5
  },
  {
    id: 6,
    title: "CABLE REPAIR & PROTECTION",
    subtitle: "CLIENT TESTIMONIAL",
    description: "Subsea cable trenching, protection, and underwater jointing services for offshore power and telecommunications infrastructure.",
    videoUrl: "",
    thumbnailUrl: "/images/home-cable-repair-small.png",
    timestamp: "0:00",
    transcript: "From initial subsea survey to final execution, Ocean 9's offshore team demonstrated remarkable capability and discipline. Truly a dependable partner for underwater operations.",
    reviewerName: "Gaurav Mehta",
    rating: 5
  }
];

// Duplicate data for seamless looping
const COPIES = 4;
const duplicatedVideos = Array.from({ length: COPIES }).flatMap(() => videos);

export default function ReviewVideo() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [selectedVideo, setSelectedVideo] = useState<VideoCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const translateX = useRef(0);
  const isDragging = useRef(false);
  const isPausedRef = useRef(false);
  const isInitialized = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalWidth = useRef(0);
  const scrollSpeed = 0.5;

  const calculateWidth = useCallback(() => {
    if (!containerRef.current) return;
    const fullScrollWidth = containerRef.current.scrollWidth;
    totalWidth.current = fullScrollWidth / COPIES;
    if (!isInitialized.current) {
      translateX.current = -totalWidth.current;
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
      isInitialized.current = true;
    }
  }, []);

  const wrapTranslateX = useCallback(() => {
    if (!containerRef.current) return;
    if (translateX.current >= 0) {
      translateX.current -= totalWidth.current;
    }
    if (translateX.current <= -totalWidth.current * (COPIES - 1)) {
      translateX.current += totalWidth.current;
    } else if (translateX.current <= -totalWidth.current) {
      while (translateX.current <= -totalWidth.current * 2) {
        translateX.current += totalWidth.current;
      }
    }
  }, []);

  const animate = useCallback(() => {
    if (!isPausedRef.current && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;
      wrapTranslateX();
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [wrapTranslateX]);

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    isPausedRef.current = true;
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    startX.current = clientX;
    scrollLeft.current = translateX.current;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const walk = (clientX - startX.current) * 2;
    translateX.current = scrollLeft.current + walk;
    wrapTranslateX();
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    isPausedRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    
    if (isHorizontalScroll) {
      e.preventDefault();
      e.stopPropagation();
      
      const scrollAmount = e.deltaX * 0.5;
      translateX.current -= scrollAmount;
      wrapTranslateX();
      
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${translateX.current}px)`;
      }
    }
  };

  const handlePlayClick = (video: VideoCard) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", () => {
      if (containerRef.current) {
        totalWidth.current = containerRef.current.scrollWidth / COPIES;
      }
    });
    animationRef.current = requestAnimationFrame(animate);

    const handleWheelCapture = (e: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (isHorizontalScroll) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    document.addEventListener('wheel', handleWheelCapture, { passive: false });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('wheel', handleWheelCapture);
    };
  }, [animate, calculateWidth]);

  return (
    <>
      <div className="w-full overflow-hidden py-2">
        <div className="w-full">
          <div
            className="relative py-2"
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onWheel={handleWheel}
          >
            <div 
              ref={containerRef}
              className="flex w-max will-change-transform cursor-grab active:cursor-grabbing gap-6 py-4"
            >
              {duplicatedVideos.map((video, index) => {
                const videoId = `${index}-${video.id}`;
                
                return (
                  <VideoCardItem
                    key={videoId}
                    video={video}
                    videoId={videoId}
                    onPlayClick={handlePlayClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Ocean 9 Themed Modal Popup */}
      {isModalOpen && selectedVideo && (
        <div 
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999] p-4 sm:p-6 overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#001947] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl text-white my-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
              {/* Left Side: Video Not Available Placeholder */}
              <div className="relative bg-[#001438] p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[380px] overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                <Image
                  src={selectedVideo.thumbnailUrl}
                  alt={selectedVideo.title}
                  fill
                  className="object-cover opacity-20 filter blur-xs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001438] via-[#001438]/80 to-[#001438]/60" />

                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-[#20c9d2] mx-auto shadow-xl backdrop-blur-md">
                    <VideoOff className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-poppins font-bold text-white text-xl sm:text-2xl tracking-tight">
                      Video Not Available
                    </h4>
                    <p className="font-roboto text-slate-300 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
                      Video recordings and dive logs are available upon request for authorized client audits.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Ocean 9 Client Review Details */}
              <div className="bg-[#001947] p-6 sm:p-8 flex flex-col justify-between relative">
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-5 pt-2">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5">
                    {[...Array(selectedVideo.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#20c9d2] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Reviewer Info */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white mb-1">{selectedVideo.reviewerName}</h3>
                    <p className="text-xs sm:text-sm font-bold text-[#20c9d2] tracking-wide uppercase mb-0.5">{selectedVideo.title}</p>
                    <p className="text-xs text-slate-300 font-medium tracking-wide uppercase">{selectedVideo.subtitle}</p>
                  </div>
                  
                  {/* Transcript */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2.5">What They Said</h4>
                    <div className="bg-[#002365] p-4 sm:p-5 rounded-2xl border border-white/10 shadow-inner">
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-roboto">
                        &quot;{selectedVideo.transcript}&quot;
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button 
                    onClick={() => {
                      handleCloseModal();
                      const contactEl = document.getElementById("contact");
                      if (contactEl) {
                        contactEl.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-[#002365] py-3.5 px-6 rounded-full font-dm-sans font-medium text-[15px] transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <span>Request Project Quote</span>
                    <div className="w-7 h-7 rounded-full bg-[#002365] flex items-center justify-center text-white shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const VideoCardItem: React.FC<{
  video: VideoCard;
  videoId: string;
  onPlayClick: (video: VideoCard) => void;
}> = ({ video, onPlayClick }) => {
  return (
    <div
      className="flex-shrink-0 relative bg-[#001947] rounded-2xl overflow-hidden h-[340px] sm:h-[360px] md:h-[400px] lg:h-[420px] w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px] group mx-2 hover:-translate-y-2 duration-300 transition-all shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 select-none cursor-pointer border border-white/10"
      data-card="true"
      draggable={false}
      onClick={() => onPlayClick(video)}
      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
    >
      <Image
        src={video.thumbnailUrl}
        alt={`${video.reviewerName} - Ocean 9`}
        fill
        sizes="(max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-opacity duration-300"
        draggable={false}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#001947] via-[#001947]/50 to-black/30" />
      
      {/* Play/View Button - Fades out on hover to remove white artifacts */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPlayClick(video);
        }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 z-20 cursor-pointer shadow-lg"
      >
        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
      </button>

      {/* Normal state card text - fades out cleanly on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 select-none space-y-1.5 group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex items-center gap-1 select-none">
          {[...Array(video.rating)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-[#20c9d2] fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <div className="select-none">
          <h4 className="font-poppins font-bold text-sm sm:text-base text-white select-none line-clamp-1">{video.reviewerName}</h4>
          <p className="text-xs text-[#20c9d2] font-semibold select-none line-clamp-1">{video.title}</p>
        </div>

        <div className="relative select-none pt-0.5">
          <p className="text-xs text-slate-200 leading-relaxed line-clamp-2 opacity-90 font-roboto select-none">
            &quot;{video.transcript}&quot;
          </p>
        </div>
      </div>

      {/* Transparent Glass hover state overlay */}
      <div className="absolute inset-0 bg-[#001438]/80 backdrop-blur-md border border-white/20 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center text-center select-none z-30 rounded-2xl">
        <div className="flex items-center justify-center gap-1 mb-2 select-none">
          {[...Array(video.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#20c9d2] fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <h4 className="font-poppins font-bold text-base text-white mb-1 select-none">{video.reviewerName}</h4>
        <p className="text-xs text-[#20c9d2] font-semibold mb-2 select-none">{video.title}</p>
        <p className="text-xs leading-relaxed text-slate-200 line-clamp-3 mb-4 font-roboto select-none">
          &quot;{video.transcript}&quot;
        </p>
        <div className="flex justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlayClick(video);
            }}
            className="bg-white hover:bg-slate-100 text-[#002365] px-5 py-2 rounded-full text-xs font-bold transition-colors duration-200 select-none shadow-md cursor-pointer"
          >
            Read Testimonial
          </button>
        </div>
      </div>
    </div>
  );
};
