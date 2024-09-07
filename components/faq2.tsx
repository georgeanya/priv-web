import React from "react";
import minus from "../public/assets/minus.svg";
import plus from "../public/assets/plus.svg";

const FAQ = ({ faq, index, toggleFAQ }: any) => {
  return (
    <div>
      <div
        className="  flex justify-between flex-row-reverse"
        onClick={() => toggleFAQ(index)}
        key={index}
      >
        <div className="self-start min-w-fit cursor-pointer h-4 md:h-5">
          {faq.open ? (
            <img
              className="flex  self-center w-4 md:w-5  mt-3.5"
              src={minus.src}
              alt=""
            />
          ) : (
            <img
              className="flex  self-center w-4 md:w-5  mt-1"
              src={plus.src}
              alt=""
            />
          )}
        </div>
        <div className="self-center">
          <p className="text-lg md:text-2xl md:leading-[30px] text-[#111111] font-medium">
            {faq.question}
          </p>
          {faq.open ? (
            <p className="text-base md:text-xl md:leading-[30px] text-[#61616B] mt-2 md:mt-6">
              {faq.answer}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr className="my-6 md:my-8" />
    </div>
  );
};

export default FAQ;
