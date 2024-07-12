import { InputJsonValue } from "../../types";

export type RouteOptimizationUpdateInput = {
  routeId?: string | null;
  startPoint?: string | null;
  endPoint?: string | null;
  optimizedRoute?: InputJsonValue;
};
