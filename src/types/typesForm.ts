import { z } from "zod";
import { schemaBackup } from "../utils/Schemas/schemaFormBackup";
import { schemaServer } from "../utils/Schemas/schemaFormServer";
import { schemaHA } from "../utils/Schemas/schemaFormHA";
import { schemaRegister } from "../utils/Schemas/schemaFormRegister";
import { schemaFirewall } from "../utils/Schemas/schemaFormFirewall";
import { schemaInventory } from "../utils/Schemas/schemaFormInventory";
import { schemaSecurity } from "../utils/Schemas/schemaFormSecurity";
import { schemaServices } from "../utils/Schemas/schemaFormService";

export type FormBackupProps = z.infer<typeof schemaBackup>;
export type FormServerProps = z.infer<typeof schemaServer>;
export type FormHAProps = z.infer<typeof schemaHA>;
export type FormFirewallProps = z.infer<typeof schemaFirewall>;
export type FormInventoryProps = z.infer<typeof schemaInventory>;
export type FormSecurityProps = z.infer<typeof schemaSecurity>;
export type FormServiceProps = z.infer<typeof schemaServices>;

export type clientType = {
  client: string;
};

export type FormRegisterProps = z.infer<typeof schemaRegister>;

export type IFirewall = {
  firewall: {
    enabled: boolean;
    manufacturer: [
      "Sophos",
      "Fortigate",
      "Mikrotik",
      "Cisco",
      "SonicWall",
      "PFsense",
      "Nenhum"
    ];
    rules: ["weak", "medium", "good"];
    segmentation: boolean;
    vpn: ["weak", "medium", "good"];
    ips: boolean;
    backup: boolean;
    restorarion: boolean;
    monitoring: boolean;
    score: number;
    weight: number;
    points: number;
  };
};

export interface IInventory {
  inventory: {
    enabled: boolean;
    devices: (
      | "Computadores"
      | "Notebooks"
      | "Servidores"
      | "Impressoras"
      | "Equipamentos"
    )[];
    contacts: boolean;
    agentInventory: ["None", "Few", "Medium", "Many", "All"];
    score: number;
    weight: number;
    points: number;
  };
}

export interface ISecurity {
  security: {
    antivirus: ["None", "Few", "Medium", "Many", "All"];
    policyPassword: boolean;
    accessAuditing: boolean;
    gpo: ["None", "Basic", "Advanced"];
    lgpd: boolean;
    score: number;
    weight: number;
    points: number;
  };
}

export interface IServices {
  servicesOutsourcing: {
    email: boolean;
    fileserver: boolean;
    intranet: boolean;
    sites: boolean;
    erp: boolean;
    database: boolean;
    servers: boolean;
    score: number;
    weight: number;
    points: number;
  };
}

export type combineInfra =
  | (FormServerProps &
      FormBackupProps &
      FormHAProps &
      IServices &
      ISecurity &
      IInventory &
      IFirewall &
      clientType)
  | undefined;

export interface FormularyProps {
  nextStep?: () => void;
  setFormValues?: any;
  data?: any;
  id?: string;
}

export interface FormularyPropsBackup {
  nextStep?: () => void;
  setFormValues?: any;
  data?: FormBackupProps | any;
}
