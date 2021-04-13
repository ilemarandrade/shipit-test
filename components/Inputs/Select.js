import React from "react";
import styles from "./inputs.module.css";
const Select = ({ width = "100%", error, touched, options, label, id, onChange, onBlur, placeholder }) => {
  const itemsOptions = options.map((item, i) => {
    return (
      <option key={i} value={item.id}>
        {item.name}
      </option>
    );
  });
  return (
    <div className="mb-5" style={{ width: width }}>
      <label htmlFor={id} className={`${label} block text-sm font-medium text-gray-700`}>
        {label}
      </label>

      <div className={`${styles.inputContainer} mt-1 relative rounded-md shadow-sm`}>
        <select
          id={id}
          name={id}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        >
          <option defaultValue>{placeholder}</option>
          {itemsOptions}
        </select>
      </div>
      {error && touched ? <div className="text-red-600 text-xs">{error}</div> : null}
    </div>
  );
};

export default Select;
