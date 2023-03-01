import React from "react";
import arrow from "../public/assets/arrow.svg";

const Hero = () => {
  return (
    <div className="px-5 lg:px-32 pt-15 lg:pt-22 pb-20 lg:pb-40 flex flex-col">
      <div className="md:max-w-md lg:max-w-1xl lg:pb-0">
        <p className=" leading-tight lg:leading-tight lg:pr-14  text-3xl lg:text-start lg:text-5xl font-bold text-[#002A47] ">
          Private and personalized treatment plans for you
        </p>
        <p className="mt-5 md:mt-6 text-base font-normal lg:pr-8 lg:text-start lg:text-xl text-[#476D85]">
          Tell us what we can help you with
        </p>
      </div>
      <div className="mt-8 lg:mt-14 ">
        <div className="grid lg:grid-cols-3 grid-cols-2 grid-rows-3 lg:grid-rows-2 lg:gap-7 gap-4">
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#EEEAF5] flex flex-col justify-between">
            <p className="font-medium text-lg lg:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Erectile dysfunction
            </p>
            <img src={arrow.src} alt="arrow" className='w-8 lg:w-10' />
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#E4F0FC] flex flex-col justify-between">
            <p className="font-medium text-lg lg:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Premature ejaculation
            </p>
            <img src={arrow.src} alt="arrow" className='w-8 lg:w-10' />
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#F7E9EA] flex flex-col justify-between">
            <p className="font-medium text-lg lg:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Vaginal dryness
            </p>
            <img src={arrow.src} alt="arrow" className='w-8 lg:w-10' />
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#ECF3F1] flex flex-col justify-between">
            <p className="font-medium text-lg lg:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Hair loss
            </p>
            <img src={arrow.src} alt="arrow" className='w-8 lg:w-10' />
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#F8F2E7] flex flex-col justify-between">
            <p className="font-medium text-lg lg:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Genital herpes
            </p>
            <img src={arrow.src} alt="arrow" className='w-8 lg:w-10' />
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#ECECF4] flex flex-col justify-between">
            <p className="font-medium text-lg lg:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Cold sores
            </p>
            <img src={arrow.src} alt="arrow" className='w-8 lg:w-10' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
