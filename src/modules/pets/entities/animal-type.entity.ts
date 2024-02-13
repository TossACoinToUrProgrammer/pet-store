import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Breed } from './breed.entity';
import { Pet } from './pet.entity';

@Entity()
export class AnimalType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Breed, (breed) => breed.animalType)
  breeds: Breed[];

  @OneToMany(() => Pet, (pet) => pet.animalType)
  pets: Pet[];
}
