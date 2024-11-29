import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import no1 from "../public/assets/no1.svg";
import no2 from "../public/assets/no2.svg";
import no3 from "../public/assets/no3.svg";
import rectangle1 from "../public/assets/Rectangle1.png";
import rectangle2 from "../public/assets/Rectangle2.png";
import rectangle3 from "../public/assets/Rectangle3.png";
import Link from "next/link";
import Image from "next/image";



const Section4 = () => {
  return (
    <div className="px-5 md:px-[125px]">
      <div className="container mx-auto md:pt-[120px] md:pb-[130px] py-[80px]">
      <p className=" text-3xl md:text-start md:text-[38px] leading-[48px] md:max-w-xl font-bold text-[#5355AC]">
        How Priv works
      </p>
      <div className=" min-w-full mt-10 md:mt-[60px] md:grid grid-flow-col grid-cols-3 gap-20">
        <div>
          <div className="">
            <div className="relative mb-6 md:mb-7">
              <Image src={no1} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle1} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-[26px] md:leading-[32px] text-[#111111] font-medium">
                Tell us about you
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#111111] mt-2.5 md:mt-4">
              Answer a few questions about your symptoms. A doctor will assess
              you and get back to you within 24 hours
            </p>
          </div>
        </div>

        <div>
          <div className="mt-[50px] md:mt-0">
            <div className="relative mb-6 md:mb-7">
              <Image src={no2} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle2} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-[26px] md:leading-[32px] text-[#111111] font-medium">
                Get personalized treatment
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#111111] mt-2 md:mt-4">
              Receive your personalized treatment plan and medicines directly at
              home within 24 hours after it is approved
            </p>
          </div>
        </div>

        <div>
          <div className="mt-[50px] md:mt-0">
            <div className="relative mb-6 md:mb-7">
              <Image src={no3} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle3} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-[26px] md:leading-[32px] text-[#111111] font-medium">
                Ongoing support
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#111111] mt-2 md:mt-4">
              Reach out to us at any time to discuss updating your treatment or
              answer other treatment-related questions
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section4;
