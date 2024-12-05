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

    const scrollSpeed = 1; // Pixels to scroll per tick
    let animationFrameId: number;

    // Function to perform smooth scrolling
    const smoothScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0; // Reset to start for seamless loop
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    // Start scrolling
    smoothScroll();

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[#232B5C] overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll hide-scrollbar py-[30px] md:py-[34px] px-5 md:px-32 w-full whitespace-nowrap"
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
