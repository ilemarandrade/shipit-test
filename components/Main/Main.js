import React from "react";
import styles from "./main.module.css";

const Main = ({ children, title }) => {
  return (
    <div id={styles.main} className="pt-5">
      <h1 className="ml-7 text-indigo-900 font-semibold ">{title}</h1>
      {children}
    </div>
  );
};

export default Main;
