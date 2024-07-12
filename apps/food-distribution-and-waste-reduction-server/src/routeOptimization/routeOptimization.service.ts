import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RouteOptimizationServiceBase } from "./base/routeOptimization.service.base";

@Injectable()
export class RouteOptimizationService extends RouteOptimizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
