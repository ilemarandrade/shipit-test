import React from "react";
import Form from "../components/Form/Form";
import LayoutApp from "../layout/LayoutApp";
import { formLogin } from "../contants/forms";

const ViewQuote = () => {
  console.log("esta en viewQUote");

  return (
    <>
      <LayoutApp
        contentMain={<Form dataInputs={formLogin} width="30%" />}
        title={""}
      />
    </>
  );
};

export default ViewQuote;
