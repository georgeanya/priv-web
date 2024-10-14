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
      question: "What is low testosterone?",
      answer:
        "Low testosterone, also known as hypogonadism, is a condition where the body does not produce enough testosterone, the hormone responsible for various functions such as muscle mass, bone density, and sexual health. In men, low testosterone can lead to symptoms like reduced sex drive, fatigue, and mood changes.",
      open: true,
    },
    {
      question: "What causes low testosterone?",
      answer:
        "Several factors can contribute to low testosterone levels, including age (as levels naturally decline with age), medical conditions (such as obesity, diabetes, or hormonal disorders), injuries to the testicles, certain medications (like those used in cancer treatment), and lifestyle factors such as stress and alcohol use.",
      open: false,
    },
    {
      question: "How do I know if I have low testosterone?",
      answer:
        "Symptoms of low testosterone can vary but may include decreased libido, erectile dysfunction, fatigue, reduced muscle mass, mood swings, and difficulty concentrating. To confirm low testosterone levels, a healthcare provider will typically conduct a blood test measuring testosterone levels, ideally taken in the morning when levels are highest.",
      open: false,
    },
    {
      question: "Is low testosterone treatable?",
      answer:
        "Yes, low testosterone is treatable. Treatment options often include testosterone replacement therapy (TRT) or medications, which can help alleviate symptoms and improve quality of life. TRT can be administered through injections, patches, gels, or implants. However, it's important to consult with a healthcare professional to discuss potential benefits and risks before starting treatment.",
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
        Facts about low testosterone
        </p>
        <div className="mt-8 md:mt-9 hidden md:block">
          <Link href="/start">
            <SustainButton>Get treatment now</SustainButton>
          </Link>
        </div>
      </div>
      <div className="md:w-[730px] mt-[60px] md:mt-0">
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
