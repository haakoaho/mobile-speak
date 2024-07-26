export type User = {
  name: string;
  email: string;
  phoneNumber: string;
  id: number;
  meetingHistory: any;
  photoConsent: boolean;
  roleHistory: Map<string, number>;
  speechHistory: Speech[];
};

export type Role = {
  userId: number;
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
  startDateTime: Date;
  location: string;
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

export type ChangePassword = {
  oldPassword: string;
  newPassword: string;
};
