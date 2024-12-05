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
  width: "100%",
  fontWeight: 500,
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
    fontSize: "14px",
    lineHeight: "17.71",
  },
});

const CenterButton: React.FC<CenterButtonProps> = ({
  href,
  title,
  onClick,
  container,
  type = "button",
}) => {
  const button = href ? (
    <Link title={title} href={href} passHref>
      <StyledButton onClick={onClick} type={type}>{title}</StyledButton>
    </Link>
  ) : (
    <StyledButton onClick={onClick} type={type}>{title}</StyledButton>
  );

  return container ? (
    React.cloneElement(container as React.ReactElement, {}, button)
  ) : (
    <div>{button}</div>
  );
};

export default CenterButton;
