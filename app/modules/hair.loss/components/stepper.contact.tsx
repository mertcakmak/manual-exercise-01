"use client";
import { JSX } from "react";
import { useHairLoss } from "../providers/hair.loss.provider";

const StepperContact = (): JSX.Element => {
  const {
    setCurrentStep,
    email,
    setEmail,
    consent,
    setConsent,
    isContactStepDone,
  } = useHairLoss();
  return (
    <div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
      </div>

      <div>
        <input
          className="p-2 border rounded-md"
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={() => setConsent(!consent)}
        />
        <label htmlFor="consent">
          I agree to be contacted about treatment options
        </label>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCurrentStep("hairLoss")}
          className="m-2 bg-gray-950 text-white p-2"
        >
          Prev
        </button>

        {isContactStepDone() && (
          <button
            onClick={() => setCurrentStep("summary")}
            className="m-2 bg-gray-950 text-white p-2"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default StepperContact;
