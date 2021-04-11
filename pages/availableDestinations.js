import Head from "next/head";
import { couriersAvailables } from "../handler/formatDataCommunes";
import { get } from "../request/apiRequestsMethod";
import { urlCommunes } from "../request/endPoints";
import { request } from "../request/requests";
import AvailableDestinations from "../views/availableDestinations";

export async function getStaticProps(context) {
  /*  console.log("entro a la getStatic");
  const res = await request("GET", urlCommunes, "");
  console.log(res, context); */
  //const data = await res.json();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/vnd.shipit.v4");
  myHeaders.append("X-Shipit-Email", "ACCOUNT_EMAIL");
  myHeaders.append("X-Shipit-Access-Token", "ACCOUNT_TOKEN");

  var raw;

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch("https://api.shipit.cl/v/communes", requestOptions);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function AvalableDestinations({ data }) {
  let dataFormat = couriersAvailables(data, ["name", "couriers_availables"]);
  return (
    <div className="container">
      <Head>
        <title>Shipit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AvailableDestinations
          {...{
            data: dataFormat,
            valuesHead: ["Nombre de la comuna", "Carriers Disponibles"],
          }}
        />
      </main>
    </div>
  );
}
