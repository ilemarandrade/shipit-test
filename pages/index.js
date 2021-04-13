import Head from "next/head";
import Login from "../views/Login";

export default function Quote() {
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
