export default function useCreateForm(data) {
  const initialValues = {};
  const validations = {};
  data.forEach((form) => {
    form.inputs.forEach((element) => {
      initialValues[element.name] = element.value;
      validations[element.name] = element.validations;
    });
  });

  return { initialValues, validations };
}
