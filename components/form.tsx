import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StartError from "./startError";
import StartSuccess from "./startSuccess";
import lock from "../public/assets/lock.svg";
import two from "../public/assets/1.svg";
import one from "../public/assets/2.svg";
import three from "../public/assets/3.svg";
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
    padding: "15px 30px",
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

const url = "https://priv-health.herokuapp.com/v1/consult";

const Form = () => {
  const router = useRouter();

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

  const [isReady, setIsReady] = useState(true);

  const [isSuccess, setIsSuccess] = useState(false);

  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const setIsReadyFunc = () => {
    setIsReady(!isReady);
  };

  const setIsSuccessFunc = () => {
    setIsSuccess(!isSuccess);
  };

  const setIsErrorFunc = () => {
    setIsError(!isError);
  };

  useEffect(() => {
    if (isSuccess) {
      {
        `gtag('event', 'conversion', {'send_to': 'AW-11147200607/WS42CIf-tJgYEN-Qs8Mp'});`;
      }
    }
  }, [isSuccess]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoadingFunc();
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
          router.push("/confirmation");
        } else {
          setIsErrorFunc();
        }
      })
      .catch((error) => {
        setIsErrorFunc();
        console.log(error);
      });
  };

  const setIsLoadingFunc = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="max-w-m mx-5 sm:mx-auto mt-[25px]">
      <div className={isReady ? "block" : "hidden"}>
        <p className=" leading-tight md:text-[28px] text-2xl text-center font-bold text-[#5355AC] mb-[30px] md:mb-[35px]">
          How Priv works
        </p>

        <div className="md:px-5 px-[15px] py-5 md:py-[25px] bg-[#EEEFF6] rounded-[15px] mb-[15px] md:mb-5">
          <div className="flex">
            <img src={one.src} alt="" className="mr-[12px] w-[18px] md:w-5" />
            <p className="text-[14px] md:text-[16px] leading-[17px] md:leading-[20.24px] font-medium">
              Online assessment
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] leading-[19px] md:leading-[21px] mt-2 font-">
            Answer a few questions about your symptoms. For ₦5,000, a doctor
            will assess you and get back to you within 24 hours
          </p>
        </div>
        <div className="md:px-5 px-[15px] py-5 md:py-[25px] bg-[#EEEFF6] rounded-[15px] mb-[15px] md:mb-5">
          <div className="flex">
            <img src={two.src} alt="" className="mr-[12px] w-[18px] md:w-5" />
            <p className="text-[14px] md:text-[16px] leading-[17px] md:leading-[20.24px] font-medium">
              Personalized treatment
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] leading-[19px] md:leading-[21px] mt-2 font-">
            Receive your personalized treatment plan and medicines directly at
            home within 24 hours after it is approved
          </p>
        </div>
        <div className="md:px-5 px-[15px] py-5 md:py-[25px] bg-[#EEEFF6] rounded-[15px] mb-10">
          <div className="flex">
            <img src={three.src} alt="" className="mr-[12px] w-[18px] md:w-5" />
            <p className="text-[14px] md:text-[16px] leading-[17px] md:leading-[20.24px] font-medium">
              Ongoing support
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] leading-[19px] md:leading-[21px] mt-2 font-">
            We will follow up to see how you&apos;re doing, and adjust your treatment
            as needed. Message us any time with questions
          </p>
        </div>

        <div className="mb-15 lg:mb-28">
          <SustainButton
            className="self-center text-sm md:text-base font-medium"
            onClick={() => setIsReadyFunc()}
          >
            <p>I understand</p>
          </SustainButton>
        </div>
      </div>

      <div className={isSuccess || isError || isReady ? "hidden" : "block"}>
        <p className=" leading-tight md:text-[28px] text-2xl text-center font-bold text-[#5355AC] ">
          Get started
        </p>
        <p className="mt-4 mb-[30px] md:mb-[35px] text-base md:text-lg md:leading-6 font-normal text-center text-[#111111]">
          Kindly fill the form with correct information
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="mb-2">
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
                className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div className="mb-2">
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
                className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="flex mb-[30px]">
            <img src={lock.src} alt="" />
            <p className="md:text-[13px] leading-4 text-xs text-[#73738C] ml-1">
              Your information will never be shared with anyone
            </p>
          </div>
          <div className="mb-[30px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={state.user.email}
              onChange={handleChange}
              className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          <div className="mb-[30px]">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              WhatsApp phone number
            </label>
            <input
              type="tel"
              name="phone_number"
              value={state.user.phone_number}
              onChange={handleChange}
              className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder=""
              required
            />
            <p className="text-[#73738C] text-[12px] md:text-[13px] leading-4 mt-[10px]">
              Enter your Nigerian WhatsApp phone number eg. 08012345678
            </p>
          </div>
          <label
            htmlFor="condition"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Condition
          </label>
          <select
            name="condition"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-white h-11 md:h-12"
            value={state.user.condition}
            onChange={handleSelect}
            required
          >
            <option hidden selected>
              Select Condition
            </option>
            <option value="erectile dysfunction">Erectile dysfunction</option>
            <option value="premature ejaculation">Premature ejaculation</option>
            <option value="low sex drive">Low sex drive</option>
            <option value="enlarged prostate">Enlarged prostate</option>
            <option value="hair loss">Hair loss</option>
            <option value="poor sleep">Poor sleep</option>
            <option value="STI treatment">STI treatment</option>
            <option value="others">Others</option>
          </select>
          <div className="bg-[#EEEFF6] p-4 mt-12 mb-[25px] rounded-lg">
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
            {isLoading ? (
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
              >
                <p>Get started</p>
              </SustainButton>
            ) : (
              <SustainButton
                className="self-center text-sm md:text-base font-medium disabled:opacity-65"
                type="submit"
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#5355AC]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="white"
                    />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </SustainButton>
            )}
          </div>
        </form>
      </div>
      {/* <div className={isSuccess ? "block" : "hidden"}>
        <StartSuccess />
      </div> */}
      <div className={isError ? "block" : "hidden"}>
        <StartError toggle={setIsErrorFunc} toggleFav={setIsLoadingFunc} />
      </div>
    </div>
  );
};

export default Form;
