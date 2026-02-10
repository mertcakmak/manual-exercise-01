"use client";
import { ChangeEvent, JSX } from "react";
import { useHairLoss } from "../providers/hair.loss.provider";
import { SEX_AT_BIRTH, TSexAtBirth } from "../types";

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

  const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const sexAtBirthValue = e.target.value.trim() as TSexAtBirth | "";
    setSexAtBirth(sexAtBirthValue === "" ? null : sexAtBirthValue);
  };

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
        <select
          className="border p-1 rounded-md"
          onChange={onSelectHandler}
          value={sexAtBirth === null ? "" : sexAtBirth}
        >
          <option value={""}>Please select sex at birth</option>
          {SEX_AT_BIRTH.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      {isBasicStepDone() && (
        <button className="m-2 bg-gray-950 text-white p-2">Next</button>
      )}
    </div>
  );
};

export default StepperBasic;
