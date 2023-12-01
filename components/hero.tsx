import Link from "next/link";
import React from "react";
import arrow from "../public/assets/arrow.svg";

const Hero = () => {
  return (
    <div className="px-5 md:px-32 pt-15 md:pt-[70px] pb-20 md:pb-40 flex flex-col">
      <div className="md:max-w-md lg:max-w-1xl md:pb-0">
        <p className=" leading-tight md:leading-tight md:pr-14  text-3xl md:text-start md:text-5xl font-bold text-[#5355AC] ">
          Private and personalized treatment plans for you
        </p>
        <p className="mt-5 md:mt-6 text-base font-normal md:pr-8 md:text-start md:text-xl text-[#111111]">
          Tell us what we can help you with
        </p>
      </div>
      <div className="mt-8 md:mt-14 ">
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-4 md:grid-rows-2 md:gap-7 gap-4">
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#EEEAF5] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Erectile dysfunction
            </p>
            <Link href="/ed">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#E4F0FC] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Low sex drive
            </p>
            <Link href="/hair-loss">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#F7E9EA] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Premature ejaculation
            </p>
            <Link href="/premature-ejaculation">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#ECF3F1] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Hair loss
            </p>
            <Link href="/hair-loss">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#E4F0FC] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Enlarged prostate
            </p>
            <Link href="/start">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#EEEAF5] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Poor sleep
            </p>
            <Link href="/start">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#ECF3F1] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              STI treatment
            </p>
            <Link href="/start">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
          <div className="md:px-6 px-5 py-6 md:py-8 rounded-3xl bg-[#F7E9EA] flex flex-col justify-between">
            <p className="font-medium text-lg md:text-2xl text-[#111111] mb-3.5 md:mb-5 leading-6">
              Supplements
            </p>
            <Link href="https://privhealth.bumpa.shop">
              <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
