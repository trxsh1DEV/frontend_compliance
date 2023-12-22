import { z } from "zod";
import { schemaBackup } from "../utils/Schemas/schemaFormBackup";
import { schemaServer } from "../utils/Schemas/schemaFormServer";
import { schemaHA } from "../utils/Schemas/schemaFormHA";
import { schemaRegister } from "../utils/Schemas/schemaFormRegister";

export type FormBackupProps = z.infer<typeof schemaBackup>;
export type FormServerProps = z.infer<typeof schemaServer>;
export type FormHAProps = z.infer<typeof schemaHA>;
type clientType = {
  client: string;
};

export type FormRegisterProps = z.infer<typeof schemaRegister>;

export type combineInfra =
  | (FormServerProps & FormBackupProps & FormHAProps & clientType)
  | undefined;

export interface FormularyProps {
  nextStep: () => void;
  setFormValues: any;
}
