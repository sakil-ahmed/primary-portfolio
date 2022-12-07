import React from "react";

function RightArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle
        r="9.5"
        stroke="#0A0911"
        transform="matrix(0 1 1 0 10 10)"
      ></circle>
      <path
        stroke="#0A0911"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 10h8m0 0l-2.213 2M14 10l-2.213-2"
      ></path>
    </svg>
  );
}

export default RightArrow;
