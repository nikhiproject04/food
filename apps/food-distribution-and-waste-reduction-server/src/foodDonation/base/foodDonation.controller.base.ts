/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FoodDonationService } from "../foodDonation.service";
import { FoodDonationCreateInput } from "./FoodDonationCreateInput";
import { FoodDonation } from "./FoodDonation";
import { Request } from "../../request/base/Request";
import { FoodDonationFindManyArgs } from "./FoodDonationFindManyArgs";
import { FoodDonationWhereUniqueInput } from "./FoodDonationWhereUniqueInput";
import { FoodDonationUpdateInput } from "./FoodDonationUpdateInput";
import { CreateFoodDonationDto } from "../CreateFoodDonationDto";

export class FoodDonationControllerBase {
  constructor(protected readonly service: FoodDonationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FoodDonation })
  async createFoodDonation(
    @common.Body() data: FoodDonationCreateInput
  ): Promise<FoodDonation> {
    return await this.service.createFoodDonation({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        foodItem: true,
        expirationDate: true,
        location: true,
        quantity: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FoodDonation] })
  @ApiNestedQuery(FoodDonationFindManyArgs)
  async foodDonations(@common.Req() request: Request): Promise<FoodDonation[]> {
    const args = plainToClass(FoodDonationFindManyArgs, request.query);
    return this.service.foodDonations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        foodItem: true,
        expirationDate: true,
        location: true,
        quantity: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FoodDonation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async foodDonation(
    @common.Param() params: FoodDonationWhereUniqueInput
  ): Promise<FoodDonation | null> {
    const result = await this.service.foodDonation({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        foodItem: true,
        expirationDate: true,
        location: true,
        quantity: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FoodDonation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFoodDonation(
    @common.Param() params: FoodDonationWhereUniqueInput,
    @common.Body() data: FoodDonationUpdateInput
  ): Promise<FoodDonation | null> {
    try {
      return await this.service.updateFoodDonation({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          foodItem: true,
          expirationDate: true,
          location: true,
          quantity: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FoodDonation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFoodDonation(
    @common.Param() params: FoodDonationWhereUniqueInput
  ): Promise<FoodDonation | null> {
    try {
      return await this.service.deleteFoodDonation({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          foodItem: true,
          expirationDate: true,
          location: true,
          quantity: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/donate")
  @swagger.ApiOkResponse({
    type: CreateFoodDonationDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateFoodDonation(
    @common.Body()
    body: CreateFoodDonationDto
  ): Promise<CreateFoodDonationDto> {
    return this.service.CreateFoodDonation(body);
  }
}
