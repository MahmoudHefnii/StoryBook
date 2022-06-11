import React from "react";
import Center from "../Center/Center";
import Btn from "./Btn";
// import Center from '../Center/Center'

export default {
  //  For all Story
  title: "Form/Btn",
  component: Btn,
  args: {
    variant: "primary",
    children: "Button",
  },
  argTypes: {
    variant: {
      control: "text",
      default: "aaaaaaaa",
      description: "sssssssssssssss",
    },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
  decorators: [(Story) => <Center>{Story()}</Center>],
};

// export const PrimaryBtn = (props) => (
//   <Btn variant="primary" onClick={props.onClick}>
//     Primary Btn
//   </Btn>
// );
export const SecondryBtn = () => <Btn variant="secondry">Secondry Btn</Btn>;
export const SuccessBtn = () => <Btn variant="success">Success Btn</Btn>;
export const DangerBtn = () => <Btn variant="danger">Danger Btn</Btn>;

// arg

const Template = (args) => <Btn {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary A Args",
};

export const PrimaryB = Template.bind({});
PrimaryB.args = {
  ...PrimaryA.args,
};

export const PrimaryC = Template.bind({});
PrimaryC.args = {
  ...PrimaryA.args,
  variant: "primary",
};
// Renaming stories
// PrimaryBtn.storyName  = "Primary Btn Name"
