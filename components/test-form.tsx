import React, { useState, useEffect } from "react";
import axios from "axios";
import StartError from "./startTestError";
import StartSuccess from "./startTestSuccess";
import LoadingButton from "./loadingButton";
import CenterButton from "./centerButton";

interface IState {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    score: number;
    country_code: string;
  };
}

const url = "https://priv-health.herokuapp.com/v1/ed-assessment";

const TestForm = ({ tScore, start }: any) => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      score: tScore,
      country_code: "234",
    },
  });

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

  useEffect(() => {
    if (isSuccess) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = `
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
            'send_to': 'AW-11147200607/Zeh4CM3ehJsYEN-Qs8Mp',
            'event_callback': callback
          });
          return false;
        }
        gtag_report_conversion();
      `;
      document.body.appendChild(script);
    }
  }, [isSuccess]);

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
        score: state.user.score,
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

  const setIsLoadingFunc = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="max-w-m mx-5 sm:mx-auto mt-17">
      <div className={isSuccess || isError ? "hidden" : "block"}>
        <p className=" leading-tight md:pr-14 md:text-3xl text-2xl md:text-start font-bold text-[#5355AC] ">
          Send my test results
        </p>
        <p className="mt-4 text-base md:text-lg font-normal md:text-start text-[#111111] mb-9">
          Please enter your details to get your assessment results sent to you
        </p>
        <form onSubmit={handleSubmit}>
          <div className="md:grid md:grid-cols-2 md:gap-5">
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
              name="phone_number"
              value={state.user.phone_number}
              onChange={handleChange}
              className="border h-11 md:h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>

          <div className="mb-15 lg:mb-28">
            {isLoading ? (
              <CenterButton title="Get my result" type="submit" />
            ) : (
              <LoadingButton />
            )}
            <p
              onClick={() => {
                start();
              }}
              className="mt-7 text-[#5355AC] text-center text-sm"
            >
              Click here to start again
            </p>
          </div>
        </form>
      </div>
      <div className={isSuccess ? "block" : "hidden"}>
        <StartSuccess start={start} />
      </div>
      <div className={isError ? "block" : "hidden"}>
        <StartError toggle={setIsErrorFunc} toggleFav={setIsLoadingFunc} />
      </div>
    </div>
  );
};

export default TestForm;
