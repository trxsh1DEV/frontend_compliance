import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../../utils/schemaForm";
import { FormDataProps } from "../../types/typesForm";
import "../AddCompliance/style.css";
import { Input } from "./InputNew";

export default function InputPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      backup: {
        frequency: {
          score: 0,
        },
        policy: {
          score: 0,
        },
        restoration: {
          score: 0,
        },
        storage: {
          local: { score: 0 },
          remote: { score: 0 },
        },
      },
    },
  });

  console.log(errors.backup?.frequency?.score?.message);

  return (
    <>
      <h2>Input</h2>
      <main className="container">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Input
            {...register(`backup.policy.score`, {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Politica"
            label="Testing"
            helperText={errors.backup?.policy?.score?.message}
          />
          <Input
            {...register(`backup.frequency.score`, {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Frequencia"
            label="Testing"
            helperText={errors.backup?.frequency?.score?.message}
          />
          <Input
            {...register(`backup.storage.local.score`, {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Local"
            helperText={errors.backup?.storage?.local?.score?.message}
          />
          <Input
            {...register(`backup.storage.remote.score`, {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Remoto"
            helperText={errors.backup?.storage?.remote?.score?.message}
          />
          <Input
            {...register(`backup.restoration.score`, {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Restauração"
            helperText={errors.backup?.restoration?.score?.message}
          />

          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}
