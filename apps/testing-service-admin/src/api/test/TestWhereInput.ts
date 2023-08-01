import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestWhereInput = {
  comments?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  testType?: "Testa" | "Testb" | "Testc";
  user?: UserWhereUniqueInput;
};
