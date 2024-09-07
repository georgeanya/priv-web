import firstaid from "../public/assets/first-aid.svg";
import heart from "../public/assets/heart.svg";
import world from "../public/assets/world.svg";
import seth from "../public/assets/seth.svg";
import { useEffect, useRef } from "react";

const AutoScrollComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Detect if it's mobile
    const isMobile = window.innerWidth < 768;
    if (!scrollContainer || !isMobile) return;

    const scrollSpeed = 1; // Scroll speed
    const contentWidth = scrollContainer.scrollWidth; // Total width of scrollable content
    let scrollAmount = 0;

    // Function to continuously scroll
    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= contentWidth / 2) {
        scrollAmount = 0; // Reset scroll position to start when halfway
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    // Set interval for auto-scroll
    const scrollInterval = setInterval(autoScroll, 20);

    return () => clearInterval(scrollInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="overflow-x-auto hide-scrollbar bg-[#232B5C]"
      ref={scrollContainerRef}
    >
      {/* The container for both mobile and desktop */}
      <div className="flex md:justify-between py-[30px] md:py-[34px] px-5 md:px-32 w-full flex-nowrap">
        {/* Original content */}
        <div className="flex items-center mx-10 md:mx-0">
          <img src={firstaid.src} alt="" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
            Licensed healthcare experts
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-0">
          <img src={heart.src} alt="" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
            Trusted by 2,000+ men
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-0">
          <img src={seth.src} alt="" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
            Personalized treatment
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-0">
          <img src={world.src} alt="" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
            100% online
          </p>
        </div>

        {/* Duplicate elements only shown on mobile */}
        <div className="flex items-center mx-10 md:mx-0 md:hidden">
          <img src={firstaid.src} alt="" className="w-[18px]" />
          <p className="pl-3 text-[15px] leading-[18px] text-white whitespace-nowrap">
            Licensed healthcare experts
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-0 md:hidden">
          <img src={heart.src} alt="" className="w-[18px]" />
          <p className="pl-3 text-[15px] leading-[18px] text-white whitespace-nowrap">
            Trusted by 2,000+ men
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-0 md:hidden">
          <img src={seth.src} alt="" className="w-[18px]" />
          <p className="pl-3 text-[15px] leading-[18px] text-white whitespace-nowrap">
            Personalized treatment
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-0 md:hidden">
          <img src={world.src} alt="" className="w-[18px]" />
          <p className="pl-3 text-[15px] leading-[18px] text-white whitespace-nowrap">
            100% online
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollComponent;
