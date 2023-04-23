import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import FAQ from "./section6";
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

const PrematureEjaculation = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is premature ejaculation?",
      answer:
        "Premature ejaculation is a condition where a man ejaculates during sex sooner than he or his partner would like, usually within 1 minute. It is a common sexual problem, and estimates suggest that around 1 in 3 men experience it at some point in their lives.",
      open: true,
    },
    {
      question: "What causes premature ejaculation?",
      answer:
        "Premature ejaculation is a complex condition that can be caused by various factors. Psychological factors such as anxiety, stress, depression, guilt, and relationship issues can all affect a man's ability to control his ejaculation during sexual activity. Biological factors such as hormonal imbalances, abnormal levels of neurotransmitters in the brain, and inflammation or infection in the prostate or urethra can also contribute to premature ejaculation. Behavioral factors such as masturbating quickly or infrequently, rushing through sexual encounters, or not paying attention to one's body can lead to premature ejaculation as well. Genetics may also play a role in the development of premature ejaculation.",
      open: false,
    },
    {
      question: "What treatments are available for premature ejaculation?",
      answer:
        "There are several treatments available for premature ejaculation, including behavioral techniques, medications, and counseling. Behavioral techniques involve learning how to control and delay ejaculation through exercises such as the stop-start method or the squeeze technique. Medications such as selective serotonin reuptake inhibitors (SSRIs), topical anesthetics, and phosphodiesterase-5 inhibitors (PDE5 inhibitors) may also be prescribed. Counseling can help address psychological factors that may contribute to premature ejaculation, such as anxiety or relationship issues. A combination of these treatments may also be recommended. It is important to consult with a doctor to determine the most appropriate treatment plan based on an individual's specific situation.",
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
      <p className="text-[34px] leading-[43px] md:text-start md:text-[50px] md:leading-[63px] md:max-w-[591px] font-bold text-[#5355AC] mb-14">
        Get private treatment for premature ejaculation
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

export default PrematureEjaculation;
