export type User = {
  name: string;
  email: string;
  phoneNumber: string;
  id: number;
  meetingHistory: any;
  photoConsent: boolean;
};

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
  speeches: Speech[];
};

export type Speech = {
  title: string | undefined;
  pathway: string;
  speakerId: number;
  speakerName: string;
  evaluatorId: number | undefined;
  evaluatorName: string | undefined;
  id: number;
};

export type Deployment = {
  url: string;
};
