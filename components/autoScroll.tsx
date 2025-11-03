import firstaid from "../public/assets/first-aid.svg";
import heart from "../public/assets/heart.svg";
import world from "../public/assets/world.svg";
import seth from "../public/assets/seth.svg";
import { useEffect, useRef } from "react";

const AutoScrollComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const scrollSpeed = 1; // Scroll speed
    const contentWidth = scrollContainer.scrollWidth; // Total width of scrollable content
    let scrollAmount = 0;

    // Function to continuously scroll
    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= contentWidth) {
        scrollAmount = 0; // Reset scroll position to start
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    // Set interval for auto-scroll
    const scrollInterval = setInterval(autoScroll, 20);

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-[#232B5C] overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll hide-scrollbar py-[30px] md:py-[34px] px-5 md:px-20 lg:px-32 w-full whitespace-nowrap"
      >
        {/* Content */}
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={firstaid.src} alt="First Aid" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            Licensed healthcare experts
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={heart.src} alt="Heart" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            Trusted by 2,000+ men
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={seth.src} alt="Seth" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            Personalized treatment
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={world.src} alt="World" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            100% online
          </p>
        </div>

        {/* Duplicate content for seamless looping */}
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={firstaid.src} alt="First Aid" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            Licensed healthcare experts
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={heart.src} alt="Heart" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            Trusted by 2,000+ men
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={seth.src} alt="Seth" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            Personalized treatment
          </p>
        </div>
        <div className="flex items-center mx-10 md:mx-[54px]">
          <img src={world.src} alt="World" className="w-[18px] md:w-5" />
          <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white">
            100% online
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollComponent;
