import * as graphql from "@nestjs/graphql";
import { MachineLearningResolverBase } from "./base/machineLearning.resolver.base";
import { MachineLearning } from "./base/MachineLearning";
import { MachineLearningService } from "./machineLearning.service";

@graphql.Resolver(() => MachineLearning)
export class MachineLearningResolver extends MachineLearningResolverBase {
  constructor(protected readonly service: MachineLearningService) {
    super(service);
  }
}
