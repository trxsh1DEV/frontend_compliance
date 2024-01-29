import { JwtPayload } from "jwt-decode";

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
  isAdmin: boolean;
  compliances: [string];
};

export interface DecodedTokenProps extends JwtPayload {
  id: string;
  isAdmin: boolean;
  // Adicione outras propriedades conforme necessário
}
