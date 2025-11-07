import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import favicon from "../../../public/assets/favicon.png";
import metaCard from "../../../public/assets/priv-metacard.png";
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
    text: "How often do you feel fatigued or tired throughout the day?",
    options: [
      { text: "Rarely or never", count: 0 },
      { text: "Occasionally, but I recover quickly", count: 1 },
      { text: "Frequently, I feel tired most days", count: 2 },
      { text: "Almost always, I feel exhausted even after rest", count: 3 },
    ],
  },
  {
    text: "Do you have trouble concentrating or focusing on tasks?",
    options: [
      { text: "No, my concentration is fine", count: 0 },
      { text: "Sometimes, but it's not major", count: 1 },
      { text: "Often, I struggle to focus or remember things", count: 2 },
      { text: "Almost always, I find it difficult to focus or stay on task", count: 3 },
    ],
  },
  {
    text: "How would you describe your mood in general?",
    options: [
      { text: "I feel happy and emotionally stable", count: 0 },
      { text: "Occasionally, I feel a bit down or irritable", count: 1 },
      { text: "I often feel sad, irritable, or anxious", count: 2 },
      { text: "I frequently feel depressed, anxious, or have mood swings", count: 3 },
    ],
  },
  {
    text: "Have you noticed a decrease in your interest or desire in sex?",
    options: [
      { text: "No, my libido is the same as always", count: 0 },
      { text: "Occasionally, but it's not a major concern", count: 1 },
      { text: "Yes, my interest in sex has decreased noticeably", count: 2 },
      { text: "Yes, I have almost no interest in sex anymore", count: 3 },
    ],
  },
  {
    text: "Have you noticed any changes in your muscle mass or strength?",
    options: [
      { text: "No change, my muscle mass and strength are the same", count: 0 },
      { text: "Slight decrease, but not significant", count: 1 },
      { text: "Noticeable decrease in muscle mass or strength", count: 2 },
      { text: "Significant loss of muscle mass or strength", count: 3 },
    ],
  },
  {
    text: "How would you describe your ability to maintain an erection or your sexual performance?",
    options: [
      { text: "No issues, I perform normally", count: 0 },
      { text: "Occasionally, I have difficulty maintaining an erection", count: 1 },
      { text: "Frequently, I struggle with erectile dysfunction", count: 2 },
      { text: "Almost always, I experience erectile dysfunction", count: 3 },
    ],
  },
  {
    text: "Do you experience hot flashes or night sweats?",
    options: [
      { text: "No, I never experience hot flashes or night sweats", count: 0 },
      { text: "Occasionally, I experience mild hot flashes or sweating", count: 1 },
      { text: "Frequently, I experience moderate hot flashes or sweating", count: 2 },
      { text: "Yes, I experience frequent and severe hot flashes or night sweats", count: 3 },
    ],
  },
  {
    text: "Do you notice a decrease in your overall energy levels or stamina?",
    options: [
      { text: "No, my energy levels are normal", count: 0 },
      { text: "Occasionally, I feel slightly less energetic", count: 1 },
      { text: "Often, I feel low energy and lack stamina", count: 2 },
      { text: "Almost always, I feel completely drained and lack stamina", count: 3 },
    ],
  },
  {
    text: "How often do you feel irritated or angry for no apparent reason?",
    options: [
      { text: "Rarely or never", count: 0 },
      { text: "Occasionally, but it's manageable", count: 1 },
      { text: "Frequently, I feel irritated or on edge", count: 2 },
      { text: "Almost always, I feel easily agitated or angry", count: 3 },
    ],
  },
  {
    text: "Have you experienced any changes in your body fat distribution (e.g., increased belly fat)?",
    options: [
      { text: "No noticeable changes", count: 0 },
      { text: "Slight increase in belly fat, but not concerning", count: 1 },
      { text: "Noticeable increase in belly fat or fat retention", count: 2 },
      { text: "Significant increase in body fat, especially around the abdomen", count: 3 },
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
    if (totalScore <= 6) return "normal";
    if (totalScore <= 14) return "mild";
    if (totalScore <= 22) return "moderate";
    return "severe";
  };

  const riskLevel = getRiskLevel();

  const getRiskDescription = () => {
    switch (riskLevel) {
      case "normal":
        return {
          title: "Normal Testosterone Levels",
          description: "Based on your answers, it seems your testosterone levels are within a normal range. However, if you continue to notice any changes in your health or mood, it's always a good idea to speak with your healthcare provider. Maintaining a healthy lifestyle with proper nutrition, exercise, and stress management will continue to support your health."
        };
      case "mild":
        return {
          title: "Mild Symptoms of Low Testosterone",
          description: "You may be experiencing mild symptoms of low testosterone, such as fatigue, mood changes, or decreased libido. Lifestyle changes, such as regular exercise and stress management, may help. If symptoms persist, consider consulting a healthcare provider to evaluate your testosterone levels."
        };
      case "moderate":
        return {
          title: "Moderate Symptoms of Low Testosterone",
          description: "You are showing moderate signs of low testosterone. Symptoms such as decreased libido, mood changes, and fatigue can be associated with low T. It's a good idea to speak with a healthcare provider to discuss potential testing and treatment options, including lifestyle changes or hormone replacement therapy."
        };
      case "severe":
        return {
          title: "Severe Symptoms of Low Testosterone",
          description: "Your results suggest that you may be experiencing significant symptoms of low testosterone. These can affect your physical health, emotional well-being, and sexual performance. It is highly recommended that you consult with a healthcare provider for a full evaluation, which may include blood tests to assess your testosterone levels and a personalized treatment plan."
        };
      default:
        return {
          title: "Unknown Risk Level",
          description: "Please consult with a healthcare provider for a proper evaluation."
        };
    }
  };

  const riskInfo = getRiskDescription();

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Do I Have Low Testosterone? Take Free Low Testosterone Assessment Quiz
        </title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="do i have low testosterone, low testosterone quiz, low testosterone test, low testosterone assessment, low testosterone symptoms, low testosterone self assessment, low testosterone quiz, low testosterone symptoms quiz, low testosterone checker, do i have low testosterone, low testosterone evaluation, low testosterone screening test, sexual health quiz, low testosterone questionnaire"
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
          content="Take our low testosterone quiz to assess your symptoms. Our free low testosterone self-assessment tool helps determine if you may have low testosterone and helps you know the next steps to take"
        />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta
          content="https://privhealth.co/tools/do-i-have-low-testosterone"
          property="og:url"
        />
        <meta
          content="Do I Have Low Testosterone? Take Free Low Testosterone Assessment Quiz"
          property="og:title"
        />
        <meta
          content="Take our low testosterone quiz to assess your symptoms. Our free low testosterone self-assessment tool helps determine if you may have low testosterone and helps you know the next steps to take"
          property="og:description"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          name="twitter:title"
          content="Do I Have Low Testosterone? Take Free Low Testosterone Assessment Quiz"
        />
        <meta
          name="twitter:description"
          content="Take our low testosterone quiz to assess your symptoms. Our free low testosterone self-assessment tool helps determine if you may have low testosterone and helps you know the next steps to take"
        />
        <link
          href="https://privhealth.co/tools/do-i-have-low-testosterone"
          rel="canonical"
        />
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
              <span className="score-suffix">/30</span>
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

          <CenterButton
            title="Start my online visit"
            href="/doctor-consultation"
            type="button"
          />

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