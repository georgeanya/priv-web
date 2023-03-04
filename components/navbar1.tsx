import { useState } from "react";
import priv from "../public/assets/priv.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

const ArrowIcon = styled(ArrowForwardIcon)({
  color: "#f8f8f8",
  padding: "1.5px",
  marginTop: "-3px",
});

const Navbar = () => {
  return (
    <div>
      <div className="px-5 md:px-32 pt-5 md:pt-5">
        <nav>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <img
                src={priv.src}
                className="mr-3  self-center"
                alt="Priv Logo"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
