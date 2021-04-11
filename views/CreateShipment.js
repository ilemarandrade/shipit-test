import React from "react";
import Form from "../components/Form/Form";
import LayoutApp from "../layout/LayoutApp";
import { formCreateShipment } from "../contants/forms";

const ViewCreateShipment = () => {
  console.log("esta en ViewCreateShipment");
  return (
    <>
      <LayoutApp
        contentMain={<Form dataInputs={formCreateShipment} />}
        title={"Creador de envio"}
      />
    </>
  );
};

export default ViewCreateShipment;
