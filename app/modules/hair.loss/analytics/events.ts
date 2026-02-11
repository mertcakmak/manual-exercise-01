export const EVENTS = {
  STEP_VIEWED: "hairloss.step_viewed",
  STEP_COMPLETED: "hairloss.step_completed",
  FORM_SUBMITTED: "hairloss.form_submitted",
} as const;

export type HairLossEvent = (typeof EVENTS)[keyof typeof EVENTS];
