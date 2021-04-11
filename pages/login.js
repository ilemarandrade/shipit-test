import Head from "next/head";
import ViewLogin from "../views/Login";

export default function Quote() {
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewLogin />
    </div>
  );
}
