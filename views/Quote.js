import React from "react";
import Form from "../components/Form/Form";
import LayoutApp from "../layout/LayoutApp";
import { formQuote } from "../contants/forms";

const ViewQuote = () => {
  console.log("esta en viewQUote");
  return (
    <>
      <LayoutApp
        contentMain={<Form dataInputs={formQuote} />}
        title={"Cotizacion de envio"}
      />
    </>
  );
};

export default ViewQuote;
