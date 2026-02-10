"use client";
import { JSX } from "react";
import { HAIR_LOSS_OPTIONS, THairLoss } from "../types";
import { useHairLoss } from "../providers/hair.loss.provider";

const StepperHairLoss = (): JSX.Element => {
  const { hairLossStage, setHairLossStage } = useHairLoss();

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as THairLoss | "";
    setHairLossStage(value === "" ? null : value);
  };

  return (
    <div>
      <div className="flex flex-col p-2 m-2">
        <label>Hair loss stage</label>
        <select
          value={hairLossStage as string}
          className="border p-2 rounded-md"
          onChange={onSelectHandler}
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
        <label>Hair loss stage</label>
      </div>
    </div>
  );
};

export default StepperHairLoss;
