import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MachineLearningService } from "./machineLearning.service";
import { MachineLearningControllerBase } from "./base/machineLearning.controller.base";

@swagger.ApiTags("machineLearnings")
@common.Controller("machineLearnings")
export class MachineLearningController extends MachineLearningControllerBase {
  constructor(protected readonly service: MachineLearningService) {
    super(service);
  }
}
