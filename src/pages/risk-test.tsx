import React from "react";
import Navbar from "../../components/navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";

type Question = {
  text: string;
  options: {
    text: string;
    count: number;
  }[];
};

const questions: Question[] = [
  {
    text: "Do you have a history of heart disease?",
    options: [
      { text: "Yes, in my immediate family", count: 1 },
      { text: "Yes, I have been diagnosed", count: 2 },
      { text: "No", count: 0 },
    ],
  },
  {
    text: "Do you smoke or use tobacco products?",
    options: [
      { text: "Yes", count: 2 },
      { text: "No", count: 0 },
    ],
  },
  {
    text: "Do you have high blood pressure or hypertension?",
    options: [
      { text: "Yes", count: 1 },
      { text: "No", count: 0 },
    ],
  },
  {
    text: "Do you have high cholesterol levels?",
    options: [
      { text: "Yes", count: 1 },
      { text: "No", count: 0 },
    ],
  },
  {
    text: "Do you have a sedentary lifestyle?",
    options: [
      { text: "Yes", count: 1 },
      { text: "No", count: 0 },
    ],
  },
];

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

const riskTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionClick = (optionCount: number) => {
    setTotalScore(totalScore + optionCount);
    if (currentQuestionIndex === questions.length - 1) {
      console.log(`Total score: ${totalScore}`);
      // You could redirect to a result page here
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <Navbar />
      <div className="md:px-[510px] px-5 mt-[65px] md:mt-[100px] text-center">
        <p className="md:text-[44px] text-3xl leading-[38px] md:leading-[55px] font-bold text-[#5355AC]">
          Erectile dysfunction self-assessment
        </p>
        <p className="md:text-xl text-base mt-6 md:px-5 md:mb-9 mb-7 text-[#111111]">
          This self-assessment can help determine whether you might have the
          symptoms of erectile dysfunction.
        </p>
        <div className="md:px-[89px] px-[57px]">
          <SustainButton>Take the assessment now</SustainButton>
        </div>
        <p className="text-sm mt-7 md:mt-9 text-[#73738C] px-5">
          *This is an assessment tool. Do not use for diagnostic purposes.
        </p>
      </div>
      <div>
        <h1>{currentQuestion.text}</h1>
        <ul>
          {currentQuestion.options.map((option) => (
            <li key={option.text}>
              <button onClick={() => handleOptionClick(option.count)}>
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default riskTest;
