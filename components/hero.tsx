import React from "react";
import arrow from "../public/assets/arrow.svg";

const Hero = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-22 pb-20 lg:pb-40 flex flex-col">
      <div className="md:max-w-md lg:max-w-1xl pb-17 lg:pb-0">
        <p className=" leading-tight lg:leading-tight lg:pr-14  text-3xl lg:text-start lg:text-5xl font-bold text-[#002A47] ">
          Private and personalized treatment plans for you
        </p>
        <p className="mt-5 md:mt-6 text-base font-normal lg:pr-8 lg:text-start lg:text-xl text-[#476D85]">
          Tell us what we can help you with
        </p>
      </div>
      <div className="mt-8 lg:mt-14 ">
        <div className="grid grid-cols-3 grid-rows-2 gap-7">
          <div className="px-6 py-8 rounded-3xl bg-[#EEEAF5]">
            <p className="font-medium text-2xl text-[#111111] mb-5">
              Erectile dysfunction
            </p>
            <img src={arrow.src} alt="arrow" />
          </div>
          <div className="px-6 py-8 rounded-3xl bg-[#E4F0FC]">
            <p className="font-medium text-2xl text-[#111111] mb-5">
              Premature ejaculation
            </p>
            <img src={arrow.src} alt="arrow" />
          </div>
          <div className="px-6 py-8 rounded-3xl bg-[#F7E9EA]">
            <p className="font-medium text-2xl text-[#111111] mb-5">
              Vaginal dryness
            </p>
            <img src={arrow.src} alt="arrow" />
          </div>
          <div className="px-6 py-8 rounded-3xl bg-[#ECF3F1]">
            <p className="font-medium text-2xl text-[#111111] mb-5">
              Hair loss
            </p>
            <img src={arrow.src} alt="arrow" />
          </div>
          <div className="px-6 py-8 rounded-3xl bg-[#F8F2E7]">
            <p className="font-medium text-2xl text-[#111111] mb-5">
              Genital herpes
            </p>
            <img src={arrow.src} alt="arrow" />
          </div>
          <div className="px-6 py-8 rounded-3xl bg-[#ECECF4]">
            <p className="font-medium text-2xl text-[#111111] mb-5">
              Cold sores
            </p>
            <img src={arrow.src} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
