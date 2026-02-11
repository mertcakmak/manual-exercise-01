"use client";

import { createContext, useContext, useState } from "react";
import { THairLoss, TSexAtBirth, TStageDuration, TStep } from "../types";

const defaultAge = 18;

const FEATURES = { SKIP_HAIR_STEP: true };

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
  isValidEmail: () => boolean;
  isSubmitted: boolean;
  setIsSubmitted: (v: boolean) => void;
  skipHairLoss: boolean;
  setSkipHairLoss: (v: boolean) => void;
  didAskSkipHairloss: boolean;
  setDidAskSkipLoss: (v: boolean) => void;
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
  const [skipHairLoss, setSkipHairLoss] = useState<boolean>(
    FEATURES.SKIP_HAIR_STEP,
  );
  const [sexAtBirth, setSexAtBirth] = useState<TSexAtBirth | null>(null);
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number | "">(defaultAge);
  const [consent, setConsent] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [didAskSkipHairloss, setDidAskSkipLoss] = useState(false);
  const minAge = 18;
  const maxAge = 100;

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidAge = (): boolean => {
    const ageValue = Number(age);
    return ageValue >= minAge && ageValue <= maxAge;
  };

  const isBasicStepDone = () => {
    return isValidAge() && sexAtBirth !== null;
  };

  const isHairLossStepDone = () => {
    return (hairLossStage !== null && stageDuration !== null) || skipHairLoss;
  };

  const isContactStepDone = (): boolean => {
    return isValidEmail() && consent;
  };

  const isValidEmail = (): boolean => {
    return EMAIL_REGEX.test(email);
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
        isValidEmail,
        isSubmitted,
        setIsSubmitted,
        skipHairLoss,
        setSkipHairLoss,
        didAskSkipHairloss,
        setDidAskSkipLoss,
      }}
    >
      {children}
    </HairLossContext.Provider>
  );
};

export default HairLossProvider;
