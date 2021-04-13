import React from "react";
import Select from "../../components/Inputs/Select";

/* s */
export default {
  title: "components/InputSelect",
  component: Select,
};

const Template = (args) => <Select {...args} />;
/* export const Primary = Template.bind({});
Primary.args = {
  label: "Nombre",
  id: "name",
  type: "text",
  formik: {},
}; */

export const Secondary = Template.bind({});
Secondary.args = {
  data: {
    label: "Nombre",
    id: "name",
    options: [
      {
        value: "1",
        label: "valor1",
      },
      {
        value: "2",
        label: "valor2",
      },
      {
        value: "3",
        label: "valor3",
      },
      {
        value: "4",
        label: "valor4",
      },
    ],
  },
  width: "50%",
  formik: {},
};
