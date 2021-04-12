export const couriersAvailables = (data, keys) => {
  let result = [];
  //console.log("este es en el formateo", data);
  data.forEach((e) => {
    keys.forEach((key) => {
      if (typeof e[key] == "object") {
        let courriers = "";
        for (let i in e[key]) {
          //console.log(e[key][i] + "//" + e.name);
          if (e[key][i] === e.name) {
            //courriers += Object.entries(e[key])[0][0] + " ";
          }
        }
        // console.log(courriers);
      }
    });

    return result.push({ name: e.name, couriers_availables: " courriers" });
  });
  // console.log(result);
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
