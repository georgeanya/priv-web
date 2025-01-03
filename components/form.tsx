import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StartError from "./startError";
import StartSuccess from "./startSuccess";
import lock from "../public/assets/lock.svg";
import two from "../public/assets/1.svg";
import one from "../public/assets/2.svg";
import three from "../public/assets/3.svg";
import CenterButton from "./centerButton";
import LoadingButton from "./loadingButton";

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
          Answer a few questions about your symptoms and medical history. A doctor will assess you and get back to you within 24 hours
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
            We will follow up to see how you&apos;re doing, and adjust your
            treatment as needed. Message us any time with questions
          </p>
        </div>

        <div className="mb-15 lg:mb-28">
          <CenterButton title="I understand" onClick={() => setIsReadyFunc()} />
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
            <option value="low testosterone">Low testosterone</option>
            <option value="hair loss">Hair loss</option>
            <option value="STI treatment">STI treatment</option>
            <option value="mental health">Mental health</option>
            <option value="doctor consultation">Doctor consultation</option>
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
              <CenterButton title="Get started" href="" type="submit" />
            ) : (
              <LoadingButton />
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
