import React from "react";
import { UserData } from "../components/UserData";

export default {
  title: "Example/UserData",
  component: UserData,
};

const Template = (args) => <UserData {...args} />;

export const Primary = Template.bind({});
