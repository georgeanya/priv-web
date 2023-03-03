import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import twitter from "../public/assets/tw.svg";
import sustain from "../public/assets/privw.svg";
import fbook from "../public/assets/fbook.svg";
import insta from "../public/assets/insta.svg";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
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
    <div className="bg-[#232B5C] md:px-32 px-5 md:pt-36 pt-24  text-white">
      <div className="text-center">
        <p className="text-3xl md:text-5xl font-bold mb-6">
          Book your consultation now
        </p>
        <p className="text-md md:text-1xl font-normal mb-11 max-w-2xl flex justify-center m-auto">
          Get seamless and discreet care for conditions that affect your
          everyday life
        </p>
        <Link href='/start'>
          <SustainButton className="self-center text-sm md:text-base font-medium">
            Get started today
          </SustainButton>
        </Link>
      </div>
      <hr className="md:mt-36 mt-28 md:mb-24 mb-20" />
      <div className="md:flex md:justify-between text-start">
        <img src={sustain.src} className="self-start" alt="sustain logo" />
        <div className="flex flex-wrap">
          <div className="w-40 md:w-72">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base font-medium text-[#C8CCEA]">
              Learn more
            </h3>
            <p className="md:mb-6 md:text-base text-sm mb-5 text-white">
              <Link href="/">Blog</Link>
            </p>
            <p className="md:mb-6 md:text-base text-sm mb-5 text-white">
              <Link href="/">Careers</Link>
            </p>
            <p className="md:mb-6 md:text-base text-sm mb-5 text-white">
              <Link href="https://priv-health.notion.site/Terms-of-use-254e525466a3493687d94fd671d93ad8">
                Terms of use
              </Link>
            </p>
            <p className="md:mb-6 md:text-base text-sm mb-5 text-white">
              <Link href="https://priv-health.notion.site/Privacy-policy-2f70cbb81ab843ca920e87d2b32caa37">
                Privacy policy
              </Link>
            </p>
          </div>
          <div className="w-40 md:w-72">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base font-medium text-[#C8CCEA]">
              Contact us
            </h3>
            <p className="md:mb-6 md:text-base text-sm mb-5 text-white">
              <Link href="tel:+2349040559724">+2349040559724</Link>
            </p>
            <p className="md:mb-6 md:text-base text-sm mb-5 text-white">
              <Link href="mailto:hi@privhealth.com">hi@privhealth.com</Link>
            </p>
          </div>
          <div className="w-40 md:w-72">
            <h3 className="md:mb-8 mb-6 mt-14 md:mt-0 text-sm md:text-base font-medium text-[#C8CCEA]">
              Stay in touch
            </h3>
            <div className="flex">
              <a href="http://facebook.com/tryprivhealth">
                <img src={fbook.src} className="mr-5 " alt="facebook logo" />
              </a>
              <a href="http://instagram.com/tryprivhealth">
                <img src={insta.src} className="mr-5 " alt="instagram logo" />
              </a>
              <a href="http://twitter.com/tryprivhealth">
                <img src={twitter.src} className="mr-5 " alt="twitter logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="md:mt-32 mt-16 text-sm pb-10 md:pb-16 text-center md:text-start">
        Priv Health © 2023 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
