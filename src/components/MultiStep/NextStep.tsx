import { useState } from "preact/hooks";

import FormBackup from "../Form/Form";

const AddCompliance = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container">
      {step === 1 && <FormBackup nextStep={nextStep} />}
      {step === 2 && <div>asd</div>}
    </div>
  );
};

export default AddCompliance;
