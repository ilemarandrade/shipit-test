import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import LayoutApp from "../layout/LayoutApp";
import forms from "../contants/forms";
import requestLogin from "../request/requestLogin";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useCreateForm from "../hooks/useCreateForm";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const store = useSelector((state) => state.authenticated);
  const router = useRouter();
  const dataForm = forms().formLogin;

  const { initialValues, validations } = useCreateForm(dataForm);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validations),
    onSubmit: async (values) => {
      await requestLogin(values);
    },
  });

  useEffect(() => {
    if (store.authenticated) {
      router.push("/home");
    }
  }, [store.authenticated]);

  const onBlur = ({ event, input, index }) => {
    formik.handleBlur(event);
  };

  const onChange = ({ event, input, index }) => {
    formik.handleChange(event);
  };

  return (
    <>
      <LayoutApp
        contentMain={
          <Form
            dataInputs={dataForm}
            onChange={onChange}
            onSubmit={formik.handleSubmit}
            onBlur={onBlur}
            width="30%"
            click={requestLogin}
            errors={formik.errors}
            touched={formik.touched}
          />
        }
        title={""}
      />
    </>
  );
};

export default Login;
