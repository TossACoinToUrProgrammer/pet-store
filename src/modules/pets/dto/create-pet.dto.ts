import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class CreatePetDto {
  @ApiProperty()
  @IsString()
  @Length(2, 30)
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  animalTypeId?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  breedId?: number;
}
