import * as graphql from "@nestjs/graphql";
import { FoodDonationResolverBase } from "./base/foodDonation.resolver.base";
import { FoodDonation } from "./base/FoodDonation";
import { FoodDonationService } from "./foodDonation.service";

@graphql.Resolver(() => FoodDonation)
export class FoodDonationResolver extends FoodDonationResolverBase {
  constructor(protected readonly service: FoodDonationService) {
    super(service);
  }
}
