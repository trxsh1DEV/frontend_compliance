import { useState } from "preact/hooks";

import FormBackup from "../Form/FormBackup/FormBackup";
import FormServer from "../Form/FormServer/FormServer";

const AddCompliance = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  console.log(formValues);

  return (
    <div className="container">
      {step === 1 && (
        <FormBackup nextStep={nextStep} setFormValues={setFormValues} />
      )}
      {step === 2 && (
        <FormServer nextStep={nextStep} setFormValues={setFormValues} />
      )}
    </div>
  );
};

export default AddCompliance;
