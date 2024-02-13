import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CreateAnimalTypeDto } from './dto/create-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateBreedDto } from './dto/create-breed.dto';

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get('/types')
  getAnimalTypes() {
    return this.petsService.getAnimalTypes();
  }

  @Post('/types')
  async addAnimalType(
    @Body(new ValidationPipe()) createAnimalTypeDto: CreateAnimalTypeDto,
  ) {
    const typeExists = await this.petsService.animalTypeExists({
      name: createAnimalTypeDto.name,
    });
    if (typeExists) {
      throw new HttpException(
        'Animal type already exists',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return this.petsService.addAnimalType(createAnimalTypeDto);
  }

  @Get('/breeds')
  getBreeds() {
    return this.petsService.getBreeds();
  }

  @Post('/breeds')
  async addBreed(@Body(new ValidationPipe()) createBreedDto: CreateBreedDto) {
    const breedExists = await this.petsService.breedExists(createBreedDto.name);

    if (breedExists) {
      throw new HttpException(
        'Breed already exists',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const animalTypeExists = await this.petsService.animalTypeExists({
      id: createBreedDto.animalTypeId,
    });

    if (!animalTypeExists) {
      throw new HttpException(
        'Animal type doesnt exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return this.petsService.addBreed(createBreedDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }
}
