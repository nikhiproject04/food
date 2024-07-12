import { Module } from "@nestjs/common";
import { RouteOptimizationModuleBase } from "./base/routeOptimization.module.base";
import { RouteOptimizationService } from "./routeOptimization.service";
import { RouteOptimizationController } from "./routeOptimization.controller";
import { RouteOptimizationResolver } from "./routeOptimization.resolver";

@Module({
  imports: [RouteOptimizationModuleBase],
  controllers: [RouteOptimizationController],
  providers: [RouteOptimizationService, RouteOptimizationResolver],
  exports: [RouteOptimizationService],
})
export class RouteOptimizationModule {}
