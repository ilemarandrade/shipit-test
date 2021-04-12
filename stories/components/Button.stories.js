import React from "react";

import Button from "../../components/Button";

export default {
  title: "components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "ENVIAR",
  primary: true,
  sizeDefault: "w-38",
  click: () => "",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  primary: false,
};
