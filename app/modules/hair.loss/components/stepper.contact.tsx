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
    isValidEmail,
  } = useHairLoss();
  return (
    <div>
      <div>
        <label>Email</label>
        <input
          type="email"
          className="border p-2 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        {email && !isValidEmail() && <div>Please type a valid email </div>}
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

        <button
          onClick={() => setCurrentStep("summary")}
          className="m-2 bg-gray-950 text-white p-2 disabled:bg-gray-300"
          disabled={!isContactStepDone()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperContact;
