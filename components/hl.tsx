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
      question: "What causes hair loss?",
      answer:
        "Male hair loss, or male pattern baldness, is the thinning or loss of hair on the scalp, often beginning at the hairline or crown.",
      open: true,
    },
    {
      question: "Can hair loss be treated?",
      answer:
        "Male hair loss is typically caused by genetics, hormonal changes (such as sensitivity to DHT), or aging. Stress and poor nutrition can also contribute.",
      open: false,
    },
    {
      question: "How do I know I have male hair loss?",
      answer:
        "If you notice thinning or receding hair, particularly at the temples or crown, it may be a sign of male pattern baldness.",
      open: false,
    },
    {
      question: "Is male hair loss treatable?",
      answer:
        "Yes, male hair loss can be managed with treatments like minoxidil, finasteride, or hair transplant procedures to slow or reverse hair thinning.",
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
        Facts about male hair loss
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
