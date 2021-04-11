import React from "react";
import "../tailwind.css";

const Button = ({
  click = () => [],
  label = "Button",
  primary = true,
  sizeDefault = "w-28",
}) => {
  return (
    <div
      onClick={() => click()}
      className={`${
        primary
          ? "text-white bg-blue-400 hover:bg-blue-500"
          : "text-blue-400 hover:text-white hover:bg-blue-400 border-blue-400 border"
      } 
      ${sizeDefault} rounded p-2 text-center button to-blue-500 cursor-pointer font-bold`}
    >
      <label className="pointer-events-none">{label}</label>
    </div>
  );
};

export default Button;
