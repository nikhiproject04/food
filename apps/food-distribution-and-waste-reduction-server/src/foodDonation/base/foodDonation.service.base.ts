/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FoodDonation as PrismaFoodDonation } from "@prisma/client";
import { CreateFoodDonationDto } from "../CreateFoodDonationDto";

export class FoodDonationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FoodDonationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.foodDonation.count(args);
  }

  async foodDonations(
    args: Prisma.FoodDonationFindManyArgs
  ): Promise<PrismaFoodDonation[]> {
    return this.prisma.foodDonation.findMany(args);
  }
  async foodDonation(
    args: Prisma.FoodDonationFindUniqueArgs
  ): Promise<PrismaFoodDonation | null> {
    return this.prisma.foodDonation.findUnique(args);
  }
  async createFoodDonation(
    args: Prisma.FoodDonationCreateArgs
  ): Promise<PrismaFoodDonation> {
    return this.prisma.foodDonation.create(args);
  }
  async updateFoodDonation(
    args: Prisma.FoodDonationUpdateArgs
  ): Promise<PrismaFoodDonation> {
    return this.prisma.foodDonation.update(args);
  }
  async deleteFoodDonation(
    args: Prisma.FoodDonationDeleteArgs
  ): Promise<PrismaFoodDonation> {
    return this.prisma.foodDonation.delete(args);
  }
  async CreateFoodDonation(
    args: CreateFoodDonationDto
  ): Promise<CreateFoodDonationDto> {
    throw new Error("Not implemented");
  }
}