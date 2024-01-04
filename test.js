const objeto = {
  backup: {
    frequency: { enabled: true, level: "high", score: 10, weight: 8 },
    restoration: { enabled: true, score: 9, weight: 9 },
    policy: { enabled: true, score: 10, weight: 6 },
    storage: {
      local: { enabled: true, qtde: 2, score: 10, weight: 9 },
      remote: { enabled: true, qtde: 3, score: 10, weight: 9 },
    },
    description:
      "Backups estão OK, mas seria recomendável implementar um backup remoto",
    weight: 9,
    points: 0,
  },
  server: {
    enabled: true,
    servers: [
      {
        systemOperation: { patching: "Regular", score: 8, weight: 3 },
        config: { level: "high", score: 10, weight: 7 },
        monitoringPerformance: { enabled: true, score: 7, weight: 7 },
        serverName: "CLA-SRV01",
        weight: 8,
        score: 10,
        description: "SERVER 01111111111",
        points: 0,
        _id: "659712ea81fdc57abd43b6b9",
      },
      {
        systemOperation: { patching: "Irregular", score: 5, weight: 3 },
        config: { level: "high", score: 3, weight: 7 },
        monitoringPerformance: { enabled: true, score: 5, weight: 7 },
        serverName: "CLA-SRV02",
        weight: 8,
        score: 6,
        description: "ALL SERVER DESCRIPTION",
        points: 0,
        _id: "659712ea81fdc57abd43b6ba",
      },
    ],
    description:
      "Boas configurações no server, só peca na ausência de monitoramento",
    weight: 8,
    points: 0,
  },
  ha: {
    weight: 7,
    points: 0,
    enabled: false,
    solutions: ["cluster", "failover", "load balance"],
    tested: true,
    rto: 24,
    score: 5,
    description: "sad",
  },
  firewall: {
    enabled: true,
    manufacturer: ["Sophos"],
    rules: "good",
    segmentation: false,
    vpn: "medium",
    ips: true,
    backup: true,
    restoration: false,
    monitoring: true,
    score: 10,
    description:
      "Firewall bom, porém não tem restauração testada e algumas reclamações da VPN",
    weight: 9,
    points: 0,
  },
  inventory: {
    enabled: true,
    devices: ["Computadores", "Notebooks", "Servidores", "Equipamentos"],
    contacts: true,
    agentInventory: "Many",
    score: 10,
    description:
      "O inventário está quase em 100%, faltam apenas algumas impressoras",
    weight: 7,
    points: 0,
  },
  security: {
    antivirus: "All",
    policyPassword: true,
    accessAuditing: true,
    gpo: "Basic",
    lgpd: false,
    score: 10,
    description:
      "Falta se adequar a LGPD e fazer alguns aprimoramentos na GPO, como bloqueio de dispositivos como Pen drives, acesso ao CMD, Control Panel e restrição de Software",
    weight: 8,
    points: 0,
  },
  servicesOutsourcing: {
    email: true,
    fileserver: true,
    intranet: false,
    sites: true,
    erp: true,
    database: false,
    servers: false,
    score: 10,
    description: "Muito bom, mas seria recomendável ter algumas VMs em Cloud",
    weight: 6,
    points: 0,
  },
};

const newKey = "123";

Object.entries(objeto).map(([key, value]) => (value.newKey = newKey));

console.log(objeto);
