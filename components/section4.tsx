import React from "react";
import support from "../public/assets/support.svg";

const Section4 = () => {
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
