export default function formikHook(data) {
  const initialValues = {};
  const validations = {};
  data.forEach((element) => {
    initialValues[element.name] = element.value;
    validations[element.name] = element.validations;
  });
  //ssss console.log(initialValues, validations);

  //return initialValues, validations;
  return { initialValues, validations };
}
