import React from "react";
import LayoutApp from "../layout/LayoutApp";
import TableWithPagination from "../components/Table/TableWithPagination";

const ViewQuote = ({ data, valuesHead }) => {
  console.log("esta en viewQUote", data);
  return (
    <>
      <LayoutApp
        contentMain={<TableWithPagination data={data} {...{ valuesHead }} />}
        title="Destinos Disponibles:"
      />
    </>
  );
};

export default ViewQuote;
