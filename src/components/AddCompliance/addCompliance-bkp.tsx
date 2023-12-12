import { useForm } from "react-hook-form";
import "./style.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Plus, Minus } from "phosphor-react";
import { useState } from "preact/hooks";
import axios from "axios";

const fieldSchema = z.object({
  enabled: z.boolean().default(false),
  description: z
    .string()
    .min(3, "Por favor, informe uma descrição válida")
    .default(""),
  score: z
    .number()
    .positive("Por favor, informe um valor maior que 0")
    .max(10, "Menor que 10")
    .default(0),
  value: z.number().positive().default(0).optional(),
});

const schema = z.object({
  // client: z.string(),
  backup: z.object({
    policy: fieldSchema,
    frequency: fieldSchema,
    storage: z.object({
      local: fieldSchema,
      remote: fieldSchema,
    }),
    restoration: fieldSchema,
  }),
});
// .refine((fields) => fields.bills.length > 0, {
//   path: ["bills"],
//   message: "Por favor, adicione ao menos uma conta",
// });

type FormDataProps = z.infer<typeof schema>;

const Formulary1 = ({ nextStep, setData }) => {
  const [formValidated, setFormValidated] = useState(false);

  const handleSubmitForm = async (data: FormDataProps) => {
    alert("Dados validados com sucesso");
    setFormValidated(true);
    setData(data);
    const backup = data.backup;

    try {
      const res = await axios.post("http://localhost:5421/api/compliance", {
        client: "65778324d62ba41cad5a18ef",
        backup,
      });

      console.log(res.data, res.status);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleNext = () => {
    nextStep();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  console.log(errors);

  return (
    <div className="app">
      {/* <div> */}
      <h2>Form 1</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="bill-item">
          <div>
            <input {...register(`backup.policy.description`)} type="text" />

            {errors?.backup?.policy?.description && (
              <p className="error-message">
                {errors.backup?.policy?.description.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.policy.score`, {
                valueAsNumber: true,
              })}
              type="number"
            />

            {errors?.backup?.policy?.score && (
              <p className="error-message">
                {errors.backup?.policy?.score?.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.policy.enabled`, {
                valueAsNumber: true,
              })}
              type="checkbox"
            />

            {errors?.backup?.policy?.enabled && (
              <p className="error-message">
                {errors?.backup?.policy?.enabled.message}
              </p>
            )}
          </div>
        </div>

        <div className="bill-item">
          <div>
            <input {...register(`backup.frequency.description`)} type="text" />

            {errors?.backup?.frequency?.description && (
              <p className="error-message">
                {errors.backup?.frequency?.description.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.frequency.score`, {
                valueAsNumber: true,
              })}
              type="number"
            />

            {errors?.backup?.frequency?.score && (
              <p className="error-message">
                {errors.backup?.frequency?.score?.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.policy.value`, {
                valueAsNumber: true,
              })}
              type="number"
            />

            {errors?.backup?.policy?.value && (
              <p className="error-message">
                {errors.backup?.policy?.value?.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.frequency.enabled`, {
                valueAsNumber: true,
              })}
              type="checkbox"
            />

            {errors?.backup?.frequency?.enabled && (
              <p className="error-message">
                {errors?.backup?.frequency?.enabled.message}
              </p>
            )}
          </div>
        </div>

        <div className="bill-item">
          <div>
            <input
              {...register(`backup.storage.local.description`)}
              type="text"
            />

            {errors?.backup?.storage?.local?.description && (
              <p className="error-message">
                {errors.backup?.storage.local?.description.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.storage.local.score`, {
                valueAsNumber: true,
              })}
              type="number"
            />

            {errors?.backup?.storage?.local?.score && (
              <p className="error-message">
                {errors.backup?.storage?.local?.score?.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.storage.local.enabled`, {
                valueAsNumber: true,
              })}
              type="checkbox"
            />

            {errors?.backup?.storage?.local?.enabled && (
              <p className="error-message">
                {errors?.backup?.storage.local?.enabled.message}
              </p>
            )}
          </div>
        </div>

        <div className="bill-item">
          <div>
            <input
              {...register(`backup.storage.remote.description`)}
              type="text"
            />

            {errors?.backup?.storage?.remote?.description && (
              <p className="error-message">
                {errors.backup?.storage.remote?.description.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.storage.remote.score`, {
                valueAsNumber: true,
              })}
              type="number"
            />

            {errors?.backup?.storage?.remote?.score && (
              <p className="error-message">
                {errors.backup?.storage?.remote?.score?.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.storage.remote.enabled`, {
                valueAsNumber: true,
              })}
              type="checkbox"
            />

            {errors?.backup?.storage?.remote?.enabled && (
              <p className="error-message">
                {errors?.backup?.storage.remote?.enabled.message}
              </p>
            )}
          </div>
        </div>

        <div className="bill-item">
          <div>
            <input
              {...register(`backup.restoration.description`)}
              type="text"
            />

            {errors?.backup?.restoration?.description && (
              <p className="error-message">
                {errors.backup?.restoration?.description?.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.restoration.score`, {
                valueAsNumber: true,
              })}
              type="number"
            />

            {errors?.backup?.restoration?.score && (
              <p className="error-message">
                {errors.backup?.restoration?.score?.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register(`backup.restoration.enabled`, {
                valueAsNumber: true,
              })}
              type="checkbox"
            />

            {errors?.backup?.restoration?.enabled && (
              <p className="error-message">
                {errors?.backup?.restoration?.enabled?.message}
              </p>
            )}
          </div>
        </div>

        {/* {errors?.backup?.frequency ||
            errors?.backup?.restoration ||
            errors?.backup?.policy ||
            (errors?.backup?.storage && (
              <p className="error-message">
                {errors.backup?.policy?.message ||
                  errors.backup.restoration?.message ||
                  errors.backup.storage?.message ||
                  errors.backup.frequency?.message}
              </p>
            ))} */}
        {errors.backup && errors.backup.message}

        <button className={`send`} type="submit">
          Validar
        </button>
        <button
          onClick={handleNext}
          className={`next ${formValidated ? "form-validated" : ""}`}
          disabled={!formValidated}
        >
          Proximo
        </button>
      </form>
      {/* </div> */}
    </div>
  );
};

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

/*
<div className="bill-item">
            <div>
              <input {...register(`backup.policy.description`)} type="text" />

              {errors?.backup?.policy?.description && (
                <p className="error-message">
                  {errors.backup?.policy?.description.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register(`backup.policy.score`, {
                  valueAsNumber: true,
                })}
                type="number"
              />

              {errors?.backup?.policy?.score && (
                <p className="error-message">
                  {errors.backup?.policy?.score?.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register(`backup.policy.enabled`, {
                  valueAsNumber: true,
                })}
                type="checkbox"
              />

              {errors?.backup?.policy?.enabled && (
                <p className="error-message">
                  {errors?.backup?.policy?.enabled.message}
                </p>
              )}
            </div>
          </div>
 */
