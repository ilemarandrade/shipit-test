import { createShipments } from "./endPoints";
export default async function requestCreateShipment(values) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/vnd.shipit.v4");
  myHeaders.append("X-Shipit-Email", "prueba_front@shipit.cl");
  myHeaders.append("X-Shipit-Access-Token", "MWhEAdkHKYdscen_4cxR");

  var raw = {
    shipment: {
      kind: 0,
      platform: 2,
      reference: "#333",
      items: 2,
      seller: { name: "shopify", id: "1111111" },
      sizes: {
        width: parseInt(values.widthItem),
        height: parseInt(values.heightItem),
        length: parseInt(values.lengthItem),
        weight: parseInt(values.weightItem),
      },
      courier: {
        id: 1,
        client: "",
        selected: false,
        payable: false,
        algorithm: 1,
        algorithm_days: null,
        without_courier: false,
      },
      destiny: {
        street: values.street,
        number: values.numberOfStreet,
        complement: values.complement,
        commune_id: parseInt(values.commune_id),
        commune_name: "LAS CONDES",
        full_name: values.full_name,
        email: values.email,
        phone: "1111111111",
        kind: "home_delivery",
        courier_destiny_id: null,
        courier_branch_office_id: null,
      },
      insurance: { ticket_amount: 10000, ticket_number: 392832, detail: "Zapatos talla x marca n", extra: true },
      products: [{ sku_id: 11111, amount: 2, warehouse_id: 1 }],
    },
  };
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
    redirect: "follow",
  };

  const res = await fetch(createShipments, requestOptions);

  const data = await res;
  if (data.status == 400) {
    alert("Algo ha fallado");
    return data;
  }
  alert("Envio exitoso");
  return {
    notFound: true,
  };
}
