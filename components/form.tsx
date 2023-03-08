import React, { useState } from "react";
import { useTheme, Theme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import axios from "axios";
import StartError from "./startError";
import StartSuccess from "./startSuccess";

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
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    condition: string;
    country_code: string;
  };
}

const url = "http://priv-health.herokuapp.com/v1/consult";

const Form = () => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      condition: "",
      country_code: "234",
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const setIsSuccessFunc = () => {
    setIsSuccess(!isSuccess);
  };

  const setIsErrorFunc = () => {
    setIsError(!isError);
  };
  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>): any => {
    event.preventDefault();

    axios
      .post(url, {
        first_name: state.user.first_name,
        last_name: state.user.last_name,
        email: state.user.email,
        phone_number: state.user.phone_number?.slice(1),
        condition: state.user.condition,
        country_code: state.user.country_code,
      })
      .then((res) => {
        if (
          res.data.message === "user previously subscribed" ||
          "user subscribed successfully"
        ) {
          setIsSuccessFunc();
        } else {
          setIsErrorFunc();
        }
      })
      .catch((error) => {
        setIsErrorFunc();
        console.log(error);
      });
  };

  return (
    <div className="max-w-m mx-5 sm:mx-auto mt-17">
      <div className={isSuccess || isError ? "hidden" : "block"}>
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
          <p className="text-white text-sm md:text-base font-medium">
            NGN 4,000
          </p>
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
                name="first_name"
                value={state.user.first_name}
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
                name="last_name"
                value={state.user.last_name}
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
              name="email"
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
              name="phone_number"
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
            name="condition"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-white h-11 md:h-12"
            id="my-country-input"
            value={state.user.condition}
            onChange={handleSelect}
            required
          >
            <option>Select condition</option>
            <option value="erectile dysfunction">Erectile dysfunction</option>
            <option value="premature ejaculation">Premature ejaculation</option>
            <option value="vaginal dryness">Vaginal dryness</option>
            <option value="hair loss">Hair loss</option>
            <option value="genital herpes">Genital herpes</option>
            <option value="cold sores">Cold sores</option>
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
                onClick={handleSubmit}
              >
                Book consultation
              </SustainButton>
            </Link>
          </div>
        </form>
      </div>
      <div className={isSuccess ? "block" : "hidden"}>
        <StartSuccess />
      </div>
      <div className={isError ? "block" : "hidden"}>
        <StartError />
      </div>
    </div>
  );
};

export default Form;
