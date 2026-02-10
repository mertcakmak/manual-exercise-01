export const HAIR_LOSS_OPTIONS = [
  { value: "early", label: "Early" },
  { value: "moderate", label: "Moderate" },
  { value: "advanced", label: "Advanced" },
];

export type THairLoss = (typeof HAIR_LOSS_OPTIONS)[number]["value"];
