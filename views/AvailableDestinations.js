import React from "react";
import LayoutApp from "../layout/LayoutApp";
import Table from "../components/Table/Table";

const ViewQuote = ({ data }) => {
  console.log("esta en viewQUote");
  return (
    <>
      <LayoutApp
        contentMain={<Table data={data} />}
        title="Destinos Disponibles"
      />
    </>
  );
};

export default ViewQuote;
