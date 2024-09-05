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
        "Hair loss in men can be caused by a variety of factors, including genetics, hormones, age, and medical conditions. Male pattern baldness, also known as androgenetic alopecia, is the most common cause of hair loss in men and is inherited from one's parents. This condition is caused by a combination of genetics and hormones, specifically dihydrotestosterone (DHT), which can cause hair follicles to shrink over time and lead to hair loss.",
      open: true,
    },
    {
      question: "Can hair loss be treated?",
      answer:
        "Yes, hair loss in men can be treated, but the success of treatment depends on the cause of hair loss. For male pattern baldness, medications such as finasteride and minoxidil can be effective in slowing down or even reversing hair loss in some cases. These medications work by blocking the hormone DHT or promoting hair growth.",
      open: false,
    },
    {
      question: "How long does it take for hair loss treatment to work?",
      answer:
        "It usually takes about 3 to 4 months of using finasteride and minoxidil every day to start seeing changes in hair growth. It can take up to a year to see the best results. It's important to keep using these medications for at least one full year to see if they work for you. Everyone's body is different, so these medications may work better for some people than others. To keep seeing the benefits, you need to keep using hair loss medication. If you stop using it, your hair loss may come back.",
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
