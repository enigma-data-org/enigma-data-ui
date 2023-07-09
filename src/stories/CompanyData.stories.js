import React from "react";
import { CompanyData } from "../components/CompanyData";

export default {
  title: "Example/CompanyData",
  component: CompanyData,
};

const Template = (args) => <CompanyData {...args} />;

export const Primary = Template.bind({});
