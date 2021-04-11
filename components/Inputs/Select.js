import React from "react";
import styles from "./inputs.module.css";

const propsSelect = {
  data: {
    label: "Nombre",
    id: "name",
    placeholder: "Selecciona el nombre",
    options: [
      {
        value: "1",
        label: "valor1",
      },
      {
        value: "2",
        label: "valor2",
      },
      {
        value: "3",
        label: "valor3",
      },
      {
        value: "4",
        label: "valor4",
      },
    ],
  },
  width: "50%",
  formik: {},
};
const Select = ({ data = propsSelect.data, width = "100%", validator }) => {
  console.log(validator, data.placeholder);
  const itemsOptions = data.options.map((item) => {
    return <option value={item.value}>{item.name}</option>;
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
