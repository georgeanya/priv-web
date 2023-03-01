import React from "react";
import { useState } from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";
import support from "../public/assets/support.svg";

const Section4 = () => {
  const [expand, setExpand] = useState(false);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);

  function toggle() {
    setExpand((prevExpand) => !prevExpand);
  }
  function toggle1() {
    setExpand1((prevExpand1) => !prevExpand1);
  }
  function toggle2() {
    setExpand2((prevExpand2) => !prevExpand2);
  }
  function toggle3() {
    setExpand3((prevExpand3) => !prevExpand3);
  }
  function toggle4() {
    setExpand4((prevExpand4) => !prevExpand4);
  }
  function toggle5() {
    setExpand((prevExpand5) => !prevExpand5);
  }

  return (
    <div className="px-5 lg:px-32 lg:pt-28 pt-20 lg:pb-36 pb-24 bg-[#595A90] lg:flex justify-between">
      <div className="max-w-l">
        <p className=" text-3xl lg:text-start lg:text-4xl md:max-w-xl font-bold text-white">
          How does it work?
        </p>
        <div className="max-w-xl min-w-full mt-12 lg:mt-15 ">
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-white font-medium">
                  1. Teleconsult a doctor
                </p>
              </div>
              <p className="text-base lg:text-xl text-white mt-2 lg:my-6">
                Detail your symptoms and consult remotely with a doctor by
                videoconference, messaging or telephone
              </p>
            </div>
          </div>
          <hr className="my-6 lg:my-8" />
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-white font-medium">
                  2. Receive personalized treatment
                </p>
              </div>
              <p className="text-base lg:text-xl text-white mt-2 lg:my-6">
                Receive a personalized treatment plan (medicines) directly at
                home within 24 hours after it is approved
              </p>
            </div>
          </div>
          <hr className="my-6 lg:my-8" />
          <div>
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg lg:text-2xl text-white font-medium">
                  3. Ongoing support
                </p>
              </div>
              <p className="text-base lg:text-xl text-white mt-2 lg:my-6">
                Get unlimited assistance from our medical teams 5 days a week by
                chat or phone
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-lg mt-17">
        <img src={support.src} alt="" className="w-11/12" />
      </div>
    </div>
  );
};

export default Section4;
