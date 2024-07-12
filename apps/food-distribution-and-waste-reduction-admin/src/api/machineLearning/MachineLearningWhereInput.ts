import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MachineLearningWhereInput = {
  id?: StringFilter;
  area?: StringNullableFilter;
  predictedDemand?: IntNullableFilter;
};
