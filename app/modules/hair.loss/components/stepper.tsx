"use client";
import { JSX } from "react";
import StepperBasic from "./stepper.basic";
import StepperHairLoss from "./stepper.hair.loss";
import StepperContact from "./stepper.contact";
import StepperSummary from "./stepper.summary";
import { useHairLoss } from "../providers/hair.loss.provider";

const Stepper = (): JSX.Element => {
  const { currentStep } = useHairLoss();
  return (
    <div>
      <h1>Stepper</h1>
      {currentStep === "basic" && <StepperBasic />}
      {currentStep === "hairLoss" && <StepperHairLoss />}
      {currentStep === "contact" && <StepperContact />}
      {currentStep === "summary" && <StepperSummary />}
    </div>
  );
};

export default Stepper;
