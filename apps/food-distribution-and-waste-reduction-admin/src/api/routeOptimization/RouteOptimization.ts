import { JsonValue } from "type-fest";

export type RouteOptimization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  routeId: string | null;
  startPoint: string | null;
  endPoint: string | null;
  optimizedRoute: JsonValue;
};
