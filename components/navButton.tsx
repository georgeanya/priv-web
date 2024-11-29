import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Height } from "@mui/icons-material";

interface NavbarButtonProps {
  href?: string; // Optional href
  title: string;
}

const StyledButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  fontSize: "14px",
  height: "46px",
  lineHeight: "17.71",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "14px 30px",
  borderRadius: "32px",
  textTransform: "none",
  fontWeight: 500,
  ["@media (max-width:780px)"]: {
    padding: "13px 30px",
    fontSize: "13px",
    lineHeight: "16.71",
    height: "44px",
  },
});

const NavbarButton: React.FC<NavbarButtonProps> = ({
  href,
  title,
 
}) => {
  return (
    <div>
      {href ? (
        <Link href={href} passHref>
          <StyledButton>{title}</StyledButton>
        </Link>
      ) : (
        <StyledButton>{title}</StyledButton>
      )}
    </div>
  );
};

export default NavbarButton;
