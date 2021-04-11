export const couriersAvailables = (data, keys) => {
  let result = [];
  //console.log(data, keys);
  data.forEach((e) => {
    let courriers;
    keys.forEach((key) => {
      if (typeof e[key] == "object") {
        //console.log("soyobject", courriers);
        courriers = Object.keys(e[key]).length;
      }
    });

    return result.push({ name: e.name, couriers_availables: courriers });
  });
  console.log(result);
  return result;
};

export const communes = (data, keys) => {
  let result = [];
  //console.log(data, keys);
  data.forEach((e) => {
    return result.push({ name: e.name, id: e.id });
  });
  console.log(result);
  return result;
};
