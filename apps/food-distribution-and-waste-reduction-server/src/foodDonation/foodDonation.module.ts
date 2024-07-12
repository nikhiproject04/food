import { Module } from "@nestjs/common";
import { FoodDonationModuleBase } from "./base/foodDonation.module.base";
import { FoodDonationService } from "./foodDonation.service";
import { FoodDonationController } from "./foodDonation.controller";
import { FoodDonationResolver } from "./foodDonation.resolver";

@Module({
  imports: [FoodDonationModuleBase],
  controllers: [FoodDonationController],
  providers: [FoodDonationService, FoodDonationResolver],
  exports: [FoodDonationService],
})
export class FoodDonationModule {}
