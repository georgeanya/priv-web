import React from "react";
import { useState } from "react";
import FAQ from "./faq2";
import CustomButton from "./mainButton";

const PeFacts = () => {
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
    <div className="px-5 md:px-32">
      <div className="container mx-auto md:pt-[120px] pt-11 md:pb-36 pb-24 md:flex justify-between">
        <div>
          <h2 className="leading-tight text-3xl md:text-start md:text-[46px] md:leading-[58px] font-bold text-[#5355AC] md:max-w-[360px]">
            Facts about premature ejaculation
          </h2>
          <div className="mt-8 md:mt-9 hidden md:block">
            <CustomButton title="Get treatment now" href="/sign-up?condition=premature-ejaculation" />
          </div>
        </div>
        <div className="md:w-[730px] mt-[60px] md:mt-0">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        
        </div>
        <div className="mt-8 md:mt-9 md:hidden">
        <CustomButton title="Get treatment now" href="/sign-up?condition=premature-ejaculation" />
        </div>
      </div>
    </div>
  );
};

export default PeFacts;
