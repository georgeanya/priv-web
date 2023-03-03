import React from "react";
import Navbar from "../../components/navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%  ",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

const StartError = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-m mx-5 sm:mx-auto mt-17">
        <p className=" leading-tight lg:pr-14 lg:text-3xl text-1xl lg:text-start font-bold text-[#5355AC] ">
          An error occurred
        </p>
        <p className="mt-4 text-base lg:text-lg font-normal lg:pr-8 lg:text-start text-[#111111] mb-7">
          We couldn’t book your consultation. Please make sure we’ve got your
          details right and try again.
        </p>
        <SustainButton
          className="self-center text-sm lg:text-base font-medium"
          type="submit"
        >
          Try again
        </SustainButton>
      </div>
    </div>
  );
};

export default StartError;
