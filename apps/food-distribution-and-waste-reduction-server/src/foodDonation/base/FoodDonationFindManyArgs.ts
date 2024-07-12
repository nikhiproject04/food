/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FoodDonationWhereInput } from "./FoodDonationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FoodDonationOrderByInput } from "./FoodDonationOrderByInput";

@ArgsType()
class FoodDonationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FoodDonationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FoodDonationWhereInput, { nullable: true })
  @Type(() => FoodDonationWhereInput)
  where?: FoodDonationWhereInput;

  @ApiProperty({
    required: false,
    type: [FoodDonationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FoodDonationOrderByInput], { nullable: true })
  @Type(() => FoodDonationOrderByInput)
  orderBy?: Array<FoodDonationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FoodDonationFindManyArgs as FoodDonationFindManyArgs };
