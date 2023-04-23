import React from "react";
import image from "../public/assets/avatar.png";

const Section5 = () => {
  return (
    <div>
      <div className="md:py-[130px] md:px-32 py-[90px] px-5">
        <p className="md:text-[18px] md:leading-[21px] mb-4 text-base leading-[19px]">
          CAN I TRUST PRIV?
        </p>
        <p className="text-[#5355AC] md:text-[38px] md:leading-[50px] md:max-w-[750px] font-medium text-[28px] leading-[35px]">
          Our treatments are backed by science and vetted by leading experts in
          men’s health.
        </p>
      </div>
      <div className="md:grid md:grid-cols-2">
        <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 p-6 md:py-14 bg-[#111111]">
          <p className="text-1xl md:text-4xl text-white max-w-3xl">
            “In my experience, the treatments on offer with Priv include the
            most effective medical treatments available to treat premature
            ejaculation and hair loss.”
          </p>
          <div className="pt-10 flex ">
            <img src={image.src} alt="" className="w-12 md:w-17" />
            <div className="self-center pl-3">
              <p className="font-medium text-base md:text-lg text-white">
                Samuel M.
              </p>
              <p className="text-xs md:text-sm text-white">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 p-6 md:py-14 bg-[#1F1F1F]">
          <p className="text-1xl md:text-4xl text-white max-w-3xl">
            “Just wanted to say how affordable and easy Priv has been. I
            recommend Priv to anyone who may be dealing with any of the issues
            that they can help with.”
          </p>
          <div className="pt-10 flex ">
            <img src={image.src} alt="" className="w-12 md:w-17" />
            <div className="self-center pl-3">
              <p className="font-medium text-base md:text-lg text-white">
                Adefemi O.
              </p>
              <p className="text-xs md:text-sm text-white">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
