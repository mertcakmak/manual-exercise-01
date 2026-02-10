"use client";
import { JSX } from "react";
import { useHairLoss } from "../providers/hair.loss.provider";

const StepperSummary = (): JSX.Element => {
  const { hairLossStage, age, sexAtBirth } = useHairLoss();
  return (
    <div className="p-3 m-3 border bg-gray-50">
      <div>Age: {age}</div>
      <div>Sex at birth: {sexAtBirth}</div>
      <div>Hair Loss Stage: {hairLossStage}</div>
    </div>
  );
};

export default StepperSummary;
