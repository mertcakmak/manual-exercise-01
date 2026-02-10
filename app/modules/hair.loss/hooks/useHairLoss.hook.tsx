"use client";
import { useState } from "react";
import { THairLoss } from "../types";

const useHairLossHook = () => {
  const [hairLossStage, setHairLossStage] = useState<THairLoss | null>(null);
  return {
    hairLossStage,
    setHairLossStage,
  };
};

export default useHairLossHook;
