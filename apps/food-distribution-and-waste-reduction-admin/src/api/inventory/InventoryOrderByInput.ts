import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantityInStock?: SortOrder;
  expirationDate?: SortOrder;
  foodItem?: SortOrder;
};
