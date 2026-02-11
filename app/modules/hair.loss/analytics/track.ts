export type TrackPayload = Record<string, unknown>;

export function track(event: string, payload: TrackPayload = {}) {
  // Demo-only tracking. Replace with Segment/Amplitude/etc. in production.
  // Avoid logging PII (e.g., raw email).
  console.log(`[track] ${event}`, payload);
}
