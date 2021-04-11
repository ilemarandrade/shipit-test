import React from "react";
import "./input.module.css";

const Input = ({ data, width = "100%", validator }) => {
  console.log(validator);
  return (
    <div style={{ width: width }}>
      <label className="text-xs" htmlFor={data.id}>
        {data.label}
      </label>
      <div className="inputContainer">
        <input
          id={data.id}
          name={data.id}
          type={data.type}
          onChange={validator.handleChange}
          onBlur={validator.handleBlur}
          value={validator.values[data.id]}
          className="w-full"
        />
        {validator?.touched.firstName && validator?.errors.firstName ? (
          <div>{validator?.errors.firstName}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
