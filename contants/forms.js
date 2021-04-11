import * as Yup from "yup";

const destinyShipping = {
  title: "Destino",
  inputs: [
    {
      name: "street",
      label: "Direccion de la calle",
      placeholder: "Escriba lad direccion de la calle",
      type: "text",
      value: "",
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "number",
      label: "Numero de la calle",
      placeholder: "Escriba el numero de la calle",
      type: "text",
      value: "",
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "complement",
      label: "Complmento de direccion",
      placeholder: "Escriba piso, departamento...",
      type: "text",
      value: "",
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "commune_id",
      label: "Seleccione Comuna",
      placeholder: "Escriba piso, departamento...",
      type: "select",
      value: "0",
      options: [],
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "full_name",
      label: "Nombre",
      placeholder: "Escriba nombre completo del destinatario",
      type: "select",
      value: "0",
      options: [],
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Escriba correo del destinatario",
      type: "select",
      value: "0",
      options: [],
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "typeDestinyItem",
      label: "Tipo de destino",
      placeholder: "Seleccione el destino del articulo",
      type: "select",
      value: "0",
      options: [{ name: "Domicilio", value: "home_delivery" }],
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
  ],
};

const sizes = {
  title: "Dimensiones",
  inputs: [
    {
      name: "heightItem",
      label: "Alto",
      placeholder: "Escriba el alto del articulo (cm)",
      type: "number",
      value: "",
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "widthItem",
      label: "Ancho",
      placeholder: "Escriba el ancho del articulo (cm)",
      type: "number",
      value: "",
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "lengthItem",
      label: "Largo",
      placeholder: "Escriba el largo del articulo (cm)",
      type: "number",
      value: "",
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "weightItem",
      label: "Peso",
      placeholder: "Escriba el ancho del articulo (kg)",
      type: "number",
      value: "",
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
  ],
};
const origin = {
  title: "Origen",
  inputs: [
    {
      name: "originItem",
      label: "Origen",
      placeholder: "Seleccione el destino del articulo",
      type: "select",
      value: "0",
      options: [],
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
  ],
};
const destinyQuote = {
  title: "Destino",
  inputs: [
    {
      name: "destinyItem",
      label: "Destino",
      placeholder: "Seleccione destino del articulo",
      type: "select",
      value: "0",
      options: [],
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
    {
      name: "typeDestinyItem",
      label: "Tipo de destino",
      placeholder: "Seleccione el destino del articulo",
      type: "select",
      value: "0",
      options: [
        { name: "Domicilio", value: "domicilio" },
        { name: "Sucursal", value: "sucursal" },
      ],
      validations: [
        {
          validation: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        },
      ],
    },
  ],
};
export const formQuote = [sizes, origin, destinyQuote];

export const formCreateShipment = [origin, destinyShipping, sizes];
