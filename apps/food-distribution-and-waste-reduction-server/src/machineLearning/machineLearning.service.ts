import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MachineLearningServiceBase } from "./base/machineLearning.service.base";

@Injectable()
export class MachineLearningService extends MachineLearningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
