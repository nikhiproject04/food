import { InputJsonValue } from "../../types";

export type RouteOptimizationCreateInput = {
  routeId?: string | null;
  startPoint?: string | null;
  endPoint?: string | null;
  optimizedRoute?: InputJsonValue;
};
