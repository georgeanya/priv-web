import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import product from "../public/assets/product.png";
import stars from "../public/assets/stars.svg";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "10px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const EdShop = () => {
  return (
    <div className="pl-5 md:px-32 md:pt-[120px] pt-11 md:pb-36 pb-24 md:flex justify-between bg-[#EDEFF7]">
      <div className="md:w-[360px] pr-5">
        <p className=" leading-tight text-3xl md:text-start md:text-[46px] md:leading-[58px] font-bold text-[#5355AC] md:max-w-[591px]">
          Get evidence-based solutions for STIs/STDs that work
        </p>
        <p className="mt-5 md:mt-[24px] text-sm leading-[18px] text-[#61616B] hidden md:block">
          *A consultation with a licensed doctor is required for prescriptions
        </p>
      </div>
      <div className="overflow-x-auto hide-scrollbar mt-10 md:mt-0">
        <div className="max-w-[730px] flex gap-5 md:gap-[30px] flex-nowrap">
          <div className="md:w-[350px] min-w-[310px]  bg-white md:px-[24px] px-5 md:pb-8 py-[28px]  md:pt-[30px] rounded-2xl">
            <div className="flex justify-between">
              <p className="text-[#5355AC] bg-[#EDEFF7] rounded-[15px] px-3 py-1 text-xs md:text-sm leading-[17px]">
                Prescription only
              </p>
              <p className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22.7px] font-medium">
                ₦22,000
              </p>
            </div>
            <img src={product.src} alt="" className="my-5" />
            <p className="text-[20px] leading-[25px] md:text-[24px] md:leading-[30px] font-medium">
              Always ready gummies
            </p>
            <img src={stars.src} alt="" className="my-3" />
            <p className="mb-[24px] text-[#61616B] text-sm leading-[18px] md:text-[16px] md:leading-[20px]">
              Take one gummy daily and you’ll be ready at all times
            </p>
            <Link href="/start">
              <SustainButton>Get started</SustainButton>
            </Link>
          </div>
          <div className="md:w-[350px] min-w-[310px]  bg-white md:px-[24px] px-5 md:pb-8 py-[28px]  md:pt-[30px] rounded-2xl">
            <div className="flex justify-between">
              <p className="text-[#5355AC] bg-[#EDEFF7] rounded-[15px] px-3 py-1 text-xs md:text-sm leading-[17px]">
                Prescription only
              </p>
              <p className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22.7px] font-medium">
                ₦15,000
              </p>
            </div>
            <img src={product.src} alt="" className="my-5" />
            <p className="text-[20px] leading-[25px] md:text-[24px] md:leading-[30px] font-medium">
              Game time gummies
            </p>
            <img src={stars.src} alt="" className="my-3" />
            <p className="mb-[24px] text-[#61616B] text-sm leading-[18px] md:text-[16px] md:leading-[20px]">
              Take one gummy 30 mins before the big game for 4-6 hours of fun
            </p>
            <Link href="/start">
            <SustainButton>Get started</SustainButton>
          </Link>
          </div>
          <div className="flex-shrink-0 w-[0.1px] md:mr-[-30px]"></div>
        </div>
      </div>
      <p className="mt-[28px] text-[12px] leading-[14.5px] text-[#61616B] text-center px-8 mr-5 md:hidden">
        *A consultation with a licensed doctor is required for prescriptions
      </p>
    </div>
  );
};

export default EdShop;
