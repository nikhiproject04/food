import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("AddInventoryItemDtoObject")
class AddInventoryItemDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    foodItem!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    quantityInStock!: number;

    @Field(() => Date)
    @Type(() => Date)
    expirationDate!: Date;
}

export { AddInventoryItemDto as AddInventoryItemDto };