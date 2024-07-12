export type FoodDonationCreateInput = {
  foodItem?: string | null;
  expirationDate?: Date | null;
  location?: string | null;
  quantity?: number | null;
};
