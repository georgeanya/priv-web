import React from "react";
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
interface props {
  toggle: any;
  toggleFav: any;
}

const StartError = ({ toggle, toggleFav }: props) => {
  return (
    <div>
      <p className=" leading-tight md:pr-14 md:text-3xl text-1xl md:text-start font-bold text-[#5355AC] ">
        An error occurred
      </p>
      <p className="mt-4 text-base md:text-lg font-normal md:pr-8 md:text-start text-[#111111] mb-7">
      Please make sure we’ve got your details right and try again.
      </p>
      <Link href="">
        <SustainButton
          className="self-center text-sm md:text-base font-medium"
          type="submit"
          onClick={() => {
            toggle();
            toggleFav();
          }}
        >
          Take the test again
        </SustainButton>
      </Link>
    </div>
  );
};

export default StartError;
