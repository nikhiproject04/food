import { MachineLearningWhereInput } from "./MachineLearningWhereInput";
import { MachineLearningOrderByInput } from "./MachineLearningOrderByInput";

export type MachineLearningFindManyArgs = {
  where?: MachineLearningWhereInput;
  orderBy?: Array<MachineLearningOrderByInput>;
  skip?: number;
  take?: number;
};
