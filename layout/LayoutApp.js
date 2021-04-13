import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import { Items } from "../components/Nav/const";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loading from "../components/loading";
const LayoutApp = ({ contentMain = <></>, title }) => {
  const authenticated = useSelector((state) => state.authenticated);
  const route = useRouter();
  const [showMain, setShowMain] = useState(
    !authenticated.authenticated && route.pathname != "/"
  );
  useEffect(() => {
    showMain && route.push("/");
  }, []);

  return (
    <div className="w-100 h-100">
      <Nav
        items={
          authenticated.authenticated && route.pathname != "/" ? Items : []
        }
      />
      {showMain ? "" : <Main {...{ children: contentMain, title }} />}
    </div>
  );
};

export default LayoutApp;
