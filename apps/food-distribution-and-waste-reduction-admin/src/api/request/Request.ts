export type Request = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantityRequested: number | null;
  requestStatus?: "Option1" | null;
  location: string | null;
  foodItem: string | null;
};
