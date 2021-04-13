import React, { useEffect, useState } from "react";
import LayoutApp from "../layout/LayoutApp";
import TableWithPagination from "../components/Table/TableWithPagination";
import Loading from "../views/Loading";

const ViewQuote = ({ data, valuesHead }) => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    data.length && setIsloading(false);
  }, [data]);
  return (
    <>
      <LayoutApp
        contentMain={isLoading ? <Loading /> : <TableWithPagination data={data} {...{ valuesHead }} />}
        title="Destinos Disponibles:"
      />
    </>
  );
};

export default ViewQuote;
