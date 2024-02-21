export type TypeUsers = {
  _id: string;
  name: string;
  social_reason?: string;
  email: string;
  avatar: string | Blob;
  criticalProblems: boolean;
  typeContract: string;
  cnpj: string;
  contact: string;
  isAdmin?: boolean;
  compliances: [string];
};
