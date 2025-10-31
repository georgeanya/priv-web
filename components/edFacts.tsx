import React from "react";
import { useState } from "react";
import FAQ from "./faq2";
import CustomButton from "./mainButton";

const EdFacts = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is erectile dysfunction?",
      answer:
        "Erectile dysfunction (ED) is the inability to achieve or maintain an erection firm enough for sexual intercourse.",
      open: true,
    },
    {
      question: "What causes erectile dysfunction?",
      answer:
        "ED can be caused by physical factors like heart disease, diabetes, high blood pressure, or hormonal imbalances, as well as psychological factors such as stress, anxiety, or depression.",
      open: false,
    },
    {
      question: "How do I know I have erectile dysfunction?",
      answer:
        "If you consistently struggle to achieve or maintain an erection, especially during sexual activity, it may be a sign of erectile dysfunction.",
      open: false,
    },
    {
      question: "Is erectile dysfunction treatable?",
      answer:
        "Yes, ED is treatable. Options include medications, lifestyle changes, therapy, or devices like pumps, depending on the underlying cause.",
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
          <h2 className="leading-tight text-3xl md:text-start md:text-[46px] md:leading-[58px] font-bold text-[#5355AC] md:max-w-[360px]">
            Facts about erectile dysfunction
          </h2>
          <div className="mt-8 md:mt-9 hidden md:block">
            <CustomButton title="Get treatment now" href="/sign-up?condition=erectile-dysfunction" />
          </div>
        </div>
        <div className="md:w-[730px] mt-[60px] md:mt-0">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div className="mt-8 md:mt-9 md:hidden">
          
          <CustomButton title="Get treatment now" href="/sign-up?condition=erectile-dysfunction" />
         
        </div>
      </div>
    </div>
  );
};

export default EdFacts;
