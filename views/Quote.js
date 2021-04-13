import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import LayoutApp from "../layout/LayoutApp";
import forms from "../contants/forms";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useCreateForm from "../hooks/useCreateForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import requestQuote from "../request/requestQuote";
import quoteRequestHandler from "../request/quoteRequestHandler";
import store from "../redux/store";
import { loadingActions } from "../redux/actions/loadingActions";

const ViewQuote = () => {
  const getStore = useSelector((state) => state);
  const router = useRouter();
  const dataForm = forms().formQuote;
  const { initialValues, validations } = useCreateForm(dataForm);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validations),
    onSubmit: async (values) => {
      const res = await quoteRequestHandler(requestQuote(values));
      router.push("/resultOfQuote");
    },
  });
  useEffect(() => {
    getStore.loading.loading && store.dispatch(loadingActions(false));
  }, []);
  return (
    <>
      <LayoutApp
        contentMain={
          <Form
            dataInputs={dataForm}
            onChange={({ event }) => formik.handleChange(event)}
            onSubmit={formik.handleSubmit}
            onBlur={({ event }) => formik.handleBlur(event)}
            click={() => {}}
            errors={formik.errors}
            touched={formik.touched}
          />
        }
        title={"Cotizacion de envio:"}
      />
    </>
  );
};

export default ViewQuote;
