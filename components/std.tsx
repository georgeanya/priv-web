import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import FAQ from "./faq2";
import Link from "next/link";
import CustomButton from "./mainButton";

const Ed = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What are STIs?",
      answer:
        "Sexually transmitted infections (STIs) are infections passed from one person to another through sexual contact. Common STIs include chlamydia, gonorrhea, syphilis, herpes, and HIV.",
      open: true,
    },
    {
      question: "How do I know if I have an STI?",
      answer:
        "Symptoms of STIs vary but can include unusual discharge, pain during urination, sores, itching, or no symptoms at all. Regular testing is essential, especially if you’re sexually active.",
      open: false,
    },
    {
      question: "Are STIs treatable?",
      answer:
        "Many STIs are treatable with antibiotics (for bacterial infections) or antiviral medications (for viral infections). Early detection and treatment are key to preventing complications.",
      open: false,
    },
    {
      question: "How can I prevent STIs?",
      answer:
        "You can reduce the risk of STIs by using condoms during sexual activity, limiting the number of sexual partners, getting vaccinated for preventable STIs (like HPV), and undergoing regular testing. Open communication with partners about sexual health is also crucia.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
    console.log("click " + index);
  };

  return (
    <div className="px-5 md:px-32">
      <div className="container mx-auto md:pt-[120px] pt-11 md:pb-36 pb-24 md:flex justify-between">
        <div>
          <p className="leading-tight text-3xl md:text-start md:text-[46px] md:leading-[58px] font-bold text-[#5355AC] md:max-w-[360px]">
            Facts about STIs/STDs
          </p>
          <div className="mt-8 md:mt-9 hidden md:block">
            <CustomButton title="Get treatment now" href="/sign-up?condition=sti-treatment" />
          </div>
        </div>
        <div className="md:w-[730px] mt-[60px] md:mt-0">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
          {/* <hr className="my-6 md:my-8 mb-6 md:mb-12 " /> */}
        </div>
        <div className="mt-8 md:mt-9 md:hidden">
        <CustomButton title="Get treatment now" href="/sign-up?condition=sti-treatment" />
        </div>
      </div>
    </div>
  );
};

export default Ed;
