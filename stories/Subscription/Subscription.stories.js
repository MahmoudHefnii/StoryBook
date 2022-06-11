import React from "react";
import { MediumInput } from "../Input/Input.stories";
import { PrimaryBtn } from "../Btn/Btn.stories";

export default {
  title: "Form/Subscription",
};
// using story within story
export const PrimarySubscription = () => (
  <>
    <MediumInput />
    <PrimaryBtn />
  </>
);
