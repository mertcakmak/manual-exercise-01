"use client";

import { createContext, useContext, useState } from "react";
import { THairLoss, TSexAtBirth } from "../types";

const defaultAge = 18;

interface IHairLossContext {
  hairLossStage: THairLoss | null;
  setHairLossStage: (v: THairLoss | null) => void;
  sexAtBirth: TSexAtBirth | null;
  setSexAtBirth: (v: TSexAtBirth | null) => void;
  age: number | "";
  setAge: (v: number | "") => void;
  minAge: number;
  maxAge: number;
  isValidAge: () => boolean;
  isBasicStepDone: () => boolean;
}

const HairLossContext = createContext({} as IHairLossContext);
export const useHairLoss = (): IHairLossContext => {
  return useContext(HairLossContext);
};

const HairLossProvider = ({ children }: { children: React.ReactNode }) => {
  const [hairLossStage, setHairLossStage] = useState<THairLoss | null>(null);
  const [sexAtBirth, setSexAtBirth] = useState<TSexAtBirth | null>(null);
  const [age, setAge] = useState<number | "">(defaultAge);
  const minAge = 18;
  const maxAge = 100;

  const isValidAge = (): boolean => {
    const ageValue = Number(age);
    return ageValue >= minAge && ageValue <= maxAge;
  };

  const isBasicStepDone = () => {
    return isValidAge() && sexAtBirth !== null;
  };

  return (
    <HairLossContext.Provider
      value={{
        hairLossStage,
        setHairLossStage,
        sexAtBirth,
        setSexAtBirth,
        age,
        setAge,
        minAge,
        maxAge,
        isValidAge,
        isBasicStepDone,
      }}
    >
      {children}
    </HairLossContext.Provider>
  );
};

export default HairLossProvider;
