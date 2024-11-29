import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

interface CustomButtonProps {
  href?: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  fontSize: "15px",
  height: "56px",
  lineHeight: "18.97",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "18.5px 30px",
  borderRadius: "32px",
  textTransform: "none",
  fontWeight: 500,
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
    fontSize: "14px",
    lineHeight: "17.71",
    height: "50px",
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  title,
  onClick,
}) => {
  return (
    <div>
      {href ? (
        <Link href={href} passHref>
          <StyledButton onClick={onClick}>{title}</StyledButton>
        </Link>
      ) : (
        <StyledButton onClick={onClick}>{title}</StyledButton>
      )}
    </div>
  );
};

export default CustomButton;
