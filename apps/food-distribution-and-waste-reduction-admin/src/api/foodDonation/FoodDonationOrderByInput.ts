import { SortOrder } from "../../util/SortOrder";

export type FoodDonationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  foodItem?: SortOrder;
  expirationDate?: SortOrder;
  location?: SortOrder;
  quantity?: SortOrder;
};
