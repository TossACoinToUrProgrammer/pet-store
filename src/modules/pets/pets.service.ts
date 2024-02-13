import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CreateAnimalTypeDto } from './dto/create-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalType } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(AnimalType)
    private readonly animalTypeRepository: Repository<AnimalType>,
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

  addBreed() {}

  async animalTypeExists(animalType: string) {
    return await this.animalTypeRepository.exists({
      where: { name: animalType },
    });
  }

  async getAnimalTypes() {
    return this.animalTypeRepository.find();
  }

  async addAnimalType(createAnimalTypeDto: CreateAnimalTypeDto) {
    const newType = this.animalTypeRepository.create(createAnimalTypeDto);
    return await this.animalTypeRepository.save(newType);
  }
}
