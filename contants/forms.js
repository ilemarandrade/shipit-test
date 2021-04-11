import * as Yup from "yup";

export const formQuote = [
  {
    name: "heightItem",
    label: "Alto",
    placeholder: "Escriba el alto del articulo",
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
    placeholder: "Escriba el ancho del articulo",
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
    placeholder: "Escriba el largo del articulo",
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
    placeholder: "Escriba el ancho del articulo",
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
    name: "originItem",
    label: "Origen",
    placeholder: "Seleccione el destino del articulo",
    type: "select",
    value: "0",
    optionDefault() {
      return { name: this.placeholder, value: this.value };
    },
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
];

export const formCreateShipment = [
  {
    name: "origin",
    label: "Origen",
    placeholder: "Escriba el origin",
    type: "Text",
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
    name: "destiny",
    label: "Destino",
    placeholder: "Escriba el destino",
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
    name: "lengthItem",
    label: "Largo",
    placeholder: "Escriba el largo del articulo",
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
    placeholder: "Escriba el ancho del articulo",
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
    name: "destinyItem",
    label: "Destino",
    placeholder: "Escriba el destino del articulo",
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
];
