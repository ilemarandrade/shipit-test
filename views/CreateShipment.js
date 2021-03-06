import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import LayoutApp from "../layout/LayoutApp";
import forms from "../contants/forms";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useCreateForm from "../hooks/useCreateForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import requestCreateShipment from "../request/requestCreateShipment";
import createShipmentHandlerRequest from "../request/createShipmentHandlerRequest";

const ViewCreateShipment = () => {
  const router = useRouter();
  const dataForm = forms().formCreateShipment;
  const { initialValues, validations } = useCreateForm(dataForm);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validations),
    onSubmit: async (values) => {
      const res = await createShipmentHandlerRequest(requestCreateShipment(values));
    },
  });
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
        title="Creador de envio:"
      />
    </>
  );
};

export default ViewCreateShipment;
