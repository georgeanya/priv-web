import Link from "next/link";
import React from "react";
import arrow from "../public/assets/arrow.svg";
import firstaid from "../public/assets/first-aid.svg";
import heart from "../public/assets/heart.svg";
import world from "../public/assets/world.svg";
import seth from "../public/assets/seth.svg";
import support from "../public/assets/pe.png";
import clock from "../public/assets/clock.png";
import hair from "../public/assets/hair.png";
import std from "../public/assets/std.png";
import men from "../public/assets/men.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const Hero = () => {
  return (
    <>
      <div className="pl-5 md:pl-32 pt-15 md:pt-[70px]  flex flex-col">
        <div className="md:max-w-md lg:max-w-1xl md:pb-0">
          <p className=" leading-[43px] md:leading-[63px] md:pr-14  text-[34px] md:text-start md:text-[50px] font-bold text-[#5355AC] ">
            Simple and private healthcare for men
          </p>
          <p className="mt-5 md:mt-6 text-base font-normal md:pr-8 md:text-start md:text-xl text-[#111111]">
            What can we help you with
          </p>
        </div>
        <div className="mt-8 md:mt-14 overflow-x-auto hide-scrollbar">
          <div className="flex flex-nowrap md:gap-x-[30px] gap-x-4">
            <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
              <img
                src={support.src}
                alt=""
                className=" md:w-full rounded-t-lg "
              />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] mb z-10">
                <Link href="/ed">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    Erectile dysfunction
                  </p>
                </Link>
                <Link href="/ed">
                  <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>
            <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
              <img
                src={clock.src}
                alt=""
                className=" md:w-full rounded-t-lg "
              />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                <Link href="/premature-ejaculation">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    Premature ejaculation
                  </p>
                </Link>
                <Link href="/premature-ejaculation">
                  <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>
            <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
              <img src={std.src} alt="" className=" md:w-full rounded-t-lg " />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                <Link href="/stis">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    STIs/STDs
                  </p>
                </Link>
                <Link href="/stis">
                  <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>
            <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
              <img src={men.src} alt="" className=" md:w-full rounded-t-lg " />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                <Link href="/ed">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    Men’s health tests
                  </p>
                </Link>
                <Link href="/ed">
                  <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>
            <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
              <img src={hair.src} alt="" className=" md:w-full rounded-t-lg " />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                <Link href="/hair-loss">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    Hair loss
                  </p>
                </Link>
                <Link href="/hair-loss">
                  <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>
            {/* <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
              <img
                src={support.src}
                alt=""
                className=" md:w-full rounded-t-lg "
              />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                <Link href="/ed">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    Erectile dysfunction
                  </p>
                </Link>
                <Link href="/ed">
                  <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>
            <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
              <img
                src={support.src}
                alt=""
                className=" md:w-full rounded-t-lg "
              />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                <Link href="/ed">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    Erectile dysfunction
                  </p>
                </Link>
                <Link href="/ed">
                  <img src={arrow.src} alt="arrow" className="w-8 md:w-10" />
                </Link>
              </div>
            </div>
            <div className="md:w-[240px] relative flex-shrink-0 w-[180px] ">
              <img
                src={support.src}
                alt=""
                className=" md:w-full rounded-t-lg w-[180px]"
              />
              <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                <Link href="/ed">
                  <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                    Erectile dysfunction
                  </p>
                </Link>
                <Link href="/ed">
                  <img
                    src={arrow.src}
                    alt="arrow"
                    className="min-w-8 md:min-w-10"
                  />
                </Link>
              </div>
            </div> */}
            <div className="flex-shrink-0 w-1 md:w-[95px]"></div>
          </div>
        </div>
      </div>
      <div className="self-center text-sm md:text-base font-medium mt-[32px] md:hidden px-5">
        <Link href="/start">
          <SustainButton>Find my treatment</SustainButton>
        </Link>
      </div>
      <div className="overflow-x-auto hide-scrollbar bg-[#232B5C] mt-[60px] md:mt-20">
        <div className="md:py-[34px] py-[30px] md:px-32 w-full flex md:justify-between flex-nowrap">
          <div className="flex items-center mx-5">
            <img src={firstaid.src} alt="" className="w-[18px] md:w-5" />
            <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
              Licensed healthcare experts
            </p>
          </div>
          <div className="flex items-center mx-5">
            <img src={heart.src} alt="" className="w-[18px] md:w-5" />
            <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
              Trusted by 2,000+ men
            </p>
          </div>
          <div className="flex items-center mx-5">
            <img src={seth.src} alt="" className="w-[18px] md:w-5" />
            <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
              Personalized treatment
            </p>
          </div>
          <div className="flex items-center mx-5">
            <img src={world.src} alt="" className="w-[18px] md:w-5" />
            <p className="pl-3 text-[15px] leading-[18px] md:text-lg md:leading-[21px] text-white whitespace-nowrap">
              100% online
            </p>
          </div>
          <div className="flex-shrink-0 w-5 md:w-0"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
