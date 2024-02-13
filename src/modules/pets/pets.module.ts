import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { AnimalType, Breed, Pet } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Breed, AnimalType])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
