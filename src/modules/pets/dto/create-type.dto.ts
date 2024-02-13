import { IsString, Length } from 'class-validator';

export class CreateAnimalTypeDto {
  @IsString()
  @Length(2, 30)
  name: string;
}
