"use client";
import { JSX } from "react";
import {
  HAIR_LOSS_OPTIONS,
  STAGE_DURATION,
  THairLoss,
  TStageDuration,
} from "../types";
import { useHairLoss } from "../providers/hair.loss.provider";

const StepperHairLoss = (): JSX.Element => {
  const {
    hairLossStage,
    setHairLossStage,
    setCurrentStep,
    stageDuration,
    setStageDuration,
    isHairLossStepDone,
    skipHairLoss,
    setSkipHairLoss,
  } = useHairLoss();

  return (
    <div>
      <div className="flex flex-col p-2 m-2">
        <label>Hair loss stage</label>
        <select
          value={hairLossStage ?? ""}
          className="border p-2 rounded-md"
          onChange={(e) => {
            const value = e.target.value as THairLoss | "";
            setHairLossStage(value === "" ? null : value);
          }}
        >
          <option value={""}>Please select a stage</option>
          {HAIR_LOSS_OPTIONS.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col p-2 m-2">
        <label>Duration</label>
        <select
          value={stageDuration ?? ""}
          className="border p-2 rounded-md"
          onChange={(e) => {
            const value = e.target.value as TStageDuration | "";
            setStageDuration(value === "" ? null : value);
          }}
        >
          <option value={""}>Please select a duration</option>
          {STAGE_DURATION.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCurrentStep("basic")}
          className="m-2 bg-gray-950 text-white p-2"
        >
          Prev
        </button>

        {!skipHairLoss && (
          <button
            onClick={() => {
              setSkipHairLoss(true);
              setCurrentStep("contact");
            }}
            className="m-2 bg-red-600 text-white p-2"
          >
            Skip
          </button>
        )}

        <button
          onClick={() => setCurrentStep("contact")}
          className="m-2 bg-gray-950 text-white p-2 disabled:bg-gray-300"
          disabled={!isHairLossStepDone()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperHairLoss;
