import React from "react";

import Nav from "../../components/Nav/Nav";

export default {
  title: "components/Nav",
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  label: "ENVIAR",
  primary: true,
  sizeDefault: "w-38",
  click: () => console.log("hola es un evento"),
};

export const Mobile = Template.bind({});
Mobile.args = {
  label: "Button",
  primary: false,
};
