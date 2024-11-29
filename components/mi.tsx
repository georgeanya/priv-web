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
      question: "What is male infertility?",
      answer:
        "Male infertility is defined as the inability of a man to impregnate a fertile female partner after one year of regular, unprotected sexual intercourse. It is a significant factor in about 50% of all infertility cases, either as the sole cause or as a contributing factor alongside female infertility.",
      open: true,
    },
    {
      question: "What causes male infertility?",
      answer:
        "Male infertility can be caused by various factors. Medical causes include conditions such as varicocele (enlarged veins in the scrotum), infections like sexually transmitted diseases, hormonal imbalances, genetic disorders, and undescended testicles. Environmental factors also play a role, including exposure to toxins or chemicals, overheating of the testicles, and radiation exposure. Lifestyle factors can significantly impact fertility as well. These include smoking, excessive alcohol consumption, obesity, and high levels of stress. Certain medications, including some prescription drugs and anabolic steroids, can also contribute to infertility.",
      open: false,
    },
    {
      question: "How do I know if I have male infertility?",
      answer:
        "The primary indication of male infertility is the inability to conceive after one year of trying with a female partner. Diagnosis typically involves a thorough medical history review, physical examination, and tests such as semen analysis to evaluate sperm count and quality. Blood tests may also be conducted to check hormone levels.",
      open: false,
    },
    {
      question: "Is male infertility treatable?",
      answer:
        "Yes, many causes of male infertility are treatable. Treatment options may include lifestyle changes, medications to address hormonal imbalances, surgical procedures to correct anatomical issues, or assisted reproductive techniques like in vitro fertilization (IVF) or artificial insemination. The specific treatment will depend on the underlying cause of infertility.",
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
            Facts about male infertility
          </p>
          <div className="mt-8 md:mt-9 hidden md:block">
          <CustomButton title="Get treatment now" href="/start" />
          </div>
        </div>
        <div className="md:w-[730px] mt-[60px] md:mt-0">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
          {/* <hr className="my-6 md:my-8 mb-6 md:mb-12 " /> */}
        </div>
        <div className="mt-8 md:mt-9 md:hidden">
        <CustomButton title="Get treatment now" href="/start" />
        </div>
      </div>
    </div>
  );
};

export default Ed;
