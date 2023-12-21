import { useState } from "preact/hooks";

import FormBackup from "../Form/FormBackup/FormBackup";
import FormServer from "../Form/FormServer/FormServer";
import { combineInfra } from "../../types/typesForm";
import FormHA from "../Form/FormHA/FormHA";
import Success from "../../pages/Success";

const AddCompliance = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<combineInfra>();

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="container">
      {step === 2 && (
        <FormBackup nextStep={nextStep} setFormValues={setFormValues} />
      )}
      {step === 3 && (
        <FormServer nextStep={nextStep} setFormValues={setFormValues} />
      )}
      {step === 1 && (
        <FormHA nextStep={nextStep} setFormValues={setFormValues} />
      )}
      {step === 4 && <Success infra={formValues} />}
    </div>
  );
};

export default AddCompliance;
