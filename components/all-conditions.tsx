import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import whitearrow from "../public/assets/whitearrow.svg";
import Link from "next/link";
import Image from "next/image";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%  ",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const StartSuccess = () => {
  return (
    <div className="max-w-[400px] mx-5 sm:mx-auto mt-[25px] md:mt-10">
      <p className="leading-tight md:text-[28px] text-2xl font-bold text-[#5355AC] text-center">
      What can we help you with?
      </p>
      <p className="leading-[22px] text-[16px] md:text-[18px] text-2xl md:mt-3  text-[#111111] text-center">
      Select a condition to get started
      </p>
      <Link title="Erectile dysfunction" href="/ed">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[35px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Erectile dysfunction
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="Premature ejaculation" href="/premature-ejaculation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Premature ejaculation
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="Low testosterone" href="/low-testosterone">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Low testosterone
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="Men's health tests" href="https://privhealth.bumpa.shop/browse/Lab%20tests">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Men’s health tests
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="STI treatment" href="/stis">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          STI treatment
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="Hair loss" href="/hair-loss">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Hair loss
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="Mental health" href="/start?condition=mental-health">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Mental health
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="Doctor consultation" href="/start?condition=doctor-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Doctor consultation
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link title="Supplements" href="https://privhealth.bumpa.shop/browse/Supplements">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[52px] md:mb-[96px] flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Supplements
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
    </div>
  );
};

export default StartSuccess;
