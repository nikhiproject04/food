import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodDonationServiceBase } from "./base/foodDonation.service.base";

@Injectable()
export class FoodDonationService extends FoodDonationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
