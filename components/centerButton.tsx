import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

interface CenterButtonProps {
  href?: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  container?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const StyledButton = styled(Button)(({ theme, disabled }) => ({
  background: "#5355AC",
  fontFamily: "'Circular Std', sans-serif",
  fontSize: "15px",
  height: "56px",
  lineHeight: "18.97px",
  color: "#FFFFFF",
  cursor: "pointer",
  padding: "18.5px 30px",
  borderRadius: "32px",
  textTransform: "none",
  width: "100%",
  fontWeight: 500,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  boxShadow: "none",
  
  "&:hover": {
    background: "#4344A0",
    boxShadow: "none",
  },

  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(83, 85, 172, 0.3)",
  },

  "&:active": {
    background: "#333499",
    transform: "scale(0.98)",
  },

  "&.Mui-disabled": {
    background: "#E0E0E0",
    color: "#A0A0A0",
    cursor: "not-allowed",
  },

  "@media (max-width: 780px)": {
    padding: "16px 30px",
    fontSize: "14px",
    lineHeight: "17.71px",
    height: "52px",
  },
}));

const CenterButton: React.FC<CenterButtonProps> = ({
  href,
  title,
  onClick,
  container,
  type = "button",
  disabled = false,
}) => {
  const button = (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </StyledButton>
  );

  return href ? (
    <Link href={href} passHref legacyBehavior>
      {button}
    </Link>
  ) : container ? (
    React.cloneElement(container as React.ReactElement, {}, button)
  ) : (
    <div>
      {button}
    </div>
  );
};

export default CenterButton;