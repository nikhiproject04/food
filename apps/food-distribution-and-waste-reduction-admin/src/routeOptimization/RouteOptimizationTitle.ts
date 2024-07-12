import { RouteOptimization as TRouteOptimization } from "../api/routeOptimization/RouteOptimization";

export const ROUTEOPTIMIZATION_TITLE_FIELD = "routeId";

export const RouteOptimizationTitle = (record: TRouteOptimization): string => {
  return record.routeId?.toString() || String(record.id);
};
