import React from "react";

import LayoutApp from "../../layout/LayoutApp";

export default {
  title: "Layout/LayoutApp",
  component: LayoutApp,
};

const Template = (args) => <LayoutApp {...args} />;

export const LayoutAppRender = Template.bind({});
LayoutAppRender.args = {
  label: "hola",
};
