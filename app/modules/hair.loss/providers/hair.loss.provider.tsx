"use client";

import { createContext, useContext, useState } from "react";
import { THairLoss, TSexAtBirth, TStageDuration, TStep } from "../types";

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
  currentStep: TStep;
  setCurrentStep: (v: TStep) => void;
  stageDuration: TStageDuration | null;
  setStageDuration: (v: TStageDuration | null) => void;
  isHairLossStepDone: () => boolean;
  email: string;
  setEmail: (v: string) => void;
  consent: boolean;
  setConsent: (v: boolean) => void;
  isContactStepDone: () => boolean;
}

const HairLossContext = createContext({} as IHairLossContext);
export const useHairLoss = (): IHairLossContext => {
  return useContext(HairLossContext);
};

const HairLossProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<TStep>("basic");
  const [hairLossStage, setHairLossStage] = useState<THairLoss | null>(null);
  const [stageDuration, setStageDuration] = useState<TStageDuration | null>(
    null,
  );
  const [sexAtBirth, setSexAtBirth] = useState<TSexAtBirth | null>(null);
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number | "">(defaultAge);
  const [consent, setConsent] = useState<boolean>(false);
  const minAge = 18;
  const maxAge = 100;

  const isValidAge = (): boolean => {
    const ageValue = Number(age);
    return ageValue >= minAge && ageValue <= maxAge;
  };

  const isBasicStepDone = () => {
    return isValidAge() && sexAtBirth !== null;
  };

  const isHairLossStepDone = () => {
    return hairLossStage !== null && stageDuration !== null;
  };

  const isContactStepDone = (): boolean => {
    return !!email && email.length > 3 && email.includes("@") && !!consent;
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
        currentStep,
        setCurrentStep,
        stageDuration,
        setStageDuration,
        isHairLossStepDone,
        email,
        setEmail,
        consent,
        setConsent,
        isContactStepDone,
      }}
    >
      {children}
    </HairLossContext.Provider>
  );
};

export default HairLossProvider;
