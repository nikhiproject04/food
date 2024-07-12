import { FoodDonationWhereInput } from "./FoodDonationWhereInput";
import { FoodDonationOrderByInput } from "./FoodDonationOrderByInput";

export type FoodDonationFindManyArgs = {
  where?: FoodDonationWhereInput;
  orderBy?: Array<FoodDonationOrderByInput>;
  skip?: number;
  take?: number;
};
