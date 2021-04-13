import React from "react";
import IconLogic from "../components/loading";
import LayoutApp from "../layout/LayoutApp";

const ViewQuote = () => {
  return (
    <>
      <LayoutApp contentMain={<IconLogic />} title={"Cotizacion de envio:"} />
    </>
  );
};

export default ViewQuote;
