import { FoodDonation as TFoodDonation } from "../api/foodDonation/FoodDonation";

export const FOODDONATION_TITLE_FIELD = "foodItem";

export const FoodDonationTitle = (record: TFoodDonation): string => {
  return record.foodItem?.toString() || String(record.id);
};
