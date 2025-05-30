import React from "react";
import hero from "../public/assets/ed-hero.png";
import CustomButton from "./mainButton";

const Hero = () => {
  return (
    <div className="px-5 md:px-[125px] bg-[#EDEFF7]">
      <div className="container mx-auto pb-[90px] md:pb-20 flex flex-col md:flex-row md:justify-between">
        <div className=" md:max-w-[511px] pt-[42px] md:pb-0 md:pt-[117px]">
          <p className="text-[34px] md:text-start md:text-5xl md:leading-[60px] font-bold text-[#5355AC] leading-[43px]">
          Do I have erectile dysfunction?
          </p>
          <p className="mt-5 md:mt-5 text-[18px] font-normal md:text-start md:text-[24px] leading-[24px] md:leading-[34px] text-[#111111]">
          This quiz can help determine whether you have the symptoms of erectile dysfunction and get recommendations based on your results.
          </p>
          <p className="mt-[30px] md:text-[14px] text-[13px] text-[#73738C]">*This is an assessment tool. Do not use for diagnostic purposes.</p>
          <div className="mt-[30px] ">
            <CustomButton title="Take the quiz" href="#" />
          </div>
        </div>
        <div className=" mt-[50px] md:mt-0 flex md:pr-[75px] md:pt-[60px] justify-center">
          <img src={hero.src} alt="hero" className="md:w-[460px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
