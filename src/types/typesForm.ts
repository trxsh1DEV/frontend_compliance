import { z } from "zod";
import { schemaBackup } from "../utils/Schemas/schemaFormBackup";
import { schemaServer } from "../utils/Schemas/schemaFormServer";
import { schemaHA } from "../utils/Schemas/schemaFormHA";

export type FormBackupProps = z.infer<typeof schemaBackup>;
export type FormServerProps = z.infer<typeof schemaServer>;
export type FormHAProps = z.infer<typeof schemaHA>;

export type combineInfra =
  | (FormServerProps & FormBackupProps & FormHAProps)
  | undefined;

export interface FormularyProps {
  nextStep: () => void;
  setFormValues: any;
}
