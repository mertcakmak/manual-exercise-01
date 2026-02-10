export const HAIR_LOSS_OPTIONS = [
  { value: "early", label: "Early" },
  { value: "moderate", label: "Moderate" },
  { value: "advanced", label: "Advanced" },
];

export type THairLoss = (typeof HAIR_LOSS_OPTIONS)[number]["value"];

export const SEX_AT_BIRTH = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export type TSexAtBirth = (typeof SEX_AT_BIRTH)[number]["value"];

export const STAGE_DURATION = [
  { value: "3_months", label: "3 months" },
  { value: "3_12_months", label: "3-12 months" },
  { value: "more_than_12_months", label: "> 1 year" },
];

export type TStageDuration = (typeof STAGE_DURATION)[number]["value"];

export type TStep = "basic" | "hairLoss" | "contact" | "summary";
