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
    padding: "15px 30px",
  },
});

const Ed = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is erectile dysfunction?",
      answer:
        "Erectile dysfunction, also known as impotence, is a condition where a man has difficulty getting or keeping an erection during sexual activity. It's a common problem that can affect men of all ages.",
      open: true,
    },
    {
      question: "What causes erectile dysfunction?",
      answer:
        "Erectile dysfunction (ED) can be caused by a variety of physical and psychological factors. Physical causes of ED may include cardiovascular diseases, such as high blood pressure, atherosclerosis, or heart disease, which can restrict blood flow to the penis and make it difficult to achieve an erection. Diabetes is another physical cause of ED, as it can damage blood vessels and nerves that control erections. Hormonal imbalances, such as low testosterone levels, can also contribute to ED. Certain medications, such as antidepressants, antihistamines, and blood pressure medications, can also cause ED. Psychological factors can also play a role in the development of ED. Anxiety, stress, or depression can lead to ED, as can relationship issues or a lack of emotional connection with a partner. Performance anxiety or a fear of failure can also contribute to ED, as can low self-esteem. In many cases, ED may have both physical and psychological causes.",
      open: false,
    },
    {
      question: "What treatments are available for erectile dysfunction?",
      answer:
        "There are different ways to treat erectile dysfunction (ED). One way is to change your lifestyle, such as quitting smoking, reducing alcohol consumption, and exercising more regularly. This may help to improve blood flow and make it easier to get and keep an erection. Another way is to take medications, such as Viagra or Cialis, which work by increasing blood flow to the penis to help achieve and maintain an erection. There are also other treatment options, such as injecting medication into the penis or using a vacuum device to pull blood into the penis. In rare cases, surgery may be an option to implant a device to help achieve an erection. It's important to talk to a healthcare provider to find out which treatment option may be best for you based on your individual situation.",
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
    <div className="px-5 md:px-32 md:pt-[70px] pt-11 md:pb-36 pb-24">
      <p className="leading-tight md:leading-tight text-3xl md:text-start md:text-5xl font-bold text-[#5355AC] md:max-w-[591px] mb-14">
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

export default Ed;
