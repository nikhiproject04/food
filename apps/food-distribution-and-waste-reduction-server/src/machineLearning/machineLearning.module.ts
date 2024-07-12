import { Module } from "@nestjs/common";
import { MachineLearningModuleBase } from "./base/machineLearning.module.base";
import { MachineLearningService } from "./machineLearning.service";
import { MachineLearningController } from "./machineLearning.controller";
import { MachineLearningResolver } from "./machineLearning.resolver";

@Module({
  imports: [MachineLearningModuleBase],
  controllers: [MachineLearningController],
  providers: [MachineLearningService, MachineLearningResolver],
  exports: [MachineLearningService],
})
export class MachineLearningModule {}
