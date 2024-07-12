export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantityInStock: number | null;
  expirationDate: Date | null;
  foodItem: string | null;
};
