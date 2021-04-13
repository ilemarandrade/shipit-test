export default async function requestQuote(values) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/vnd.shipit.v4");
  myHeaders.append("X-Shipit-Email", "prueba_front@shipit.cl");
  myHeaders.append("X-Shipit-Access-Token", "MWhEAdkHKYdscen_4cxR");

  var raw = {
    parcel: {
      length: parseInt(values.lengthItem),
      width: parseInt(values.widthItem),
      height: parseInt(values.heightItem),
      weight: parseInt(values.weightItem),
      origin_id: parseInt(values.originItem),
      destiny_id: parseInt(values.destinyItem),
      type_of_destiny: values.typeDestinyItem,
      algorithm: "1",
      algorithm_days: "2",
    },
  };
  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
    redirect: "follow",
  };

  const res = await fetch("https://api.shipit.cl/v/rates", requestOptions);

  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  console.log(data);
  return data;
}
