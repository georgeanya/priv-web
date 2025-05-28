import React from "react";
import hero from "../public/assets/dc-hero.png";
import { useState, useCallback, useEffect } from "react";
import CustomButton from "./mainButton";
import Link from "next/link";
import firstaid from "../public/assets/first-aid.svg";
import heart from "../public/assets/heart.svg";
import world from "../public/assets/world.svg";
import seth from "../public/assets/seth.svg";

const Hero = () => {
  return (
    <div className="px-5 md:px-[125px]">
      <div className="container mx-auto pb-[90px] md:pb-20 flex flex-col md:flex-row md:justify-between">
        <div className=" md:max-w-[511px] pt-[42px] md:pb-0 md:pt-[117px]">
          <p className="text-[34px] md:text-start md:text-5xl md:leading-[60px] font-bold text-[#5355AC] leading-[43px]">
          Speak to a men’s health doctor
          </p>
          <p className="mt-5 md:mt-5 text-base font-normal md:text-start md:text-[24px] leading-[22px] md:leading-[34px] text-[#333D47]">
          Discuss your health with one of Priv’s doctors. Access quality healthcare virtually, anytime, anywhere.
          </p>
          <div className="mt-8 ">
            <CustomButton title="Start your visit" href="/sign-up?condition=doctor-consultation" />
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
