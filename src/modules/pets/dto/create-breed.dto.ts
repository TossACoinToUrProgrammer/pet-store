import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class CreateBreedDto {
  @ApiProperty()
  @IsString()
  @Length(2, 30)
  name: string;

  @ApiProperty()
  @IsNumber()
  animalTypeId: number;
}
