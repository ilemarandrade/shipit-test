import React, { useEffect } from "react";
import LayoutApp from "../layout/LayoutApp";
import store from "../redux/store";
import { loadingActions } from "../redux/actions/loadingActions";
import { useSelector } from "react-redux";

const Home = () => {
  const getStore = useSelector((state) => state);
  useEffect(() => {
    getStore.loading.loading && store.dispatch(loadingActions(false));
  }, []);
  return (
    <>
      <LayoutApp
        contentMain={
          <>
            <div style={{ minHeight: "90vh" }} className="flex items-center justify-center">
              <p style={{ color: "#716fbe", fontSize: "3em", padding: "2em", textAlign: "center" }}>
                Bienvenidos a la prueba de front end para Shipit
                <br /> realizada por Ilemar Andrade
              </p>
            </div>
          </>
        }
      />
    </>
  );
};

export default Home;
