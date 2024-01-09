import { enumNoneAll } from "./Schemas/genericForm";

export const dataHAUtil = [
  "none",
  "redundancy",
  "load balance",
  "failover",
  "cluster",
];

export const dataFirewallManufacturer = [
  "Sophos",
  "Fortigate",
  "Mikrotik",
  "Cisco",
  "SonicWall",
  "PFsense",
  "None",
];

export const dataFirewallRulesAndVpn = ["Fraco", "Ok", "Bom", "None"];
export const dataInventoryDevices = [
  "Computadores",
  "Notebooks",
  "Servidores",
  "Impressoras",
  "Equipamentos",
  "Nenhum",
];

export const dataSecurityGPO = ["Nenhuma", "Basica", "Avançada"];

export const dataInventoryAgent = enumNoneAll;

export const dataEnumNoneToAll = ["None", "Few", "Medium", "Many", "All"];
