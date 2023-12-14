import { useState } from "preact/hooks";

import FormBackup from "../Form/FormBackup/FormBackup";
import FormServer from "../Form/FormServer/FormServer";

const AddCompliance = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  return (
    <div className="container">
      {step === 2 && <FormBackup nextStep={nextStep} />}
      {step === 1 && <FormServer nextStep={nextStep} />}
    </div>
  );
};

export default AddCompliance;
