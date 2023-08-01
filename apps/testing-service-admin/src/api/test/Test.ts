import { User } from "../user/User";

export type Test = {
  comments: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  testType?: "Testa" | "Testb" | "Testc" | null;
  updatedAt: Date;
  user?: User | null;
};
