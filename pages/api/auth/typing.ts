import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface CustomSession extends Session {
  user: CustomUser;
}

export interface CustomToken extends JWT {
  jsessionId: string;
}

export interface CustomUser extends User {
  jsessionId: string;
}
