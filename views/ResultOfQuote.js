import React from "react";
import Table from "../components/Table/Table";
import LayoutApp from "../layout/LayoutApp";
import { quoteDataFormatForResult } from "../handler/formatDataCommunes";
import Button from "../components/Button";
import Link from "next/link";
import styles from "../components/Table/table.module.css";
import { useSelector } from "react-redux";

const ResultOfQuote = () => {
  let dataQuoteResult = useSelector((state) => state.quoteData.data);
  let dataFormat = quoteDataFormatForResult(dataQuoteResult);
  let valuesHead = ["Courier", "Plazo Estimado", "Peso Equivalente", "Precio Mercad"];
  const tables = (
    <>
      <Table data={dataFormat[0]} {...{ valuesHead }} title="Resultados de Cotizacion" />
      <Table
        data={dataFormat[1]}
        {...{ valuesHead }}
        title="Courier de mas bajo precio"
        classProps={styles.borderGreen}
      />
      <div className="py-4 w-full flex justify-center" style={{ padding: "1em" }}>
        <Link href="/quotes">
          <a>
            <Button label="Nueva Cotizacion" width="w-60" />
          </a>
        </Link>
      </div>
    </>
  );
  return (
    <>
      {dataQuoteResult.status == "error" ? (
        alert(dataQuoteResult.message)
      ) : (
        <LayoutApp contentMain={tables} title={""} />
      )}
    </>
  );
};

export default ResultOfQuote;
