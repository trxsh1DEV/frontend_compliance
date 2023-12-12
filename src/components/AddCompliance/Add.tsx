import { useState } from "preact/hooks";
import { FormDataProps } from "../../types/typesForm";
import { Formulary1 } from "./addCompliance";

const AddCompliance = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataProps>();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // console.log(formData?.backup);

  return (
    <div className="container">
      {step === 1 && <Formulary1 nextStep={nextStep} setData={setFormData} />}
      {/* {step === 3 && (
          <FormularioFinal submitForm={submitForm} prevStep={prevStep} />
        )} */}
    </div>
  );
};

export default AddCompliance;
