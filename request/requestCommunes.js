import { urlCommunes } from "./endPoints";
export async function requestCommunes(context) {
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

  const res = await fetch(urlCommunes, requestOptions);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return data;
}
