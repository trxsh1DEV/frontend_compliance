import { useState } from "preact/hooks";

import FormBackup from "../../components/Form/FormBackup/FormBackup";
import FormServer from "../../components/Form/FormServer/FormServer";
import { combineInfra } from "../../types/typesForm";
import Success from "../Success/Success";
import { useLocation } from "react-router-dom";
import FormSecurity from "../../components/Form/FormSecurity/FormSecurity";
import FormService from "../../components/Form/FormService/FormService";
// import FormHA from "../../components/Form/FormHA/FormHA";
import FormFirewall from "../../components/Form/FormFirewall/FormFirewall";
import FormInventory from "../../components/Form/FormInventory/FormInventory";

const AddCompliance = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<combineInfra>();
  console.log(formValues);
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
        <FormBackup
          nextStep={nextStep}
          previousStep={previousStep}
          setFormValues={setFormValues}
        />
      )}

      {step === 2 && (
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
