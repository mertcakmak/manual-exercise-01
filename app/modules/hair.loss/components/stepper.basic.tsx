"use client";
import { JSX } from "react";
import { useHairLoss } from "../providers/hair.loss.provider";
import { SEX_AT_BIRTH } from "../types";

const StepperBasic = (): JSX.Element => {
  const {
    age,
    setAge,
    isValidAge,
    minAge,
    maxAge,
    sexAtBirth,
    setSexAtBirth,
    isBasicStepDone,
  } = useHairLoss();

  return (
    <div>
      <div className="flex flex-col p-2 m-2">
        <label>Age</label>
        <input
          className="border p-2"
          type="number"
          min={minAge}
          max={maxAge}
          value={age}
          onChange={(e) => {
            const ageValue = e.target.value.trim();
            setAge(ageValue === "" ? "" : Number(ageValue));
          }}
        />
        {!isValidAge() && (
          <div>
            Please select a valid age between {minAge} and {maxAge}
          </div>
        )}
      </div>
      <div className="flex flex-col p-2 m-2">
        <label>Sex at Birth</label>
        {SEX_AT_BIRTH.map((item) => {
          return (
            <div key={item.value} className="gap-2 flex">
              <input
                id={item.value}
                type="radio"
                name="sex_at_birth"
                value={item.value}
                checked={item.value === sexAtBirth}
                onChange={() => {
                  setSexAtBirth(item.value);
                }}
              />
              <label htmlFor={item.value}>{item.label}</label>
            </div>
          );
        })}
      </div>
      {isBasicStepDone() && (
        <button className="m-2 bg-gray-950 text-white p-2">Next</button>
      )}
    </div>
  );
};

export default StepperBasic;
