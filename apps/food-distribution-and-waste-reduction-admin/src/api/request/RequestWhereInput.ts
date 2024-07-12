import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RequestWhereInput = {
  id?: StringFilter;
  quantityRequested?: IntNullableFilter;
  requestStatus?: "Option1";
  location?: StringNullableFilter;
  foodItem?: StringNullableFilter;
};
