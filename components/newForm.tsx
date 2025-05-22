import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import assessment from "../public/assets/assessment.png";
import icon from "../public/assets/icon.svg";
import { Input } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import { DateInput } from "@heroui/date-input";
import circle from "../public/assets/circle.svg";
import stars from "../public/assets/stars.svg";
import {
  DateValue,
  parseDate,
  getLocalTimeZone,
} from "@internationalized/date";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import CenterButton from "./centerButton";
import LoadingButton from "./loadingButton";
import { useFormData } from "./FormDataContext";

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

const Form = () => {
  const { formData, updateFormData } = useFormData();
  const user = formData.user;

  const [discountPrice, setDiscountPrice] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const conditionFromUrl = queryParams.get("condition");

    if (conditionFromUrl) {
      updateFormData({ condition: conditionFromUrl });
    }
  }, []);

  useEffect(() => {
    const hasExistingSession = localStorage.getItem("session_id");
    if (!hasExistingSession) {
      localStorage.removeItem("session_id");
      updateFormData({ session_id: "" });
    }
  }, []);

  useEffect(() => {
    if (pageNumber === 5 && user?.session_id) {
      console.log("Session ID from user state:", user.session_id);
      console.log("Patient ID from user state:", user.patient_id);
    }
  }, [pageNumber, user]);

  useEffect(() => {
    if (pageNumber === 5) {
      createSession();
    }
  }, [pageNumber]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [event.target.name]: event.target.value });
  };

  const handleDateChange = (date: DateValue | null) => {
    if (date) {
      const formattedDate = `${date.toString()}T23:00:00.000+00:00`;
      updateFormData({ dob: formattedDate });
    }
  };

  const nextPage = () => setPageNumber((prevPage) => prevPage + 1);
  const prevPage = () =>
    setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  const handleError = () => {
    setIsLoading(true);
    setPageNumber(1);
  };

  const referralSources = [
    { key: "friend", label: "Friend" },
    { key: "advert", label: "Advert" },
    { key: "social_media", label: "Social Media" },
    { key: "doctor", label: "Doctor" },
  ];

  const getFormUrl = (condition: string) => {
    switch (condition) {
      case "erectile-dysfunction":
        return "https://forms.careforms.io/forms/uwy6gqyj4p23mre";
      case "premature-ejaculation":
        return "https://forms.careforms.io/forms/r1lqdk8gvebzmtc";
      case "low-testosterone":
        return "https://forms.careforms.io/forms/wcbxbutsw554l3j";
      case "sti-treatment":
        return "https://forms.careforms.io/forms/1qi9c16bctoxpz4";
      default:
        return "https://forms.careforms.io/forms/qmxssi136hd7hdm";
    }
  };

  const signUp = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/auth/sign-up",
        {
          email: user.email,
        }
      )
      .then((res) => {
        updateFormData({ patient_id: res.data.data.patient_id });
        console.log(user);
        if (res.data.data.status === "profile incomplete") {
          setPageNumber(2);
        } else if (res.data.data.status === "profile completed") {
          updateFormData({ patient_id: res.data.data.patient_id });
          console.log(user);

          setPageNumber(6);
          console.log(user);
        } else {
        }
      })
      .catch((error) => {
        setPageNumber(11);
      })
      .finally(() => setIsLoading(true));
  };

  const createSession = () => {
    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/intake/session",
        {
          condition: user.condition,
          patient_id: user.patient_id,
        }
      )
      .then((res) => {
        if (res.data.message === "session created successfully") {
          const sessionId = res.data.data.session_id;

          localStorage.setItem("session_id", sessionId);
          localStorage.setItem("email", user.email);
          localStorage.setItem("patient_id", user.patient_id);

          updateFormData({ session_id: res.data.data.session_id });
        } else {
        }
      })
      .catch((error) => {});
  };

  const completeProfile = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);

    axios
      .post(
        "https://priv-health-api-ceb2339d4498.herokuapp.com/v1/patient/auth/complete-profile",
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone_number: `234${user.phone_number?.slice(1)}`,
          dob: user.dob,
          gender: "male",
          source: user.source,
        }
      )
      .then((res) => {
        if (res.data.data.status === "profile completed") {
          console.log(user);
          setPageNumber(6);
        } else {
        }
      })
      .catch((error) => {
        console.log({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone_number: `234${user.phone_number?.slice(1)}`,
          dob: `1998-05-09T23:00:00.000+00:00`,
          gender: user.gender,
          source: `facebook`,
        });
        setPageNumber(11);
        console.log(error);
      })
      .finally(() => setIsLoading(true));
  };

  const formatEmail = (email: string): string => {
    const [username, domain] = email.split("@");
    const modifiedEmail = `${username}+lb@${domain}`;
    return modifiedEmail;
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
                value={user.email}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#111111]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
                placeholder=""
                variant="bordered"
                required
              />
            </div>

            <div className="bg-[#F5F5F5] p-4 mt-8 md:mt-10 mb-6 rounded-lg">
              <p className="text-[#111111] text-[13px] leading-[19px] md:text-sm">
                By filling out this form, you agree to Priv Health&apos;s{" "}
                <a
                  className="text-[#5355AC] underline font-medium"
                  href="https://lifebox-labs.notion.site/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1"
                  title="Terms of use"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  className="text-[#5355AC] underline font-medium"
                  href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35"
                  title="Privacy policy"
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
                value={user.first_name}
                onChange={handleChange}
                size="md"
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#111111]",
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
                value={user.last_name}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#111111]",
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
                value={user.phone_number}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#111111]",
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
            What is your date of birth?
          </p>

          <form>
            <div className="mb-[40px]">
              <DatePicker
                label="Date of Birth"
                value={user.dob ? parseDate(user.dob.split("T")[0]) : null}
                onChange={handleDateChange}
                classNames={{
                  label:
                    "text-[#111111] group-data-[filled=true]:text-[#111111]",
                  input: "text-[#111111]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
              />
            </div>

            <div className="mb-16">
              <CenterButton title="Continue" onClick={nextPage} type="submit" />
            </div>
          </form>
        </div>
      )}

      {pageNumber === 5 && (
        <div id="page5">
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
                className="w-full"
                label="Select an option"
                selectedKeys={user.source ? [user.source] : []}
                onChange={(e: any) =>
                  updateFormData({ source: e.target.value })
                }
                classNames={{
                  label: "text-[#111111] group-data-[filled=true]:hidden",
                  trigger:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#5355AC]",
                }}
              >
                {referralSources.map((source) => (
                  <SelectItem key={source.key}>{source.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="mb-16">
              {isLoading ? (
                <CenterButton title="Continue" type="submit" />
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      )}
      {pageNumber === 6 && (
        <div>
          <div className="md:mt-[120px] mt-[144px] flex justify-center">
            <img src={assessment.src} alt="" />
          </div>
          <div className="text-center">
            <p className="mt-[32px] md:mt-[40px] leading-8  md:text-[28px] md:leading-[30px] mb-4 text-[22px] font-bold text-[#5355AC]">
              Let&apos;s start your assessment
            </p>
            <p className="md:text-[18px] md:leading-[24px] text-[#111111] text-[16px] leading-[22px] mb-7">
              We&apos;ll be asking a few questions so our men&apos;s health
              doctor provider can find the best treatment for you
            </p>
          </div>
          <div className="mb-16">
            <CenterButton title="Continue" onClick={nextPage} type="submit" />
          </div>
        </div>
      )}

      {pageNumber === 7 && (
        <div className="relative h-[calc(100vh-150px)] md:h-[calc(100vh-130px)] w-full overflow-hidden">
          <iframe
            src={`${getFormUrl(user.condition)}?session_id=${
              user.session_id
            }&user_email=${formatEmail(user.email)}`}
            className="absolute top-[-100px] left-0 w-full h-[calc(100%+50px)] md:h-[calc(100%+100px)] border-none"
          ></iframe>
        </div>
      )}

      {pageNumber === 11 && (
        <div id="page8">
          <div className="flex justify-center mt-24">
            <img src={circle.src} alt="" className="w-20" />
          </div>
          <p className="text-[22px] leading-[28px] text-[#5355AC] md:text-[28px] md:leading-[35px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
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
