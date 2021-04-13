import React, { useEffect, useState } from "react";
import Input from "../Inputs/Input";
import Button from "../Button";
import styles from "./form.module.css";
import Select from "../Inputs/Select";

const Form = ({ onChange, onBlur, dataInputs, onSubmit, width, errors, touched }) => {
  const inputs = dataInputs.map((sectionform, i) => {
    return (
      <div key={i}>
        <div className="text-center font-semibold text-gray-700">{sectionform.title}</div>
        {sectionform.inputs.map((input, index) => {
          return input.type == "select" ? (
            <div key={index}>
              <Select
                id={input.name}
                label={input.label}
                placeholder={input.placeholder}
                onChange={(event) => onChange({ event, input, index })}
                onBlur={(event) => onBlur({ event, input, index })}
                value={input.value}
                options={input.options}
                error={errors[input.name]}
                touched={touched ? touched[input.name] : false}
              />
            </div>
          ) : (
            <div key={index}>
              <Input
                key={i}
                id={input.name}
                label={input.label}
                placeholder={input.placeholder}
                type={input.name}
                onChange={(event) => onChange({ event, input, index })}
                onBlur={(event) => onBlur({ event, input, index })}
                width="100%"
                error={errors[input.name]}
                touched={touched ? touched[input.name] : false}
              />
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div id={styles.containerForm} className="flex justify-center items-center px-11 py-5">
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-5">{inputs}</div>
        <Button {...{ type: "submit", width: "w-full" }} />
      </form>
    </div>
  );
};

export default Form;
