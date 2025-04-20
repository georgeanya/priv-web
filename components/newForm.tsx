import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import assessment from "../public/assets/assessment.png";
import icon from "../public/assets/icon.svg";
import {Input} from "@heroui/input";
import {DatePicker} from "@heroui/date-picker";
import {
  DateValue,
  parseDate,
  getLocalTimeZone,
} from "@internationalized/date";
import {Select, SelectSection, SelectItem} from "@heroui/select";
import CenterButton from "./centerButton";
import LoadingButton from "./loadingButton";

const PrivWhiteButton = styled(Button)({
  background: "white !important",
  fontFamily: "Circular Std",
  color: "#5355AC",
  cursor: "pointer",
  padding: "12px 37px",
  margin: "0px 0px",
  width: "100%",
  border: "1px solid #C4CED4",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "9px 20px",
  },
});

interface IState {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    source: string;
    dob: DateValue | null;
    gender: string;
    discount_code: string;
  };
  plan: {
    _id: string;
    plan_name: string;
    price: number;
    duration: string;
  };
}

const Form = () => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      dob: parseDate("1995-02-06"),
      gender: "Male",
      source: "",
      discount_code: "",
    },
    plan: {
      _id: "",
      plan_name: "",
      price: 0,
      duration: "",
    },
  });

  const [discountPrice, setDiscountPrice] = useState(0);
  const [pageNumber, setPageNumber] = useState(7);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setState({
      ...state,
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const nextPage = () => setPageNumber((prevPage) => prevPage + 1);
  const prevPage = () =>
    setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  const handleError = () => {
    setIsLoading(true);
    setPageNumber(1);
  };

  const signUp = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/auth/sign-up",
        {
          email: state.user.email,
        }
      )
      .then((res) => {
        if (res.data.data.status === "profile incomplete") {
          setPageNumber(2);
        } else if (res.data.data.status === "profile completed") {
          setPageNumber(7);
        } else {
        }
      })
      .catch((error) => {
        setPageNumber(9);
      })
      .finally(() => setIsLoading(true));
  };

  const completeProfile = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    const isoDob = getISODateString(state.user.dob);
    console.log("Submitting DOB as ISO string:", isoDob);
    console.log(state);

    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/auth/complete-profile",
        {
          first_name: state.user.first_name,
          last_name: state.user.last_name,
          email: state.user.email,
          phone_number: `234${state.user.phone_number?.slice(1)}`,
          dob: isoDob,
          gender: state.user.gender,
          source: state.user.source,
        }
      )
      .then((res) => {
        if (res.data.message === "proceed to payment") {
          console.log(state);

          setPageNumber(7);
        } else {
        }
      })
      .catch((error) => {
        console.log(state);
        setPageNumber(9);
        console.log(error)
      })
      .finally(() => setIsLoading(true));
  };

  const fetchPlanData = async () => {
    try {
      const response = await axios.get(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/payment/plans"
      );

      const plan = response.data.data.plans[0];

      setState({
        ...state,
        plan: {
          ...state.plan,
          price: plan.price,
          _id: plan._id,
        },
      });
    } catch (error) {
      setPageNumber(9);
    }
  };

  const discountCode = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    // setIsLoading(true);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/payment/discount",
        {
          discount_code: state.user.discount_code,
        }
      )
      .then((res) => {
        if (res.data.message === "discount code validated successfully") {
          setDiscountPrice(res.data.data.amount);
        } else {
        }
      })
      .catch((error) => {});
  };

  const initializePayment = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/payment/initialize",
        {
          discount_code: state.user.discount_code,
          email: state.user.email,
          membership_plan_id: state.plan._id,
        }
      )
      .then((res) => {
        if (res.data.message === "payment initialized successfully") {
          // Note the nested data.data structure
          // const link = document.createElement("a");
          // link.href = res.data.data.data.authorization_url;
          // link.target = "_blank";
          // link.rel = "noopener nosource";
          // document.body.appendChild(link);
          // link.click();
          // document.body.removeChild(link);
          window.location.href = res.data.data.data.authorization_url;
        } else {
          throw new Error(res.data.message || "Payment initialization failed");
        }
      })
      .catch((error) => {
        setPageNumber(9);
      })
      .finally(() => setIsLoading(false));
  };

  const handleDateChange = (date: DateValue | null) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        dob: date,
      },
    }));
  };

  const getISODateString = (date: DateValue | null): string => {
    if (!date) return "";
    return date.toDate(getLocalTimeZone()).toISOString();
  };
  const progress = (pageNumber / 6) * 100;

  return (
    <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
      {pageNumber === 1 && (
        <div id="page1">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#5355AC] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-[22px] font-bold text-[#5355AC]">
            What is your email?
          </p>

          <form onSubmit={signUp}>
            <div className="">
              <Input
                type="email"
                name="email"
                label="Email"
                value={state.user.email}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#5355AC]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
                placeholder=""
                variant="bordered"
                required
              />
            </div>

            <div className="bg-[#EEF3F6] p-4 mt-8 md:mt-10 mb-6 rounded-lg">
              <p className="text-[#111111] text-[13px] leading-[19px] md:text-sm">
                By filling out this form, you agree to Priv Health’s{" "}
                <a
                  className="text-[#5355AC] underline font-medium"
                  href="https://lifebox-labs.notion.site/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1" title="Terms of use"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  className="text-[#5355AC] underline font-medium"
                  href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35" title="Privacy policy"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="mb-16">
              {isLoading ? (
                <CenterButton title="Next" type="submit" />
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      )}

      {pageNumber === 2 && (
        <div id="page2">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#5355AC] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-3 text-[22px] font-bold text-[#5355AC]">
            Whats is your name?
          </p>
          <p className="md:text-[18px] md:leading-[24px] text-[#111111] text-[16px] leading-[22px] mb-8">
            Your information will never be shared with anyone
          </p>

          <form>
            <div className="mb-[15px]">
              <Input
                type="text"
                name="first_name"
                label="First name"
                variant="bordered"
                value={state.user.first_name}
                onChange={handleChange}
                size="md"
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#5355AC]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
                placeholder=""
                required
              />
            </div>

            <div className="mb-10">
              <Input
                type="text"
                name="last_name"
                label="Last name"
                variant="bordered"
                value={state.user.last_name}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#5355AC]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
                placeholder=""
                required
              />
            </div>

            <div className="mb-16">
              <CenterButton title="Continue" onClick={nextPage} type="submit" />
            </div>
          </form>
        </div>
      )}

      {pageNumber === 3 && (
        <div id="page3">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#5355AC] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-3 text-[22px] font-bold text-[#5355AC]">
            What is your phone number?
          </p>
          <p className="md:text-[18px] md:leading-[24px] text-[#111111] text-[16px] leading-[22px] mb-8">
            This is so we can contact you if we have any questions
          </p>

          <form>
            <div className="mb-[40px]">
              <Input
                type="tel"
                name="phone_number"
                label="Phone number"
                variant="bordered"
                value={state.user.phone_number}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#5355AC]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
                placeholder=""
                required
              />
              <p className="text-[#111111] text-[12px] md:text-[13px] leading-4 mt-[12px]">
                Enter your Nigerian WhatsApp phone number eg. 08012345678
              </p>
            </div>

            <div className="mb-16">
              <CenterButton title="Continue" onClick={nextPage} type="submit" />
            </div>
          </form>
        </div>
      )}

     
     
      {pageNumber === 4 && (
        <div id="page4">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#5355AC] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-[22px] font-bold text-[#5355AC]">
            How did you hear about us?
          </p>

          <form onSubmit={completeProfile}>
            <div className="mb-[40px]">
              <Select
                label="Select an option"
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  trigger:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
              >
                <SelectItem key="friend">Friend</SelectItem>
                <SelectItem key="advert">Advert</SelectItem>
                <SelectItem key="social_media">Social Media</SelectItem>
                <SelectItem key="doctor">Doctor</SelectItem>
              </Select>
            </div>

            <div className="mb-16">
              {isLoading ? (
                <CenterButton
                  title="Continue"
                  type="submit"
                />
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      )}
      {pageNumber === 7 && (
        <div>
          <div className="md:mt-[120px] mt-[144px] flex justify-center">
          <img src={assessment.src} alt="" />
          </div>
          <div className="text-center">
          <p className="mt-[32px] md:mt-[40px] leading-8  md:text-[28px] md:leading-[30px] mb-4 text-[22px] font-bold text-[#5355AC]">
          Let's start your assessment
          </p>
          <p className="md:text-[18px] md:leading-[24px] text-[#111111] text-[16px] leading-[22px] mb-7">
          We'll be asking a few questions so our men’s health doctor provider can find the best treatment for you
          </p>
          </div>
          <div className="mb-16">
            <CenterButton
              title="Continue"
              onClick={nextPage}
              type="submit"
            />
          </div>
        </div>
      )}

      {pageNumber === 8 && (
       <div></div>
          
      )}
      {pageNumber === 9 && (
        <div id="page8">
          <div className="flex justify-center mt-24">
            <img src={circle.src} alt="" className="w-20" />
          </div>
          <p className="text-[22px] leading-[28px] md:text-[28px] md:leading-[35px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
            An error occurred
          </p>
          <p className="text-[#111111] text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] text-center mb-7 md:mb-8">
            Please make sure you entered a valid details and try again
          </p>
          <CenterButton title="Try Again" onClick={handleError} />
        </div>
      )}
    </div>
  );
};

export default Form;