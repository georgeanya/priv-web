import React from "react";

const Section3 = () => {
  return (
    <div className="px-5 md:px-[125px] bg-[#F8F5FF]">
      <div className="container mx-auto pb-[90px] md:pb-[130px] grid md:grid-cols-2 pt-20 md:pt-[120px] grid-cols-1 md:grid-rows-1 md:gap-[89px] gap-4 ">
        <div className=" pb-[35px] md:pb-0 ">
          <p className="  text-[32px] leading-[40px] md:text-start md:text-[46px] font-bold text-[#5355AC]  md:leading-[58px]">
            We are making men&apos;s health accessible and convenient, the way
            it should be
          </p>
        </div>
        <div className="  text-[#111111]">
          <div className="flex justify-between items-center">
            <p className="text-[16px] leading-[22px] md:text-[22px] md:leading-8">
              Your treatment comes to you. Skip the trip to your doctor&apos;s
              office and the line at your local pharmacy. Access treatment
              online at your convenience
            </p>
          </div>
          <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-[34px] text-[#C0C0D8]" />
          <div className="flex justify-between items-center">
            <p className="text-[16px] leading-[22px] md:text-[22px] md:leading-8">
              Access clinically proven treatments, supported by science and
              prescribed by our experienced men&apos;s health doctors
            </p>
          </div>
          <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-[34px] text-[#C0C0D8]" />
          <div className="flex justify-between items-center">
            <p className="text-[16px] leading-[22px] md:text-[22px] md:leading-8">
              Get truly private and compassionate care. No judgment, no stigma.
              Just, a doctor who is there for you when you need them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
