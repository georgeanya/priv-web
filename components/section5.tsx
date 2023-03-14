import React from "react";
import image from "../public/assets/image.svg";

const Section5 = () => {
  return (
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 p-6 md:py-14 bg-[#111111]">
      <p className="text-1xl md:text-4xl text-white max-w-3xl">
        “In my experience, the treatments on offer with Priv include the most
        effective medical treatments available to treat premature ejaculation
        and hair loss.”
      </p>
      <div className="pt-10 flex ">
        <img src={image.src} alt="" className="w-12 md:w-17" />
        <div className="self-center pl-3">
          <p className="font-medium text-base md:text-lg text-white">
            Samuel Ude-Mang
          </p>
          <p className="text-xs md:text-sm text-white">Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
