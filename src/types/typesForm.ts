import { z } from "zod";
import { schemaBackup } from "../utils/Schemas/schemaFormBackup";
import { schemaServer } from "../utils/Schemas/schemaFormServer";
import { schemaHA } from "../utils/Schemas/schemaFormHA";
import { schemaRegister } from "../utils/Schemas/schemaFormRegister";

export type IFirewall = {
  firewall: {
    enabled: boolean;
    manufacturer: [
      "Sophos",
      "Fortigate",
      "Mikrotik",
      "Cisco",
      "SonicWall",
      "PFsense"
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

export type FormBackupProps = z.infer<typeof schemaBackup>;
export type FormServerProps = z.infer<typeof schemaServer>;
export type FormHAProps = z.infer<typeof schemaHA>;

type clientType = {
  client: string;
};

export type FormRegisterProps = z.infer<typeof schemaRegister>;

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
}

export interface FormularyPropsBackup {
  nextStep?: () => void;
  setFormValues?: any;
  data?: FormBackupProps | any;
}
