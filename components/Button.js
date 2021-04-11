import React from "react";

const Button = ({
  click = () => [],
  label = "Button",
  primary = true,
  width = "w-28",
  type = "",
}) => {
  return (
    <button
      type={type}
      onClick={() => click()}
      className={`${
        primary
          ? "text-white bg-blue-400 hover:bg-blue-500"
          : "text-blue-400 hover:text-white hover:bg-blue-400 border-blue-400 border"
      } 
      ${width} rounded p-2 text-center button to-blue-500 cursor-pointer font-bold`}
    >
      <label className="pointer-events-none">{label}</label>
    </button>
  );
};

export default Button;
