"use client";
import { JSX } from "react";
import useHairLossHook from "../hooks/useHairLoss.hook";

const StepperSummary = (): JSX.Element => {
  const { hairLossStage } = useHairLossHook();
  return (
    <div className="p-3 m-3 border bg-gray-50">
      <div>{hairLossStage as string}</div>
    </div>
  );
};

export default StepperSummary;
