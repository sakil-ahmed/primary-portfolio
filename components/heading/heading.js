import React from "react";
import StyledTitle from "./styledTitle";

const Title = ({ tagName = "h1", className = "h1", children }) => {
  return (
    <StyledTitle>
      {tagName === "h1" ? (
        <h1 className={className}>{children}</h1>
      ) : tagName === "h2" ? (
        <h2 className={className}>{children}</h2>
      ) : tagName === "h3" ? (
        <h3 className={className}>{children}</h3>
      ) : tagName === "h4" ? (
        <h4 className={className}>{children}</h4>
      ) : tagName === "h5" ? (
        <h5 className={className}>{children}</h5>
      ) : tagName === "h6" ? (
        <h6 className={className}>{children}</h6>
      ) : (
        ""
      )}
    </StyledTitle>
  );
};

export default Title;
