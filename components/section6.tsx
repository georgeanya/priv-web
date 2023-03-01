import React from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";

const FAQ = ({ faq, index, toggleFAQ }: any) => {
  return (
    <div>
      <div
        className=" inline-flex"
        onClick={() => toggleFAQ(index)}
        key={index}
      >
        <div className="self-start min-w-fit">
          {faq.open ? (
            <img
              className="mr-6 flex self-center w-4 lg:w-5 lg:mr-10 mt-3.5"
              src={minus.src}
              alt=""
            />
          ) : (
            <img
              className="mr-6 self-center w-4 lg:w-5 lg:mr-10 mt-1"
              src={plus.src}
              alt=""
            />
          )}
        </div>
        <div className="self-center">
          <p className="mt--10 text-lg lg:text-2xl text-[#002A47] font-medium">
            {faq.question}
          </p>
          {faq.open ? (
            <p className="text-base lg:text-xl text-[#476D85] mt-2 lg:my-6">
              {faq.answer}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr className="my-6 lg:my-8 mb-6 lg:mb-12" />
    </div>
  );
};

export default FAQ;
