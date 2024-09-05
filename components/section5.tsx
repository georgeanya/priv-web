import React from "react";
import hero from "../public/assets/expert.png";
import Image from "next/image";

const Section5 = () => {
  return (
    <div className="px-5 md:px-[125px] pb-[90px] md:pb-[130px] md:flex justify-between">
      <div className="pt-20 pb-[50px] md:pb-0 md:pt-[183px] md:max-w-[562px]">
        <p className=" text-[28px] leading-[35px] md:text-start md:text-[42px] font-bold text-[#5355AC] md:leading-[53px]">
          Designed by men’s health experts, just for you
        </p>
        <p className="mt-6 md:mt-[30px] text-xl font-normal pr-3 md:pr-0 md:text-start md:text-[24px] md:leading-9 text-[#333D47]">
          “Our goal is to provide you with a discreet, non-judgmental and
          convenient care that puts you in control and our team of passionate
          healthcare professionals share our belief that every man deserves
          access to safe, discreet and affordable healthcare.”
        </p>
        <p className="md:text-[20px] md:leading-[30px] text-[16px] leading-[22px] mt-6 md:mt-7 mb-1. font-medium">
          Dr. Olusina Ajidahun
        </p>
        <p className="md:text-[20px] md:leading-[30px] text-[16px] leading-[22px] text-[#6C7884]">
          Co-founder
        </p>
      </div>
      <div className="flex md:pr-[75px] md:pt-[120px] md:justify-end">
        <img src={hero.src} alt="hero" className="md: md:max-w-[405px] flex" />
      </div>
    </div>
  );
};

export default Section5;
