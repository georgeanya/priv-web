import React from "react";
import hero from "../public/assets/hl-hero.png";
import CustomButton from "./mainButton";

const Hero = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32">
      <div className="container mx-auto pb-[90px] md:pb-20 flex md:grid flex-col md:flex-row md:grid-cols-2 md:justify-between md:gap-15">
        <div className=" md:max-w-[511px] pt-[42px] md:pb-0 md:pt-[117px]">
          <h1 className="text-[34px] md:text-start md:text-5xl md:leading-[60px] font-bold text-[#5355AC] leading-[43px] max-w-md">
            Regrow your hair with  hair loss treatment
          </h1>
          <p className="mt-5 md:mt-5 text-base font-normal md:text-start md:text-[24px] leading-[22px] md:leading-[34px] text-[#333D47]">
            Get effective hair loss treatments that work. Prescribed online by
            licensed men&apos;s health doctors.
          </p>
          <div className="mt-8 ">
          <CustomButton title="Get treatment now" href="/sign-up?condition=hair-loss" />
          </div>
        </div>
        <div className=" mt-[50px] md:mt-0 flex lg:pr-[75px] md:pt-[60px] items-center justify-center">
          <img src={hero.src} alt="hero" className="md:w-[460px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
