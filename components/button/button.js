import Link from "next/link";
import React from "react";
import styled from "styled-components";
import THEME from "./../../styles/Theme";

const PrimaryBtn = styled.div`
  .primary {
    border: none;
    outline: none;
    font: normal ${THEME.fontWeight.weightSemiBold} 18px ${THEME.fonts.manrope};
    line-height: 30px;
    text-align: center;
    color: ${THEME.colors.white};
    padding: 15px 35px;
    border: 1px solid ${THEME.colors.secondary};
    border-radius: 8px;
    background-color: ${THEME.colors.secondary};
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: transparent;
      color: ${THEME.colors.secondary};
    }
  }
  .outline {
    font: normal ${THEME.fontWeight.weightSemiBold} 16px ${THEME.fonts.manrope};
    padding: 12px 25px;
    line-height: 28px;
    text-align: center;
    color: ${THEME.colors.secondary};
    border: 1px solid ${THEME.colors.secondary};
    border-radius: 8px;
    background: transparent;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: inline-block;
    width: fit-content;

    &:hover {
      background-color: ${THEME.colors.secondary};
      color: ${THEME.colors.white};
    }
  }
`;

const Button = ({
  varient = "primary",
  className,
  text = "Button",
  path = "#",
}) => {
  return (
    <PrimaryBtn>
      <Link href={path} className={`${className} ${varient}`}>
        {text}
      </Link>
    </PrimaryBtn>
  );
};

export default Button;
