import React from "react";
import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";

const LayoutApp = ({ contentMain = <></>, title }) => {
  console.log(contentMain, title);
  return (
    <div className="w-100 h-100">
      <Nav />
      <Main {...{ children: contentMain, title }} />
    </div>
  );
};

export default LayoutApp;
