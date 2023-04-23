import React from 'react'
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import FAQ from "./section6";
import Link from 'next/link';

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

const Ed = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Who is Priv for?",
      answer:
        "Priv is for adults experiencing health issues or wanting to improve or support their health and prefer to do so from the comfort of their homes.",
      open: true,
    },
    {
      question: "How does Priv work?",
      answer:
        "First, book a consultation and with one of our doctors. The doctor will review your information and recommend a personalised treatment. Priv will ship your treatment for free in discreet packaging if prescribed.",
      open: false,
    },
    {
      question: "How much does it cost to consult a doctor on Priv?",
      answer: "It cost 5,000 naira to consult a doctor on Priv",
      open: false,
    },
    {
      question: "Are your doctors licensed?",
      answer: "Our doctors are experts licensed to practice in Nigeria",
      open: false,
    },
    {
      question: "Are my consultations private?",
      answer:
        "All consultations on Priv are carried out in the strictest respect of medical secrecy.",
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
    <div className="px-5 md:px-32 md:pt-20 pt-11 md:pb-36 pb-24">
      <p className="text-[34px] leading-[43px] md:text-start md:text-4xl md:max-w-xl font-bold text-[#5355AC] mb-14">
      Get private treatment for erectile dysfunction
      </p>
      <div className="max-w-3xl">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
        {/* <hr className="my-6 md:my-8 mb-6 md:mb-12 " /> */}
      </div>
      <div className="mt-10 md:mt-15">
        <div>
          <Link href="/start">
            <SustainButton>Get treatment now</SustainButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ed
