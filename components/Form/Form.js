import React from "react";
import Input from "../Input/Input";
import Button from "../Button";
import formikHook from "../../hooks/formikHook";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./form.module.css";

const Form = ({ dataInputs = [] }) => {
  const { initialValues, validations } = formikHook(dataInputs);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validations),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const inputs = dataInputs.map((input, i) => {
    return <Input key={i} data={input} validator={formik} width="100%" />;
  });
  //console.log(formik);
  return (
    <div
      id={styles.containerForm}
      className="flex justify-center items-center px-11 py-5"
    >
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className="mb-5">{inputs}</div>
        <Button {...{ type: "submit", width: "w-full" }} />
      </form>
    </div>
  );
};

export default Form;
