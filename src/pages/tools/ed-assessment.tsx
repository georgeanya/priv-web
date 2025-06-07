import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import favicon from "../../../public/assets/favicon.png";
import metaCard from "../../../public/assets/ed-metacard.png";
import CenterButton from "../../../components/centerButton";

const PrivWhiteButton = styled(Button)({
  background: "white !important",
  fontFamily: "Circular Std",
  fontSize: "15px",
  height: "56px",
  lineHeight: "18.97",
  color: "#5355AC",
  cursor: "pointer",
  padding: "18.5px 30px",
  width: "100%",
  fontWeight: 500,
  border: "1px solid #C4CED4",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "9px 20px",
  },
});

const ScoreText = styled("p")({
  color: "#5355AC",
  fontSize: "50px",
  fontWeight: 500,
  "& .score-suffix": {
    fontSize: "28px",
  },
  ["@media (min-width:768px)"]: {
    fontSize: "58px",
    "& .score-suffix": {
      fontSize: "24px",
    },
  },
});

type Question = {
  text: string;
  options: {
    text: string;
    count: number;
  }[];
};

const questions: Question[] = [
  {
    text: "How often do you experience difficulty in getting or maintaining an erection?",
    options: [
      { text: "Never", count: 0 },
      { text: "Occasionally (less than once a month)", count: 1 },
      { text: "Sometimes (once a month or more)", count: 2 },
      { text: "Frequently (most days)", count: 3 },
    ],
  },
  {
    text: "How would you describe your ability to maintain an erection during sexual activity?",
    options: [
      { text: "Always maintain an erection", count: 0 },
      { text: "Sometimes lose an erection but can regain it easily", count: 1 },
      {
        text: "Frequently lose an erection and have trouble regaining it",
        count: 2,
      },
      { text: "Almost always unable to maintain an erection", count: 3 },
    ],
  },
  {
    text: "Do you feel distressed or frustrated by your performance in the bedroom?",
    options: [
      { text: "No, I don't feel distressed", count: 0 },
      { text: "Occasionally, but it doesn't affect me much", count: 1 },
      { text: "Yes, it affects my self-esteem", count: 2 },
      { text: "Yes, it's a major source of distress", count: 3 },
    ],
  },
  {
    text: "How would you describe your overall sexual desire?",
    options: [
      { text: "Normal desire, I feel aroused regularly", count: 0 },
      {
        text: "Reduced desire, but still find sexual activity enjoyable",
        count: 1,
      },
      { text: "Low desire, I rarely feel aroused", count: 2 },
      { text: "No desire or interest in sexual activity", count: 3 },
    ],
  },
  {
    text: "Do you experience any pain or discomfort during sexual activity?",
    options: [
      { text: "No pain or discomfort", count: 0 },
      { text: "Rarely experience minor discomfort", count: 1 },
      { text: "Occasionally experience moderate discomfort", count: 2 },
      { text: "Frequently experience pain or discomfort", count: 3 },
    ],
  },
  {
    text: "Are you currently experiencing any stress, anxiety, or depression?",
    options: [
      { text: "No significant stress or emotional issues", count: 0 },
      { text: "Mild stress", count: 1 },
      { text: "Moderate stress or anxiety", count: 2 },
      { text: "Severe stress, anxiety, or depression", count: 3 },
    ],
  },
  {
    text: "Do you have any chronic conditions (e.g., diabetes, high blood pressure, heart disease, high cholesterol)?",
    options: [
      { text: "No chronic conditions", count: 0 },
      { text: "Yes, I have a chronic condition", count: 2 },
    ],
  },
];

const RiskTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const getTotalScore = () => {
    return answers.reduce((total, answerIndex, questionIndex) => {
      if (answerIndex >= 0) {
        return total + questions[questionIndex].options[answerIndex].count;
      }
      return total;
    }, 0);
  };

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleContinue = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(
        answers[currentQuestionIndex + 1] >= 0
          ? answers[currentQuestionIndex + 1]
          : null
      );
    }
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setSelectedOption(null);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const totalScore = getTotalScore();

  const getRiskLevel = () => {
    if (totalScore <= 4) return "low";
    if (totalScore <= 8) return "moderate";
    if (totalScore <= 13) return "high";
    return "severe";
  };

  const riskLevel = getRiskLevel();

  const getRiskDescription = () => {
    switch (riskLevel) {
      case "low":
        return {
          title: "You’re at low risk for ED",
          description:
            "Your sexual health seems to be in good shape. There are no significant signs of erectile dysfunction. However, if you experience any future issues, reach out to a doctor.",
        };
      case "moderate":
        return {
          title: "You’re at moderate risk for ED",
          description:
            "You may be experiencing mild erectile dysfunction. This could be due to stress, lifestyle factors, or health conditions. It's a good idea to speak to a doctor for a more detailed evaluation and to explore possible treatments or lifestyle changes.",
        };
      case "high":
        return {
          title: "You’re at high risk for ED",
          description:
            "There are clear signs of erectile dysfunction. This could be caused by a variety of factors including emotional stress, health issues, or medications. It's highly recommended to consult a doctor who can help identify the underlying causes and provide appropriate treatment options.",
        };
      case "severe":
        return {
          title: "You’re at severe risk for ED",
          description:
            "You are showing significant signs of erectile dysfunction. This could be a result of underlying medical conditions or emotional distress. A healthcare professional should be consulted immediately to assess your situation and discuss treatment options.",
        };
      default:
        return {
          title: "You’re at unknown risk for ED",
          description:
            "Please consult with a healthcare provider for a proper evaluation.",
        };
    }
  };

  const riskInfo = getRiskDescription();

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Do I Have Erectile Dysfunction? Take Free ED Assessment Quiz
        </title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="do i have erectile dysfunction, ED quiz, erectile dysfunction test, ED assessment, erectile dysfunction symptoms, ED self assessment, erectile dysfunction quiz, ED symptoms quiz, erectile dysfunction checker, do i have ED, erectile dysfunction evaluation, ED screening test, sexual health quiz, erectile dysfunction questionnaire"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv health logo"
          property="og:image:alt"
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
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/priv-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="785" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
        <meta
          name="description"
          content="Take our erectile dysfunction quiz to assess your symptoms. Our free ED self-assessment tool helps determine if you may have erectile dysfunction and helps you know the next steps to take"
        />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="https://privhealth.co/ed" property="og:url" />
        <meta
          content="Do I Have Erectile Dysfunction? Take Free ED Assessment Quiz"
          property="og:title"
        />
        <meta
          content="Take our erectile dysfunction quiz to assess your symptoms. Our free ED self-assessment tool helps determine if you may have erectile dysfunction and helps you know the next steps to take"
          property="og:description"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          name="twitter:title"
          content="Do I Have Erectile Dysfunction? Take Free ED Assessment Quiz"
        />
        <meta name="robots" content="noindex" />
        <meta
          name="twitter:description"
          content="Take our erectile dysfunction quiz to assess your symptoms. Our free ED self-assessment tool helps determine if you may have erectile dysfunction and helps you know the next steps to take"
        />
        <link href="https://privhealth.co/ed" rel="canonical" />
      </Head>
      <Navbar />

      {!showResults ? (
        <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#5355AC] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div>
            <h1 className="mt-8 md:mt-10 text-[22px] leading-7 md:text-[24px] font-bold text-[#5355AC]">
              {questions[currentQuestionIndex].text}
            </h1>
            <ul className="mt-8 space-y-3">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li key={`${currentQuestionIndex}-${index}`} className="my-3">
                  <button
                    className={`w-full max-w-[400px] py-4 md:py-[18px] border rounded-2xl text-left md:px-[18px] px-4 flex items-center gap-4 transition-colors duration-200 ${
                      selectedOption === index
                        ? "selected border-[#5355AC] bg-[#F5F5FF]"
                        : "border-[#D7D7DB] hover-effect"
                    }`}
                    onClick={() => handleOptionClick(index)}
                  >
                    <span
                      className={`w-4 h-4 md:w-4 md:h-4 rounded-full border-1 transition-colors duration-200 bullet ${
                        selectedOption === index
                          ? "border-[#5355AC]"
                          : "border-[#D7D7DB]"
                      }`}
                    />
                    <span className="md:text-[16px] text-start text-[14px] leading-4 md:leading-5">
                      {option.text}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CenterButton
                title="Continue"
                onClick={handleContinue}
                disabled={selectedOption === null}
                type="button"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
          <h1 className="mt-[32px] md:mt-[40px] leading-7 md:text-[28px] md:leading-[30px] mb-6 text-[24px] text-center font-bold text-[#5355AC]">
            {riskInfo.title}
          </h1>

          <div className="p-4 pb-0 border border-[#D7D7DB] rounded-2xl">
            <p className="text-[16px] md:text-[18px] leading-[20px]">
              Your risk score
            </p>
            <ScoreText>
              {totalScore}
              <span className="score-suffix">/20</span>
            </ScoreText>
          </div>

          <p className="text-[16px] md:text-[18px] leading-[24px] mt-[24px] mb-[40px]">
            {riskInfo.description}
            <br />
            <br />
            Want to speak to a doctor? Start an online visit with an expert
            doctor who will work with you to create a personalized treatment
            plan for you.
          </p>

          {riskLevel !== "low" ? (
            <CenterButton
              title="Start my online visit"
              href="/ed"
              type="button"
            />
          ) : (
            <CenterButton
              title="Start my online visit"
              href="/ed"
              type="button"
            />
          )}

          <div className="mt-3">
            <PrivWhiteButton onClick={restartTest}>
              Restart the quiz
            </PrivWhiteButton>
          </div>
        </div>
      )}

      <style jsx>{`
        .hover-effect:hover {
          border-color: #5355ac;
        }
        .selected {
          border-color: #5355ac;
        }
        .hover-effect:hover .bullet {
          border-color: #5355ac;
        }
        .selected .bullet {
          border-color: #5355ac;
        }
        .score-text {
          font-size: "58px";
        }
      `}</style>
    </div>
  );
};

export default RiskTest;
