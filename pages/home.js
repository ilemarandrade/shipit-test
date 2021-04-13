import Head from "next/head";
import Home from "../views/Home";

export default function Quote() {
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
