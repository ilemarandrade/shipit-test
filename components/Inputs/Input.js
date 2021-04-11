import React from "react";
import styles from "./inputs.module.css";

const Input = ({ data, width = "100%", validator }) => {
  return (
    <div className="mb-5" style={{ width: width }}>
      <label
        htmlFor={data.id}
        className={`${styles.label} block text-sm font-medium text-gray-700`}
      >
        {data.label}
      </label>

      <div
        className={`${styles.inputContainer} mt-1 relative rounded-md shadow-sm`}
      >
        <input
          id={data.id}
          name={data.id}
          type={data.type}
          onChange={validator.handleChange}
          onBlur={validator.handleBlur}
          value={validator.values[data.id]}
          placeholder={data.placeholder}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default Input;
