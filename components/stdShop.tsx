import React from "react";
import privDoc from "../public/assets/priv-consultation.png";
import privTest from "../public/assets/priv-test.png";
import stars from "../public/assets/stars.svg";
import CenterButton from "./centerButton";

const StdShop = () => {
  return (
    <div className="pl-5 md:px-32 bg-[#EDEFF7]">
      <div className="container mx-auto md:pt-[120px] pt-11 md:pb-36 pb-24 md:flex justify-between ">
        <div className="md:w-[460px] pr-5">
          <h2 className=" leading-tight text-3xl md:text-start md:text-[46px] md:leading-[58px] font-bold text-[#5355AC] md:max-w-[360px]">
            Get evidence-based solutions for STIs/STDs that work
          </h2>
          <p className="mt-5 md:mt-[24px] text-sm leading-[18px] text-[#61616B] hidden md:block md:max-w-[360px]">
            *A consultation with a licensed doctor is required for prescriptions
          </p>
        </div>
        <div className="overflow-x-auto hide-scrollbar mt-10 md:mt-0">
          <div className="max-w-[730px] flex gap-5 md:gap-[30px] flex-nowrap">
            <div className="md:w-[350px] min-w-[310px]  bg-white md:px-[24px] px-5 md:pb-8 py-[28px]  md:pt-[30px] rounded-2xl">
              <div className="flex justify-end">
                <p className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22.7px] font-medium">
                  ₦8,000
                </p>
              </div>
              <img src={privDoc.src} alt="" className="my-5" />
              <p className="text-[20px] leading-[25px] md:text-[24px] md:leading-[30px] font-medium">
                Doctor consultation
              </p>
              <img src={stars.src} alt="" className="my-3" />
              <p className="mb-[24px] text-[#61616B] text-sm leading-[18px] md:text-[16px] md:leading-[20px]">
                Speak to a doctor entirely over the phone. No stigma or
                judgement
              </p>
              <CenterButton title="Get started" href="/sign-up?condition=sti-treatment" />
            </div>
            <div className="md:w-[350px] min-w-[310px]  bg-white md:px-[24px] px-5 md:pb-8 py-[28px]  md:pt-[30px] rounded-2xl">
              <div className="flex justify-end">
                <p className="text-[16px] leading-[20px] md:text-[18px] md:leading-[22.7px] font-medium">
                  ₦70,000
                </p>
              </div>
              <img src={privTest.src} alt="" className="my-5" />
              <p className="text-[20px] leading-[25px] md:text-[24px] md:leading-[30px] font-medium">
                Comprehensive STI test
              </p>
              <img src={stars.src} alt="" className="my-3" />
              <p className="mb-[24px] text-[#61616B] text-sm leading-[18px] md:text-[16px] md:leading-[20px]">
                Screen for common STIs from the comfort of your home
              </p>
              <CenterButton title="Get started" href="/sign-up?condition=sti-treatment" />
            </div>
            <div className="flex-shrink-0 w-[0.1px] md:mr-[-30px]"></div>
          </div>
        </div>
        <p className="mt-[28px] text-[12px] leading-[14.5px] text-[#61616B] text-center px-8 mr-5 md:hidden">
          *A consultation with a licensed doctor is required for prescriptions
        </p>
      </div>
    </div>
  );
};

export default StdShop;
