import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import LayoutApp from "../layout/LayoutApp";
import { formLogin } from "../contants/forms";
import requestLogin from "../request/requestLogin";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Login = () => {
  const store = useSelector((state) => state.authenticated);
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    if (store.authenticated) {
      router.push("/availableDestinations");
    }
  }, [store.authenticated]);
  return (
    <>
      <LayoutApp
        contentMain={
          <Form dataInputs={formLogin} width="30%" click={requestLogin} />
        }
        title={""}
      />
    </>
  );
};

export default Login;
