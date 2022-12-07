import React from "react";

function DownArrow({ color = "#0A0911" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="26"
      fill="none"
      viewBox="0 0 16 26"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 1v24m0 0l7-6.638M8 25l-7-6.638"
      ></path>
    </svg>
  );
}

export default DownArrow;
