import * as Yup from "yup";

export const name = Yup.string().min(3, "Muy corto").required("*Requerido");

export const required = Yup.string().required("*Requerido");

export const email = Yup.string().email("Verifique que este escribiendo un email").required("*Requerido");

export const number = Yup.number().positive().required("*Requerido");
