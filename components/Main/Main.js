import React from "react";
import { useSelector } from "react-redux";
import styles from "./main.module.css";
import Loading from "../loading";

const Main = ({ children, title }) => {
  const isLoading = useSelector((state) => state.loading.loading);
  return (
    <div id={styles.main} className="pt-5">
      <h1 className="ml-7 text-indigo-900 font-semibold ">{title}</h1>
      {isLoading ? <Loading /> : children}
    </div>
  );
};

export default Main;
