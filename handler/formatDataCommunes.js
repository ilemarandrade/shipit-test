export const couriersAvailables = (data, keys) => {
  let result = [];

  if (data.length > 0) {
    data.forEach((e) => {
      let couriers = e.couriers_availables;
      let allCourrier = "";
      for (let i in couriers) {
        if (couriers[i] == e.name) {
          allCourrier += i + ", ";
        }
      }

      return result.push({
        name: e.name,
        couriers_availables: allCourrier == "" ? "No hay disponibles" : allCourrier.slice(0, -2) + ".",
      });
    });
  } else {
  }
  return result;
};

export const communesNameId = (data) => {
  let result = [];
  try {
    if (data.length > 0)
      data.forEach((e) => {
        return result.push({ name: e.name, id: e.id });
      });
  } catch {}
  return result;
};

export const quoteDataFormatForResult = (data) => {
  let result = [[], []];
  try {
    let lowerPrice = data.lower_price;
    if (data) {
      data.prices.forEach((e) => {
        result[0].push({
          name: e.courier.name,
          days: e.days == 1 ? e.days + " dia" : e.days + " dias",
          volumetric_weight: e.volumetric_weight,
          price: "$" + e.price,
        });
      });

      result[1].push({
        name: lowerPrice.courier.name,
        days: lowerPrice.days == 1 ? lowerPrice.days + " dia" : lowerPrice.days + " dias",
        volumetric_weight: lowerPrice.volumetric_weight,
        price: "$" + lowerPrice.price,
      });
    }
  } catch (e) {
    console.log(e);
  }
  return result;
};
