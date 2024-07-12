export type FoodDonation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  foodItem: string | null;
  expirationDate: Date | null;
  location: string | null;
  quantity: number | null;
};
