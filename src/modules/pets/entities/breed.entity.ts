import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { AnimalType } from './animal-type.entity';
import { Pet } from './pet.entity';

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => AnimalType, (animalType) => animalType.breeds)
  @JoinColumn({ name: 'animalTypeId' })
  animalType: AnimalType;

  @Column()
  animalTypeId: string;

  @OneToMany(() => Pet, (pet) => pet.breed)
  pets: Pet[];
}
