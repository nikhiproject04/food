import { MachineLearning as TMachineLearning } from "../api/machineLearning/MachineLearning";

export const MACHINELEARNING_TITLE_FIELD = "area";

export const MachineLearningTitle = (record: TMachineLearning): string => {
  return record.area?.toString() || String(record.id);
};
