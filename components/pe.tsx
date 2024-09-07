import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import FAQ from "./faq2";
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
    padding: "15px 30px",
  },
});

const Ed = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is premature ejaculation?",
      answer:
        "Premature ejaculation (PE) is when ejaculation occurs sooner than desired during sexual activity, often within a minute of penetration.",
      open: true,
    },
    {
      question: "What causes premature ejaculation?",
      answer:
        "PE can be caused by psychological factors such as anxiety or stress, as well as biological factors like hormonal imbalances or abnormal levels of neurotransmitters.",
      open: false,
    },
    {
      question: "How do I know I have premature ejaculation?",
      answer:
        "If you frequently ejaculate within a short time after starting sexual activity and feel unable to control it, you may have premature ejaculation.",
      open: false,
    },
    {
      question: "Is premature ejaculation treatable?",
      answer:
        "Yes, PE is treatable through behavioral techniques, topical anesthetics, medications, or counseling depending on the severity and cause.",
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
    <div className="px-5 md:px-32 md:pt-[120px] pt-11 md:pb-36 pb-24 md:flex justify-between">
      <div>
        <p className="leading-tight text-3xl md:text-start md:text-[46px] md:leading-[58px] font-bold text-[#5355AC] md:max-w-[360px]">
        Facts about premature ejaculation 
        </p>
        <div className="mt-8 md:mt-9 hidden md:block">
          <Link href="/start">
            <SustainButton>Get treatment now</SustainButton>
          </Link>
        </div>
      </div>
      <div className="max-w-[730px] mt-[60px] md:mt-0">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
        {/* <hr className="my-6 md:my-8 mb-6 md:mb-12 " /> */}
      </div>
      <div className="mt-8 md:mt-9 md:hidden">
          <Link href="/start">
            <SustainButton>Get treatment now</SustainButton>
          </Link>
        </div>
    </div>
  );
};

export default Ed;
