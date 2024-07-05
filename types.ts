// types.ts

export type Role = {
  roleId: number;
  roleName: string;
  userName: string | null;
};

export type Agenda = {
  roles: Role[];
  wordOfTheDay: string;
  theme: string;
  speakers: number;
};

export type Deployment = {
  url: string
};
