import React from "react";
import styles from "./inputs.module.css";

const Input = ({ id, error, type, onChange, onBlur, placeholder, label, width = "100%" }) => {
  return (
    <div className="mb-5" style={{ width: width }}>
      <label htmlFor={id} className={`${styles.label} block text-sm font-medium text-gray-700`}>
        {label}
      </label>

      <div className={`${styles.inputContainer} mt-1 relative rounded-md shadow-sm`}>
        <input
          id={id}
          name={id}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      {error ? <div className="text-red-600 text-xs">{error}</div> : null}
    </div>
  );
};

export default Input;
