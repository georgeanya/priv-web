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
    text: "How often do you ejaculate before you or your partner is satisfied during sex?",
    options: [
      { text: "Never, I last long enough", count: 0 },
      { text: "Rarely, only in stressful situations", count: 1 },
      { text: "Sometimes, I ejaculate too early", count: 2 },
      { text: "Frequently, I ejaculate before I or my partner is satisfied", count: 3 },
    ],
  },
  {
    text: "How long does it typically take for you to ejaculate after penetration?",
    options: [
      { text: "More than 10 minutes", count: 0 },
      { text: "5-10 minutes", count: 1 },
      { text: "1-5 minutes", count: 2 },
      { text: "Less than 1 minute", count: 3 },
    ],
  },
  {
    text: "How does premature ejaculation affect your relationship or sex life?",
    options: [
      { text: "It doesn't affect me or my relationship", count: 0 },
      { text: "Occasionally, but it's not a big issue", count: 1 },
      { text: "It causes frustration, but we manage", count: 2 },
      { text: "It causes significant frustration and stress in my relationship", count: 3 },
    ],
  },
  {
    text: "How often do you feel embarrassed or frustrated about your sexual performance due to premature ejaculation?",
    options: [
      { text: "Never, I'm confident about my performance", count: 0 },
      { text: "Occasionally, but it doesn't affect my self-esteem", count: 1 },
      { text: "Frequently, it affects my confidence and mood", count: 2 },
      { text: "Almost always, it's a major source of stress and embarrassment", count: 3 },
    ],
  },
  {
    text: "Do you experience difficulty controlling when you ejaculate?",
    options: [
      { text: "No, I can control it easily", count: 0 },
      { text: "Occasionally, it's a little hard to control", count: 1 },
      { text: "Often, I can't control when I ejaculate", count: 2 },
      { text: "Almost always, I can't control when I ejaculate", count: 3 },
    ],
  },
  {
    text: "Do you feel physically ready for sex again soon after ejaculating?",
    options: [
      { text: "Yes, I feel ready after a short break", count: 0 },
      { text: "Sometimes, but I need a longer break", count: 1 },
      { text: "I often feel physically drained or uninterested after ejaculating", count: 2 },
      { text: "I feel completely unsatisfied and exhausted after ejaculating", count: 3 },
    ],
  },
  {
    text: "How do you feel mentally during or after ejaculation?",
    options: [
      { text: "Mentally satisfied and relaxed", count: 0 },
      { text: "Occasionally disappointed, but not too concerned", count: 1 },
      { text: "Often disappointed and frustrated with my performance", count: 2 },
      { text: "Almost always feel anxious, dissatisfied, or embarrassed", count: 3 },
    ],
  },
  {
    text: "Have you noticed that your premature ejaculation happens more often when you're feeling stressed or anxious?",
    options: [
      { text: "No, stress doesn't affect my performance", count: 0 },
      { text: "Occasionally, but it's not always linked to stress", count: 1 },
      { text: "Yes, it often happens when I'm stressed or anxious", count: 2 },
      { text: "Almost always, stress and anxiety cause premature ejaculation", count: 3 },
    ],
  },
  {
    text: "Do you experience premature ejaculation even during the beginning of sexual activity, without much stimulation?",
    options: [
      { text: "No, I can last for a while even at the start", count: 0 },
      { text: "Occasionally, but only if I'm very excited", count: 1 },
      { text: "Yes, it often happens early in the activity", count: 2 },
      { text: "Yes, I ejaculate almost immediately after penetration", count: 3 },
    ],
  },
  {
    text: "How long have you been experiencing premature ejaculation?",
    options: [
      { text: "I've never experienced premature ejaculation", count: 0 },
      { text: "I've only experienced it recently", count: 1 },
      { text: "I've been dealing with it for a while", count: 2 },
      { text: "I've had it for a long time and it's worsening", count: 3 },
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
    if (totalScore <= 12) return "mild";
    if (totalScore <= 18) return "moderate";
    return "severe";
  };

  const riskLevel = getRiskLevel();

  const getRiskDescription = () => {
    switch (riskLevel) {
      case "normal":
        return {
          title: "Normal Sexual Function",
          description: "Based on your answers, it seems you do not have premature ejaculation or experience only occasional issues. If you feel concerned or notice future changes, it's good to consult a healthcare provider, but there's no immediate cause for concern. Continue maintaining a healthy lifestyle, managing stress, and communicating openly with your partner."
        };
      case "mild":
        return {
          title: "Mild Premature Ejaculation",
          description: "You may experience mild symptoms of premature ejaculation, especially in stressful or highly stimulating situations. It might be helpful to practice relaxation techniques, communication with your partner, and focus on improving self-control. If the issue persists, consider seeking advice from a healthcare provider."
        };
      case "moderate":
        return {
          title: "Moderate Premature Ejaculation",
          description: "You may be experiencing noticeable difficulty with premature ejaculation. Stress, anxiety, or other factors may be contributing to the issue. It's a good idea to speak with a healthcare provider or therapist who can help you explore treatment options like behavioral therapy, medications, or lifestyle changes."
        };
      case "severe":
        return {
          title: "Severe Premature Ejaculation",
          description: "You are showing significant symptoms of premature ejaculation, which may be affecting your emotional well-being and your relationship. Immediate consultation with a healthcare provider is recommended for a full assessment and personalized treatment options, which may include therapy, medication, or exercises designed to help improve control."
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
          Do I Have Premature Ejaculation? Take Free Premature Ejaculation Assessment Quiz
        </title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="do i have premature ejaculation, premature ejaculation quiz, premature ejaculation test, premature ejaculation assessment, premature ejaculation symptoms, premature ejaculation self assessment, premature ejaculation quiz, premature ejaculation symptoms quiz, premature ejaculation checker, do i have premature ejaculation, premature ejaculation evaluation, premature ejaculation screening test, sexual health quiz, premature ejaculation questionnaire"
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
          content="Take our premature ejaculation quiz to assess your symptoms. Our free premature ejaculation self-assessment tool helps determine if you may have premature ejaculation and helps you know the next steps to take"
        />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta
          content="https://privhealth.co/tools/do-i-have-premature-ejaculation"
          property="og:url"
        />
        <meta
          content="Do I Have Premature Ejaculation? Take Free Premature Ejaculation Assessment Quiz"
          property="og:title"
        />
        <meta
          content="Take our premature ejaculation quiz to assess your symptoms. Our free premature ejaculation self-assessment tool helps determine if you may have premature ejaculation and helps you know the next steps to take"
          property="og:description"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          name="twitter:title"
          content="Do I Have Premature Ejaculation? Take Free Premature Ejaculation Assessment Quiz"
        />
        <meta
          name="twitter:description"
          content="Take our premature ejaculation quiz to assess your symptoms. Our free premature ejaculation self-assessment tool helps determine if you may have premature ejaculation and helps you know the next steps to take"
        />
        <link
          href="https://privhealth.co/tools/do-i-have-premature-ejaculation"
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
    onClick={(e) => {
      e.preventDefault();
      window.location.href = "/doctor-consultation";
    }}
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