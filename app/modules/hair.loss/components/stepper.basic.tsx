"use client";
import { JSX } from "react";
import useHairLossHook from "../hooks/useHairLoss.hook";
import { HAIR_LOSS_OPTIONS, THairLoss } from "../types";

const StepperBasic = (): JSX.Element => {
  const { hairLossStage, setHairLossStage } = useHairLossHook();

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as THairLoss | "null";
    setHairLossStage(value === "null" ? null : value);
  };

  console.log("hairLossStage:", hairLossStage);

  return (
    <div>
      <label>Hair loss stage</label>
      <select
        value={hairLossStage as string}
        className="border p-2 rounded-md"
        onChange={onSelectHandler}
      >
        <option value={"null"}>Please select a stage</option>
        {HAIR_LOSS_OPTIONS.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default StepperBasic;
