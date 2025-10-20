import React from "react";
import Link from "next/link";
import Image from "next/image";
import whitearrow from "../public/assets/whitearrow.svg";

const ARROW_ICON = {
  src: whitearrow,
  alt: "Navigate",
  className: "w-[30px] md:w-[38px]"
};

const linkCardStyle = "md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#EEEAF5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between items-center";
const textStyle = "text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]";

const CONDITIONS = [
  { 
    title: "Trouble with erection", 
    href: "/ed",
    customClass: "mt-[35px]" 
  },
  { 
    title: "Early ejaculation", 
    href: "/premature-ejaculation" 
  },
  { 
    title: "Low testosterone", 
    href: "/low-testosterone" 
  },
  { 
    title: "Doctor consultation", 
    href: "/doctor-consultation" 
  },
  { 
    title: "Test and treat STIs", 
    href: "/stis" 
  },
  { 
    title: "Mental health", 
    href: "/sign-up?condition=mental-health" 
  },
  { 
    title: "Hair loss", 
    href: "/hair-loss" 
  },
  { 
    title: "Lab tests", 
    href: "https://paystack.shop/priv-health",
    external: true 
  },  
  { 
    title: "Supplements", 
    href: "https://privhealth.bumpa.shop/browse/Supplements",
    customClass: "mb-[52px] md:mb-[96px]",
    external: true 
  }
];

const ConditionSelectionMenu = () => {
  return (
    <div className="max-w-[400px] mx-5 sm:mx-auto mt-[25px] md:mt-10">
      <h1 className="leading-tight md:text-[28px] text-2xl font-bold text-[#5355AC] text-center">
        What can we help you with?
      </h1>

      {CONDITIONS.map(({ title, href, customClass = "", external = false }) => (
        <Link 
          key={href}
          href={href}
          title={title}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <div className={`${linkCardStyle} ${customClass}`}>
            <p className={textStyle}>{title}</p>
            <Image {...ARROW_ICON} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ConditionSelectionMenu;