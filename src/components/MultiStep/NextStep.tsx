import { useState } from "preact/hooks";

import FormBackup from "../Form/FormBackup/FormBackup";
import FormServer from "../Form/FormServer/FormServer";
import { combineInfra } from "../../types/typesForm";
// import FormHA from "../Form/FormHA/FormHA";
import Success from "../../pages/Success/Success";
import { useLocation } from "react-router-dom";
import FormSecurity from "../Form/FormSecurity/FormSecurity";
import FormService from "../Form/FormService/FormService";
import FormHA from "../Form/FormHA/FormHA";
import FormFirewall from "../Form/FormFirewall/FormFirewall";
import FormInventory from "../Form/FormInventory/FormInventory";

const AddCompliance = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<combineInfra>();
  const {
    state: { id },
  } = useLocation();

  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container">
      {step === 1 && (
        <FormHA nextStep={nextStep} setFormValues={setFormValues} />
      )}
      {step === 2 && (
        <FormBackup
          nextStep={nextStep}
          previousStep={previousStep}
          setFormValues={setFormValues}
        />
      )}

      {step === 3 && (
        <FormFirewall
          nextStep={nextStep}
          previousStep={previousStep}
          setFormValues={setFormValues}
        />
      )}

      {step === 4 && (
        <FormSecurity
          nextStep={nextStep}
          previousStep={previousStep}
          setFormValues={setFormValues}
        />
      )}

      {step === 5 && (
        <FormInventory
          nextStep={nextStep}
          previousStep={previousStep}
          setFormValues={setFormValues}
        />
      )}
      {step === 6 && (
        <FormService
          nextStep={nextStep}
          previousStep={previousStep}
          setFormValues={setFormValues}
        />
      )}

      {step === 7 && (
        <FormServer
          nextStep={nextStep}
          previousStep={previousStep}
          setFormValues={setFormValues}
        />
      )}
      {step === 8 && <Success infra={formValues} id={id} />}
    </div>
  );
};

export default AddCompliance;
