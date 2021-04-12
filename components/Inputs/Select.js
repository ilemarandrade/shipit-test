import React from "react";
import styles from "./inputs.module.css";
const Select = ({ data = propsSelect.data, width = "100%", validator }) => {
  const itemsOptions = data.options.map((item, i) => {
    return (
      <option key={i + item.value} value={item.value}>
        {item.name}
      </option>
    );
  });
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
        <select
          id={data.id}
          name={data.id}
          value="0"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        >
          <option value="0">{data.placeholder}</option>
          {itemsOptions}
        </select>
      </div>
    </div>
  );
};

export default Select;
