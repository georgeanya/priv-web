import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { setConstantValue } from "typescript";
import Link from "next/link";

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

interface IState {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    phone_number: string;
  };
}

const Form = () => {
  const [state, setState] = useState<IState>({
    user: {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(state.user);
  };

  return (
    <div className="max-w-m mx-5 sm:mx-auto mt-17">
      <p className=" leading-tight md:pr-14 md:text-3xl text-2xl md:text-start font-bold text-[#5355AC] ">
        Book your consultation
      </p>
      <p className="mt-4 text-base md:text-lg font-normal md:pr-8 md:text-start text-[#111111]">
        Meet a doctor that can help you get started on your journey to better
        health
      </p>
      <div className="bg-[#595A90] md:p-5 p-4 flex justify-between rounded-lg mt-8 mb-9">
        <p className="text-[#DADDF1] text-xs md:text-sm mt-0.5">
          Consultation fee
        </p>
        <p className="text-white text-sm md:text-base font-medium">NGN 4,000</p>
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
              value={state.user.firstname}
              onChange={handleChange}
              id="first_name"
              className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
              value={state.user.lastname}
              onChange={handleChange}
              id="last_name"
              className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={state.user.email}
            onChange={handleChange}
            className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nigerian WhatsApp phone number
          </label>
          <input
            type="text"
            id="phone_number"
            value={state.user.phone_number}
            onChange={handleChange}
            className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
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
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-white h-11 md:h-12"
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
          <p className="text-[#73738C] text-xs md:text-sm">
            By filling out this form, you agree to Priv’s{" "}
            <a
              className="text-[#5355AC] underline"
              href="https://priv-health.notion.site/Terms-of-use-254e525466a3493687d94fd671d93ad8"
            >
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              className="text-[#5355AC] underline"
              href="https://priv-health.notion.site/Privacy-policy-2f70cbb81ab843ca920e87d2b32caa37"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="mb-15 lg:mb-28">
          <Link href="">
            <SustainButton
              className="self-center text-sm md:text-base font-medium"
              type="submit"
              onSubmit={handleSubmit}
            >
              Book consultation
            </SustainButton>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
