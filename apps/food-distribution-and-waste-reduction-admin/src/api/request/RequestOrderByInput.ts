import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantityRequested?: SortOrder;
  requestStatus?: SortOrder;
  location?: SortOrder;
  foodItem?: SortOrder;
};
