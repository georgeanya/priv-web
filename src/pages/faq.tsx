import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import FAQ from "../../components/faq1";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";
import Head from "next/head";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

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
    {
      question: "Can I be accurately assessed remotely?",
      answer:
        "Yes, Priv uses a thorough online assessment and remote consultation process to ensure you receive the right care. By answering detailed questions about your health and symptoms, a licensed doctor can assess your condition and recommend appropriate treatment. In some cases, additional information or follow-up may be required for an accurate diagnosis.",
      open: false,
    },
    {
      question: "Is my information private and secure?",
      answer:
        "Yes, Priv takes your privacy and security seriously. All personal information is encrypted and stored in compliance with local regulations, ensuring that your medical and personal data is kept confidential and secure.",
      open: false,
    },
    {
      question: "Is your packaging discreet?",
      answer:
        "Absolutely. All Priv shipments arrive in a nondescript blister package so you can have your treatment shipped wherever makes sense for you as long as there is someone there to sign for it.",
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
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>FAQs - Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs"
        />
        <meta
          name="description"
          content="Priv Health's frequenty asked questions"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.co/faq" property="og:url" />
        <meta content="FAQs - Priv Health" property="og:title" />
        <meta
          content="Priv Health's frequenty asked questions"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv health logo"
          property="og:image:alt"
        />
        <meta
          content="https://instagram.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://facebook.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/tryprivhealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tryprivhealth" />
        <meta name="twitter:creator" content="@tryprivhealth" />
        <meta name="twitter:title" content="FAQs - Priv Health" />
        <meta
          name="twitter:description"
          content="Priv Health's frequenty asked questions"
        />
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/priv-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="738" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/faq" rel="canonical" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  "name": "What is Custodia?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Custodia is a digital health program designed to help people reverse chronic metabolic diseases, such as type 2 diabetes, through sustainable lifestyle changes. It offers virtual care, personalized coaching, and medical supervision to address the root causes of these conditions."
                  }
              },
              {
                  "@type": "Question",
                  "name": "How does Custodia work?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Custodia works by providing personalized health plans that include dietary changes, continuous monitoring, and support from health coaches and doctors. The program focuses on reducing reliance on medications and promoting sustainable lifestyle changes to reverse chronic conditions."
                  }
              },
              {
                  "@type": "Question",
                  "name": "How much does Custodia cost?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Custodia offers two membership plans: a Comprehensive plan at ₦180,000 biannually and a Basic plan at ₦40,000 per quarter. Both plans include health coaching, doctor supervision, meal plans, and other resources, but the Comprehensive plan also covers routine lab tests and unlimited health supplies."
                  }
              },
              {
                  "@type": "Question",
                  "name": "What do I get when I join Custodia?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Upon joining Custodia, you receive access to a personal health coach, medical supervision, unlimited consultations, meal plans, resources, and, depending on your plan, routine lab tests and health supplies."
                  }
              },
              {
                  "@type": "Question",
                  "name": "Can type 2 diabetes be reversed?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, a lot of scientific studies have confirmed that through diet changes and weight loss, the process underlying type 2 diabetes can be put into remission without the help of medication."
                  }
              },
              {
                  "@type": "Question",
                  "name": "Are medications included in the program?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, there are no medications included in the treatment. The goal of the program is to reduce or eliminate your reliance on medication."
                  }
              },
              {
                  "@type": "Question",
                  "name": "How is diabetes reversal measured?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Type 2 diabetes reversal is officially in remission when HbA1c levels drop to below 6.5% (48mmol/mol) and stay there for 3 months without the help of medication."
                  }
              },
              {
                  "@type": "Question",
                  "name": "How long does the Custodia program last?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The duration of the Custodia program can vary based on individual needs and goals, but it is generally designed for ongoing, long-term support until the desired health outcomes are achieved."
                  }
              },
              {
                  "@type": "Question",
                  "name": "How do I join Custodia?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "To join Custodia, you need to fill out an enrollment form, share your medical history, and make the payment. The program is managed through the Custodia Health app, where you will interact with your care team and track your progress."
                  }
              },
              {
                  "@type": "Question",
                  "name": "I don’t have a smartphone. Can I still join Custodia?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The program primarily operates through a mobile app, so a smartphone is essential for participating in the Custodia program effectively."
                  }
              },
              {
                  "@type": "Question",
                  "name": "Do I have to visit a physical facility for the program?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, Custodia is a fully virtual program. All consultations, coaching, and monitoring are done remotely through the app."
                  }
              },
              {
                  "@type": "Question",
                  "name": "Can I join Custodia from outside Nigeria?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can. As long as you have a smartphone with internet access you can be a part of the program. If you are having difficulties joining the program, please send us an email at hi@custodiahealth.com"
                  }
              },
              {
                  "@type": "Question",
                  "name": "Are there any additional costs for lab tests or medical devices?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For those on the Comprehensive plan, routine lab tests and health supplies are included. However, the Basic plan does not cover these, so there may be additional costs depending on your needs"
                  }
              },
              {
                  "@type": "Question",
                  "name": "What happens if I need to cancel my enrollment?",
                  "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We really think you'll like our program, however if you would like to cancel your enrollment for any reason, simply send us an email at hi@custodiahealth.com"
                  }
              }
              ],
            }),
          }}
        />
      </Head>
      <Navbar />
      <div className="px-5 md:pl-[290px] md:pr-[380px] md:mt-24 mt-16 md:pb-36 pb-24">
        <h1 className="text-[34px] leading-[43px]  md:text-5xl font-bold text-[#111111]">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 md:mt-6 text-base md:text-start mb-7 md:mb-14 md:text-[20px] md:leading-[30px] text-[#61616B]">
          Find answers to commonly asked questions about our telehealth service
        </p>
        <div className="max-w-3xl mt-17 md:mt-18">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
