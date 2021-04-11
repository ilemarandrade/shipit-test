import React from "react";

import ViewsQuote from "../../views/Quote";

export default {
  title: "Views/ViewsQuote",
  component: ViewsQuote,
};

const Template = (args) => <ViewsQuote {...args} />;

export const Quote = Template.bind({});
