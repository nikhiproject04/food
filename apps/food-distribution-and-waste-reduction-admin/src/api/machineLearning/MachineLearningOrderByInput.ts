import { SortOrder } from "../../util/SortOrder";

export type MachineLearningOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  area?: SortOrder;
  predictedDemand?: SortOrder;
};
