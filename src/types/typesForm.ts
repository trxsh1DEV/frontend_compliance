import { z } from "zod";
import { schema } from "../utils/schemaForm";

export type FormDataProps = z.infer<typeof schema>;
