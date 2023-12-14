import { z } from "zod";
import { schemaBackup } from "../utils/Schemas/schemaFormBackup";
import { schemaServer } from "../utils/Schemas/schemaFormServer";

export type FormBackupProps = z.infer<typeof schemaBackup>;
export type FormServerProps = z.infer<typeof schemaServer>;
