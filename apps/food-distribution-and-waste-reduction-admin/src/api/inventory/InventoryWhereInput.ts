import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  quantityInStock?: IntNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  foodItem?: StringNullableFilter;
};
