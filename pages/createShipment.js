import Head from "next/head";
import ViewCreateShipment from "../views/CreateShipment";

export default function Quote() {
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewCreateShipment />
    </div>
  );
}
