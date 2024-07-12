import { SortOrder } from "../../util/SortOrder";

export type RouteOptimizationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  routeId?: SortOrder;
  startPoint?: SortOrder;
  endPoint?: SortOrder;
  optimizedRoute?: SortOrder;
};
