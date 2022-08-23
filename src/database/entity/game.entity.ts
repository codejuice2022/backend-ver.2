import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('game')
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  center: string;

  @Column()
  score: number;

  @Column()
  phone: string;

  @Column()
  userName: string;

  @CreateDateColumn()
  @Exclude()
  createdAt: Date;
}
