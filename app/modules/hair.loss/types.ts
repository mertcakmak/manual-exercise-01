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
