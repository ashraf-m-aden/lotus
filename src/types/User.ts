import { Role } from "./Role";
export interface User {
  name: string;
  id: string;
  role: Role;
  email: string;
  centreDeSoin: string;
  numero: string;
  profession: string;
  emailVerified: boolean;
}
