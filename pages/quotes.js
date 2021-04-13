import Head from "next/head";
import ViewQuote from "../views/Quote";

export default function Quote() {
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewQuote />
    </div>
  );
}
