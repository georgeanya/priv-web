import Link from "next/link";
import React from "react";
import arrow from "../public/assets/arrow.svg";
import support from "../public/assets/pe.png";
import lt from "../public/assets/lt.png";
import mi from "../public/assets/mi.png";
import clock from "../public/assets/clock.png";
import hair from "../public/assets/hl.png";
import std from "../public/assets/std.png";
import men from "../public/assets/men.png";
import mental from "../public/assets/mental.png";
import consultation from "../public/assets/consultation.png";
import supplements from "../public/assets/supplements.png";
import CustomButton from "./mainButton";



const Hero = () => {
  return (
    <div className="pl-5 md:pl-32" >
      <div className="mb-[60px] md:mb-0 md:pb-20">
        <div className=" pt-15 md:pt-[70px]  flex flex-col">
          <div className="md:max-w-md lg:max-w-1xl md:pb-0">
            <p className=" leading-[43px] md:leading-[63px] md:pr-14  text-[34px] md:text-start md:text-[50px] font-bold text-[#5355AC] ">
              Simple and private healthcare for men
            </p>
            <p className="mt-5 md:mt-6 text-base font-normal md:pr-8 md:text-start md:text-xl text-[#111111]">
              What can we help you with
            </p>
          </div>
          <div className="mt-8 md:mt-14 overflow-x-auto hide-scrollbar ">
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
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
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
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
                <img
                  src={std.src}
                  alt=""
                  className=" md:w-full rounded-t-lg "
                />
                <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                  <Link href="/stis">
                    <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                      STIs/STDs
                    </p>
                  </Link>
                  <Link href="/stis">
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
                <img src={lt.src} alt="" className=" md:w-full rounded-t-lg " />
                <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                  <Link href="/low-testosterone">
                    <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px] pr-2">
                      Low testosterone
                    </p>
                  </Link>
                  <Link href="/low-testosterone">
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
                <img src={hair.src} alt="" className=" md:w-full rounded-lg " />
                <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                  <Link href="/hair-loss">
                    <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                      Hair loss
                    </p>
                  </Link>
                  <Link href="/hair-loss">
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
                <img
                  src={mental.src}
                  alt=""
                  className=" md:w-full rounded-t-lg "
                />
                <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                  <Link href="/start">
                    <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                      Mental health
                    </p>
                  </Link>
                  <Link href="/start">
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
                <img
                  src={men.src}
                  alt=""
                  className=" md:w-full rounded-t-lg "
                />
                <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                  <Link href="https://privhealth.bumpa.shop/browse/Lab%20tests">
                    <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                      Men’s health tests
                    </p>
                  </Link>
                  <Link href="https://privhealth.bumpa.shop/browse/Lab%20tests">
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-[240px] relative flex-shrink-0 w-[180px]">
                <img
                  src={consultation.src}
                  alt=""
                  className=" md:w-full rounded-t-lg "
                />
                <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                  <Link href="/start">
                    <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                      Doctor consultation
                    </p>
                  </Link>
                  <Link href="/start">
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-[240px] relative flex-shrink-0 w-[180px] ">
                <img
                  src={supplements.src}
                  alt=""
                  className=" md:w-full rounded-t-lg w-[180px]"
                />
                <div className="md:px-5 px-4 py-4 md:py-[18px] rounded-b-[16px] bg-[#212436] flex flex-row min-h-[86px] items-center justify-between relative md:mt-[-86px] mt-[-78px] z-10">
                  <Link href="https://privhealth.bumpa.shop/browse/Supplements">
                    <p className="font-medium text-lg md:text-[20px] md:leading-[25px] text-white leading-[22px]">
                      Men’s health Supplements
                    </p>
                  </Link>
                  <Link href="https://privhealth.bumpa.shop/browse/Supplements">
                    <img
                      src={arrow.src}
                      alt="arrow"
                      className="min-w-[30px] md:min-w-[40px] max-w-[30px] md:max-w-[40px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0 w-1 md:w-[95px]"></div>
            </div>
          </div>
        </div>
        <div className=" text-sm md:text-base font-medium mt-[32px] md:hidden ">
          <CustomButton title="Find my treatment" href="/what-we-treat"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
