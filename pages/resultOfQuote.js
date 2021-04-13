import Head from "next/head";
import ViewResultOfQuote from "../views/ResultOfQuote";

export default function Quote() {
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewResultOfQuote />
    </div>
  );
}
