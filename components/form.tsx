import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

const Form = () => {
  return (
    <div className="max-w-m mx-5 sm:mx-auto mt-17">
      <p className=" leading-tight lg:pr-14 lg:text-3xl text-1xl lg:text-start font-bold text-[#5355AC] ">
        Book your consultation
      </p>
      <p className="mt-4 text-base lg:text-lg font-normal lg:pr-8 lg:text-start text-[#111111]">
        Meet a doctor that can help you get started on your journey to better
        health
      </p>
      <div className="bg-[#595A90] p-5 flex justify-between rounded-lg mt-8 mb-9">
        <p className="text-[#DADDF1] text-sm mt-0.5">Consultation fee</p>
        <p className="text-white text-base font-medium">NGN 2,000</p>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-7">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="border h-11 lg:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="border h-11 lg:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-7">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="border h-11 lg:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            WhatsApp Phone Number
          </label>
          <input
            type="number"
            id="email"
            className="border h-11 lg:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <label
          htmlFor="priority"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Condition
        </label>
        <select
          name="select Priority"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-white h-11 lg:h-12"
          id="my-country-input"
        >
          <option selected>Select condition</option>
          <option value="nig">Erectile dysfunction</option>
          <option value="gha">Premature ejaculation</option>
          <option value="ken">Vaginal dryness</option>
          <option value="uga">Hair loss</option>
          <option value="cam">Genital herpes</option>
          <option value="bot">Cold sores</option>
        </select>
        <div className="bg-[#EEEFF6] p-4 mt-12 mb-9 rounded-lg">
          <p className="text-[#73738C] text-sm">
            By filling out this form, you agree to Priv’s{" "}
            <a className="text-[#5355AC] underline" href="">
              Terms of Use
            </a>{" "}
            and{" "}
            <a className="text-[#5355AC] underline" href="">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="mb-28">
          <SustainButton
            className="self-center text-sm lg:text-base font-medium"
            type="submit"
          >
            Book consultation
          </SustainButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
