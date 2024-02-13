import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateAnimalTypeDto {
  @ApiProperty()
  @IsString()
  @Length(2, 30)
  name: string;
}
