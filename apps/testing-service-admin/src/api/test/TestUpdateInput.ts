import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestUpdateInput = {
  comments?: string | null;
  date?: Date | null;
  testType?: "Testa" | "Testb" | "Testc" | null;
  user?: UserWhereUniqueInput | null;
};
