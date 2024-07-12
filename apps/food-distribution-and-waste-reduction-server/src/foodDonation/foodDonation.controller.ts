import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FoodDonationService } from "./foodDonation.service";
import { FoodDonationControllerBase } from "./base/foodDonation.controller.base";

@swagger.ApiTags("foodDonations")
@common.Controller("foodDonations")
export class FoodDonationController extends FoodDonationControllerBase {
  constructor(protected readonly service: FoodDonationService) {
    super(service);
  }
}
