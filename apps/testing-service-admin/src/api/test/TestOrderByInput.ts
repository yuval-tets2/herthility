import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  testType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
