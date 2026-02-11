import { EVENTS } from "./events";
import { track } from "./track";

type Meta = Record<string, unknown>;

export function trackStepViewed(step: string, meta: Meta = {}) {
  track(EVENTS.STEP_VIEWED, { step, ...meta });
}

export function trackStepCompleted(step: string, meta: Meta = {}) {
  track(EVENTS.STEP_COMPLETED, { step, ...meta });
}

export function trackFormSubmitted(meta: Meta = {}) {
  track(EVENTS.FORM_SUBMITTED, meta);
}
