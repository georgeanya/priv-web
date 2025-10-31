import React from "react";
import Image from "next/image";
import stars from "../public/assets/stars.svg";

const Testiomonials = () => {
  return (
    <div className="px-5 md:px-[125px] bg-[#F6F1EE]">
      <div className="container mx-auto md:pt-28 pt-20 md:pb-28 pb-[90px]   ">
      <h2 className="text-[28px] leading-9 md:text-start md:text-4xl md:max-w-xl font-bold mr-3 md:mr-0 text-[#5355AC] ">
      Trusted by 2,000+ men
      </h2>
      <p className="mt-5 md:mt-6 text-[16px] leading-[24px] font-normal md:pr-8 md:text-start md:text-[20px] md:leading-6 text-[#11111]">
        See what some of our patients say about us
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 gap-5 md:gap-6 mt-10 md:mt-12">
        <div className="md:px-10 md:py-12 px-5 py-8 bg-white rounded-2xl">
          <p className="text-[18px] leading-[26px] md:text-[22px] md:leading-[34px] text-[#333D47]">
            As a man, I never thought I would open up about my health struggles,
            but my Priv doctor made me feel comfortable and supported. No
            judgment, just help.
          </p>
          <div className="flex justify-between items-center mt-6">
            <p className="md:text-[18px] md:leading-[30px] text-[16px] leading-[20px] text-[#6C7884] ">
              Adefemi
            </p>
            <Image src={stars} alt="" />
          </div>
        </div>
        <div className="md:px-10 md:py-12 px-5 py-8 bg-white rounded-2xl">
          <p className="text-[18px] leading-[26px] md:text-[22px] md:leading-[34px] text-[#333D47]">
            I encouraged my partner to seek help for his bedroom issues, and
            Priv provided a safe and supportive space for him to do so. I am
            grateful for their services!
          </p>
          <div className="flex justify-between items-center mt-6">
            <p className="md:text-[18px] md:leading-[30px] text-[16px] leading-[20px] text-[#6C7884] ">
              Betty
            </p>
            <Image src={stars} alt="" />
          </div>
        </div>
        <div className="md:px-10 md:py-12 px-5 py-8 bg-white rounded-2xl">
          <p className="text-[18px] leading-[26px] md:text-[22px] md:leading-[34px] text-[#333D47]">
            The process was a whole lot easier and faster than I imagined. And
            the doctor was absolutely helpful and answered relatively fast. I
            highly recommend Priv.
          </p>
          <div className="flex justify-between items-center mt-6">
            <p className="md:text-[18px] md:leading-[30px] text-[16px] leading-[20px] text-[#6C7884] ">
              Johnson
            </p>
            <Image src={stars} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testiomonials;
