import React from "react";
import twitter from "../public/assets/tw.svg";
import sustain from "../public/assets/privw.svg";
import fbook from "../public/assets/fbook.svg";
import insta from "../public/assets/insta.svg";
import Link from "next/link";
import CustomButton from "./mainButton";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="bg-[#232B5C] px-5 md:px-20 lg:px-32">
      <div className=" mx-auto container md:pt-36 pt-24  text-white">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold mb-6">
            Start your online visit now
          </p>
          <p className="text-md md:text-1xl font-normal mb-11 max-w-2xl flex justify-center m-auto">
            Get seamless and discreet care for conditions that affect your
            everyday life
          </p>
          <CustomButton title="Get treatment now" href="/what-we-treat"/>
        </div>
        <hr className="h-[0.5px] border-t-[0.5px] md:mt-[110px] mt-[90px] md:mb-[90px] mb-[70px] text-[#C7CBD1]" />
        <div className="md:flex md:justify-between text-start">
          <img src={sustain.src} className="self-start sm:mr-20" alt="skeen logo" />
          <div className="flex flex-wrap">
            <div className="w-40 md:w-[245px]">
              <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
                TREATMENTS
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="/ed">Erectile dysfunction</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="/premature-ejaculation">Premature ejaculation</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="/stis">STI/ STD treatment</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="hair-loss">Male hair loss</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="/all-conditions">See all</Link>
              </p>
            </div>
            <div className="w-40 md:w-[245px]">
              <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
                RESOURCES
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="/404">Help center</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35">
                  Privacy policy
                </Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="https://lifebox-labs.notion.site/lifebox-labs/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1">
                  Terms of use
                </Link>
              </p>
              {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-[22px] text-[#C8CCEA]">
              <Link href="/cookie">Cookie policy</Link>
            </p> */}
            </div>
            <div className="w-40 md:w-[245px]">
              <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
                COMPANY
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="https://lifebox.ng/">About</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="/blog">Blog</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">
                  Careers
                </Link>
              </p>
              {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-[22px] text-[#C8CCEA]">
              <Link href="/404">Press</Link>
            </p> */}
            </div>
            <div className="w-40 md:w-[205px]">
              <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
                CONTACT
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="tel:+2347010830201">+2347010830201</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C8CCEA]">
                <Link href="mailto:hi@privhealth.co">hi@privhealth.co</Link>
              </p>
              <div className="flex">
                <Link href="https://facebook.com/tryprivhealth">
                  <img
                    src={fbook.src}
                    className="mr-5 cursor-pointer"
                    alt="facebook logo"
                  />
                </Link>
                <Link href="https://instagram.com/tryprivhealth">
                  <img
                    src={insta.src}
                    className="mr-5 cursor-pointer"
                    alt="instagram logo"
                  />
                </Link>
                <Link href="https://twitter.com/tryprivhealth">
                  <img
                    src={twitter.src}
                    className="mr-5 cursor-pointer"
                    alt="twitter logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[0.5px] border-t-[0.5px] md:mt-[90px] mt-[70px] text-[#C7CBD1]" />
        <p className="md:mt-[45px] mt-[35px] text-sm md:text-[15px] leading-[18px] pb-[50px] md:pb-16 text-center md:text-start">
          ©{currentYear} Priv Health, a <a className="underline" target="_blank" href="https://lifebox.ng">Lifebox Labs</a> company
        </p>
      </div>
    </div>
  );
};

export default Footer;
