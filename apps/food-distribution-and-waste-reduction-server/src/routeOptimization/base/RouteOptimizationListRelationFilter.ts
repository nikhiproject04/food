/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RouteOptimizationWhereInput } from "./RouteOptimizationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RouteOptimizationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RouteOptimizationWhereInput,
  })
  @ValidateNested()
  @Type(() => RouteOptimizationWhereInput)
  @IsOptional()
  @Field(() => RouteOptimizationWhereInput, {
    nullable: true,
  })
  every?: RouteOptimizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => RouteOptimizationWhereInput,
  })
  @ValidateNested()
  @Type(() => RouteOptimizationWhereInput)
  @IsOptional()
  @Field(() => RouteOptimizationWhereInput, {
    nullable: true,
  })
  some?: RouteOptimizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => RouteOptimizationWhereInput,
  })
  @ValidateNested()
  @Type(() => RouteOptimizationWhereInput)
  @IsOptional()
  @Field(() => RouteOptimizationWhereInput, {
    nullable: true,
  })
  none?: RouteOptimizationWhereInput;
}
export { RouteOptimizationListRelationFilter as RouteOptimizationListRelationFilter };