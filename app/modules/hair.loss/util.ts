/* eslint-disable @typescript-eslint/no-explicit-any */
import { TEventAction } from "./types";

export const trackEvent = (
  action: TEventAction,
  payload: { [key: string]: any },
) => {
  console.log(`Action: ${action}`);
  console.log(`Payload: ${JSON.stringify(payload, null, 2)}`);
};
