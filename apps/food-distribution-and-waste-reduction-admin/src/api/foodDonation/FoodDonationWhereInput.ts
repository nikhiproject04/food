import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FoodDonationWhereInput = {
  id?: StringFilter;
  foodItem?: StringNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
