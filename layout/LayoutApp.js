import React from "react";
import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import { Items } from "../components/Nav/const";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import store from "../redux/store";

const LayoutApp = ({ contentMain = <></>, title }) => {
  const authenticated = useSelector((state) => state.authenticated);
  const route = useRouter();

  console.log("layout", authenticated, Items, store.getState());
  return (
    <div className="w-100 h-100">
      <Nav
        items={
          authenticated.authenticated && route.pathname != "/" ? Items : []
        }
      />
      <Main {...{ children: contentMain, title }} />
    </div>
  );
};

export default LayoutApp;
