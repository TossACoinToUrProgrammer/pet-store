import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CreateAnimalTypeDto } from './dto/create-type.dto';
import { AnimalType, Breed } from './entities';
import { CreateBreedDto } from './dto/create-breed.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(AnimalType)
    private readonly animalTypeRepository: Repository<AnimalType>,
    @InjectRepository(Breed)
    private readonly breedRepository: Repository<Breed>,
  ) {}

  create(createPetDto: CreatePetDto) {
    return 'This action adds a new pet';
  }

  findAll() {
    return `This action returns all pets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
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

  breedExists(breed: string) {
    return this.breedRepository.exists({
      where: { name: breed },
    });
  }

  getBreeds() {
    return this.breedRepository.find();
  }

  addBreed(createBreedDto: CreateBreedDto) {
    const newBreed = this.breedRepository.create(createBreedDto);
    return this.breedRepository.save(newBreed);
  }
}
