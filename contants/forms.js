import store from "../redux/store";
import { communesNameId } from "../handler/formatDataCommunes";
import { name, required, email, number } from "../validations/validations";

export default function forms() {
  const optionsCommunes = communesNameId(store.getState().communesData.data);
  const destinyShipping = {
    title: "Destino",
    inputs: [
      {
        name: "street",
        label: "Direccion de la calle",
        placeholder: "Escriba lad direccion de la calle",
        type: "text",
        value: "esta es ka direccion",
        validations: required,
      },
      {
        name: "numberOfStreet",
        label: "Numero de la calle",
        placeholder: "Escriba el numero de la calle",
        type: "text",
        value: "",
        validations: required,
      },
      {
        name: "complement",
        label: "Complemento de direccion",
        placeholder: "Escriba piso, departamento...",
        type: "text",
        value: "",
        validations: required,
      },
      {
        name: "commune_id",
        label: "Comuna",
        placeholder: "Seleccione Comuna",
        type: "select",
        value: "",
        options: optionsCommunes,
        validations: required,
      },
      {
        name: "full_name",
        label: "Nombre",
        placeholder: "Escriba nombre completo del destinatario",
        type: "text",
        value: "",
        options: [],
        validations: name,
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Escriba correo del destinatario",
        type: "text",
        value: "",
        options: [],
        validations: email,
      },
      {
        name: "typeDestinyItem",
        label: "Tipo de destino",
        placeholder: "Seleccione el destino del articulo",
        type: "select",
        value: "",
        options: [{ name: "Domicilio", value: "home_delivery" }],
        validations: required,
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
        validations: number,
      },
      {
        name: "widthItem",
        label: "Ancho",
        placeholder: "Escriba el ancho del articulo (cm)",
        type: "number",
        value: "",
        validations: number,
      },
      {
        name: "lengthItem",
        label: "Largo",
        placeholder: "Escriba el largo del articulo (cm)",
        type: "number",
        value: "",
        validations: number,
      },
      {
        name: "weightItem",
        label: "Peso",
        placeholder: "Escriba el ancho del articulo (kg)",
        type: "number",
        value: "",
        validations: number,
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
        value: "",
        options: optionsCommunes,
        validations: required,
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
        communes: true,
        value: "",
        options: optionsCommunes,
        validations: required,
      },
      {
        name: "typeDestinyItem",
        label: "Tipo de destino",
        placeholder: "Seleccione el destino del articulo",
        type: "select",
        value: "",
        options: [
          { name: "Domicilio", id: "domicilio" },
          { name: "Sucursal", id: "sucursal" },
        ],
        validations: required,
      },
    ],
  };
  const login = {
    title: "Login",
    inputs: [
      {
        name: "email",
        label: "Email",
        placeholder: "Escriba su correo electronico",
        type: "Text",
        value: "",
        validations: email,
      },
      {
        name: "password",
        label: "Contraseña",
        placeholder: "Escriba su contraseña",
        type: "password",
        value: "",
        validations: required,
      },
    ],
  };
  const formQuote = [sizes, origin, destinyQuote];

  const formCreateShipment = [origin, destinyShipping, sizes];

  const formLogin = [login];
  return { formQuote, formCreateShipment, formLogin };
}
