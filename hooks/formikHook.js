export default function formikHook(data) {
  const initialValues = {};
  const validations = {};
  data.forEach((element) => {
    initialValues[element.name] = element.value;
    validations[element.name] = element.validations;
  });
  //return initialValues, validations;
  return { initialValues, validations };
}
