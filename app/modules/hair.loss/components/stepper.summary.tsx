"use client";
import { JSX } from "react";
import { useHairLoss } from "../providers/hair.loss.provider";

const StepperSummary = (): JSX.Element => {
  const {
    hairLossStage,
    age,
    sexAtBirth,
    stageDuration,
    email,
    setCurrentStep,
    isSubmitted,
    setIsSubmitted,
  } = useHairLoss();

  if (isSubmitted) {
    return <div className="flex p-2 m-2">Submitted</div>;
  }

  return (
    <div>
      <div className="p-3 m-3 border bg-gray-50">
        <div>Age: {age}</div>
        <div>Sex at birth: {sexAtBirth}</div>
        <div>Hair Loss Stage: {hairLossStage}</div>
        <div>Hair Loss Duration: {stageDuration}</div>
        <div>Email: {email}</div>
      </div>
      <div>
        <button
          onClick={() => setCurrentStep("contact")}
          className="m-2 bg-gray-950 text-white p-2"
        >
          Prev
        </button>

        <button
          onClick={() => setCurrentStep("basic")}
          className="m-2 bg-gray-950 text-white p-2"
        >
          Edit
        </button>

        <button
          onClick={() => setIsSubmitted(true)}
          className="m-2 bg-gray-950 text-white p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepperSummary;
