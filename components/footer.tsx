import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import twitter from "../public/assets/tw.svg";
import sustain from "../public/assets/privw.svg";
import fbook from "../public/assets/fbook.svg";
import insta from "../public/assets/insta.svg";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

const Footer = () => {
  return (
    <div className="bg-[#232B5C] lg:px-32 px-5 lg:pt-36 pt-24  text-white">
      <div className="text-center">
        <p className="text-3xl lg:text-5xl font-bold mb-6">
          Book your consultation now
        </p>
        <p className="text-md lg:text-1xl font-normal mb-11 max-w-2xl flex justify-center m-auto">
          Get seamless and discreet care for conditions that affect your
          everyday life
        </p>
        <SustainButton className="self-center text-xs lg:text-base font-medium">
          Get started today
        </SustainButton>
      </div>
      <hr className="lg:mt-36 mt-28 lg:mb-24 mb-20" />
      <div className="lg:flex lg:justify-between text-start">
        <img src={sustain.src} className="self-start" alt="sustain logo" />
        <div className="">
          <h3 className="lg:mb-8 mb-6 mt-14 lg:mt-0 text-sm lg:text-base font-medium text-[#C8CCEA]">
            Learn more
          </h3>
          <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-white">
            <Link href="/pricing">Blog</Link>
          </p>
          <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-white">
            <Link href="/">Careers</Link>
          </p>
          <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-white">
            <Link href="/research">Terms of use</Link>
          </p>
          <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-white">
            <Link href="/">Privacy policy</Link>
          </p>
        </div>
        <div className="">
          <h3 className="lg:mb-8 mb-6 mt-14 lg:mt-0 text-sm lg:text-base font-medium text-[#C8CCEA]">
            Contact us
          </h3>
          <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-white">
            <Link href="">+2349040559724</Link>
          </p>
          <p className="lg:mb-6 lg:text-sm text-xs mb-5 text-white">
            <Link href="">hello@getsustain.app</Link>
          </p>
        </div>
        <div className="">
          <h3 className="lg:mb-8 mb-6 mt-14 lg:mt-0 text-sm lg:text-base font-medium text-[#C8CCEA]">
            Stay in touch
          </h3>
          <div className="flex">
            <img src={fbook.src} className="mr-5 " alt="facebook logo" />
            <img src={insta.src} className="mr-5 " alt="instagram logo" />
            <img src={twitter.src} className="mr-5 " alt="twitter logo" />
          </div>
        </div>
      </div>
      <p className="lg:mt-32 mt-16 text-sm pb-16 ">
        Sustain © 2021 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
