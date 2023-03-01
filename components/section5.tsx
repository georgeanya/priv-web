import React from "react";
import image from "../public/assets/image.svg";

const Section5 = () => {
  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 p-6 lg:py-14 bg-[#111111]">
      <p className="text-1xl lg:text-4xl text-white max-w-3xl">
        “In my experience, the treatments on offer with Priv include the most
        effective medical treatments available to treat premature ejaculation
        and hair loss.”
      </p>
      <div className="pt-10 flex ">
        <img src={image.src} alt="" className="w-12 lg:w-17" />
        <div className="self-center pl-3">
          <p className="font-medium text-base lg:text-lg text-white">Ezeogo Mang</p>
          <p className="text-xs lg:text-sm text-white">Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
