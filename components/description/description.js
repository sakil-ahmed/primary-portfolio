import React from "react";
import styled from "styled-components";
import THEME from "./../../styles/Theme";

const StyledDesc = styled.p`
  font: normal ${THEME.fontWeight.weightNormal} 18px ${THEME.fonts.manrope};
  line-height: 30px;
  color: ${THEME.colors.bodyText};
`;
const Description = ({ children, className }) => {
  return <StyledDesc className={className}>{children}</StyledDesc>;
};

export default Description;
