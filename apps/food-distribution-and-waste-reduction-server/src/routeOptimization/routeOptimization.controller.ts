import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RouteOptimizationService } from "./routeOptimization.service";
import { RouteOptimizationControllerBase } from "./base/routeOptimization.controller.base";

@swagger.ApiTags("routeOptimizations")
@common.Controller("routeOptimizations")
export class RouteOptimizationController extends RouteOptimizationControllerBase {
  constructor(protected readonly service: RouteOptimizationService) {
    super(service);
  }
}
