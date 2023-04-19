import React from "react";
import Navbar from "./navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

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

const StartSuccess = () => {
  return (
    <div>
      <p className=" leading-tight md:pr-14 md:text-3xl text-1xl md:text-start font-bold text-[#5355AC] ">
        Payment link sent
      </p>
      <p className="mt-4 text-base md:text-lg font-normal md:pr-8 md:text-start text-[#111111] mb-7">
        A payment link has been sent to your phone number. Check your WhatsApp
        to complete your consultation booking!
      </p>
      <Link href="/">
        <SustainButton
          className="self-center text-sm md:text-base font-medium"
          type="submit"
        >
          Back to homepage
        </SustainButton>
      </Link>
    </div>
  );
};

export default StartSuccess;
