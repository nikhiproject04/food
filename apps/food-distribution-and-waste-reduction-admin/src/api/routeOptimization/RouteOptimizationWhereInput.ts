import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RouteOptimizationWhereInput = {
  id?: StringFilter;
  routeId?: StringNullableFilter;
  startPoint?: StringNullableFilter;
  endPoint?: StringNullableFilter;
  optimizedRoute?: JsonFilter;
};
