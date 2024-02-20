import {
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { AnimalType } from './animal-type.entity';
import { Breed } from './breed.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: false })
  price: number;

  @ManyToOne(() => AnimalType, (animalType) => animalType.pets)
  @JoinColumn({ name: 'animalTypeId' })
  animalType: AnimalType;

  @Column({ nullable: true })
  animalTypeId?: number;

  @ManyToOne(() => Breed, (breed) => breed.pets, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'breedId' })
  breed: Breed | null;

  @Column({ nullable: true })
  breedId?: number;
}
