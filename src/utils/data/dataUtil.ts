export const dataHAUtil = [
  "none",
  "redundancy",
  "load balance",
  "failover",
  "cluster",
];

export const multipleOption = [
  { label: "Baixa", value: 1 },
  { label: "Media", value: 4 },
  { label: "Alta", value: 3 },
];

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: "transparent",
    opacity: state.isDisabled ? 0.7 : 1,
    border: "1px solid #1BA9D4",
    width: "245px",
  }),
  menu: (provided: any) => ({
    ...provided,
    color: "#fff",
    backgroundColor: "#343434",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#0799b3" : "#343434",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#fff",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "#fff",
  }),
};

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

export const dataEnumNoneToAll = ["None", "Few", "Medium", "Many", "All"];

export const dataUser = {
  _id: "",
  avatar: "",
  cnpj: "",
  compliances: [""],
  contact: "",
  criticalProblems: false,
  email: "",
  feedback: 1,
  isAdmin: false,
  name: "",
  typeContract: "",
  social_reason: "",
};
