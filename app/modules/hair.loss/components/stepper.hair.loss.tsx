"use client";
import { JSX, useEffect, useState } from "react";
import {
  HAIR_LOSS_OPTIONS,
  STAGE_DURATION,
  THairLoss,
  TStageDuration,
} from "../types";
import { useHairLoss } from "../providers/hair.loss.provider";
import { trackEvent } from "../util";

const StepperHairLoss = (): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const {
    hairLossStage,
    setHairLossStage,
    setCurrentStep,
    stageDuration,
    setStageDuration,
    isHairLossStepDone,
    setSkipHairLoss,
    didAskSkipHairloss,
    setDidAskSkipLoss,
  } = useHairLoss();

  useEffect(() => {
    trackEvent("stepView", { step: "hairLoss" });
  }, []);

  if (!showForm && !didAskSkipHairloss) {
    return (
      <div className="p-4 m-4">
        <p>Did you face any hair loss problem?</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setDidAskSkipLoss(true);
              setShowForm(true);
            }}
            className="m-2 bg-gray-950 text-white p-2"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setSkipHairLoss(true);
              setDidAskSkipLoss(true);
              setCurrentStep("contact");
            }}
            className="m-2 bg-gray-950 text-white p-2"
          >
            No
          </button>
        </div>
      </div>
    );
  }

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
