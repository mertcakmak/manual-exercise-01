"use client";
import { JSX } from "react";
import StepperBasic from "./stepper.basic";
import StepperHairLoss from "./stepper.hair.loss";
import StepperContact from "./stepper.contact";
import StepperSummary from "./stepper.summary";

const Stepper = (): JSX.Element => {
  return (
    <div>
      <h1>Stepper</h1>
      <StepperBasic />
      {/* <StepperHairLoss />
      <StepperContact /> */}
      <StepperSummary />
    </div>
  );
};

export default Stepper;
