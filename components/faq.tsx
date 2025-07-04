import React from "react";
import { useState } from "react";
import FAQ from "./faq2";
import CustomButton from "./mainButton";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Priv?",
      answer:
        "Priv is a telehealth provider that offers men accessible and affordable solutions for common health concerns like erectile dysfunction, premature ejaculation, hair loss, and more. Through a combination of licensed doctors, prescription medications, and over-the-counter treatments, Priv provides a modern approach to men's healthcare.",
      open: true,
    },
    {
      question: "Who is Priv for?",
      answer:
        "Priv is designed for men who want convenient, discreet access to healthcare services. Whether you're dealing with sexual health, hair loss concerns or just looking to be healthy, Priv is for those looking for reliable and easy-to-access treatments without the hassle of traditional in-person visits.",
      open: false,
    },
    {
      question: "How does Priv work?",
      answer:
        "Priv operates online, allowing you to consult with a licensed doctor from the comfort of your home. After answering a few questions about your health, a doctor reviews your information and recommends treatment if appropriate. You can then have your prescription filled and delivered to your door, with ongoing access to care and support.",
      open: false,
    },
    {
      question: "Where is Priv available",
      answer:
        "Priv is currently available in Nigeria. We aims to provide services in as many regions as possible in the future while adhering to regional healthcare laws.",
      open: false,
    },
    {
      question: "Are your doctors licensed?",
      answer:
        "Yes, all doctors working with Priv are fully licensed. They are qualified to provide professional medical advice, prescribe treatments, and guide you through your health concerns.",
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
      <div className="container mx-auto md:pt-28 pt-20 md:pb-36 pb-24">
        <h2 className=" text-3xl md:text-start md:text-4xl md:max-w-xl font-bold text-[#5355AC] mb-14 md:mb-20 pr-8">
          Frequently asked questions
        </h2>
        <div className="">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div className="mt-10 md:mt-15">
          <div>
           
            <CustomButton title="See all FAQs" href="/faq" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
