import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import LayoutApp from "../layout/LayoutApp";
import { quoteDataFormatForResult } from "../handler/formatDataCommunes";
import Button from "../components/Button";
import Link from "next/link";
import styles from "../components/Table/table.module.css";
import store from "../redux/store";
import { useSelector } from "react-redux";
import { loadingActions } from "../redux/actions/loadingActions";
import { useRouter } from "next/router";

const ResultOfQuote = () => {
  const getStore = useSelector((state) => state);
  const router = useRouter();
  let dataQuoteResult = useSelector((state) => state.quoteData.data);
  let dataFormat = quoteDataFormatForResult(dataQuoteResult);
  let valuesHead = ["Courier", "Plazo Estimado", "Peso Equivalente", "Precio Mercado"];
  let [showView, setShowView] = useState(false);

  useEffect(() => {
    getStore.loading.loading && store.dispatch(loadingActions(false));
    if (dataQuoteResult.state == "error" && !showView) {
      alert(dataQuoteResult.message);
      router.push("/quotes");
    }
    setShowView(true);
  }, []);
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
  return <>{dataQuoteResult.state == "error" ? "" : <LayoutApp contentMain={tables} title={""} />}</>;
};

export default ResultOfQuote;
