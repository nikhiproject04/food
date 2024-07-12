import * as graphql from "@nestjs/graphql";
import { RouteOptimizationResolverBase } from "./base/routeOptimization.resolver.base";
import { RouteOptimization } from "./base/RouteOptimization";
import { RouteOptimizationService } from "./routeOptimization.service";

@graphql.Resolver(() => RouteOptimization)
export class RouteOptimizationResolver extends RouteOptimizationResolverBase {
  constructor(protected readonly service: RouteOptimizationService) {
    super(service);
  }
}
