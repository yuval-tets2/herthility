import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestCreateInput = {
  comments?: string | null;
  date?: Date | null;
  testType?: "Testa" | "Testb" | "Testc" | null;
  user?: UserWhereUniqueInput | null;
};
