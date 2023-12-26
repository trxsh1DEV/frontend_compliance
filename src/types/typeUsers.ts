export type TypeUsers = {
  _id: string;
  name: string;
  social_reason?: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
  compliances: [string];
};
