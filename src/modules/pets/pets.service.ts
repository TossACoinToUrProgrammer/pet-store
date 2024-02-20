import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CreateAnimalTypeDto } from './dto/create-type.dto';
import { AnimalType, Breed, Pet } from './entities';
import { CreateBreedDto } from './dto/create-breed.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(AnimalType)
    private readonly animalTypeRepository: Repository<AnimalType>,
    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  create(createPetDto: CreatePetDto) {
    const newPet = this.petRepository.create(createPetDto);
    return this.petRepository.save(newPet);
  }

  findAll() {
    return this.petRepository.find();
  }

  findOne(id: number) {
    return this.petRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }

  animalTypeExists(where: FindOptionsWhere<AnimalType>) {
    return this.animalTypeRepository.exists({ where });
  }

  getAnimalTypes() {
    return this.animalTypeRepository.find();
  }

  addAnimalType(createAnimalTypeDto: CreateAnimalTypeDto) {
    const newType = this.animalTypeRepository.create(createAnimalTypeDto);
    return this.animalTypeRepository.save(newType);
  }

  breedExists(where: FindOptionsWhere<Breed>) {
    return this.breedRepository.exists({ where });
  }

  getBreeds() {
    return this.breedRepository.find();
  }

  addBreed(createBreedDto: CreateBreedDto) {
    const newBreed = this.breedRepository.create(createBreedDto);
    return this.breedRepository.save(newBreed);
  }

  update(...args: any) {

  }
}
