import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('map')
export class MapEntity {
  @PrimaryColumn()
  id: string;

  @Column('text')
  data: string;

  @CreateDateColumn()
  @Exclude()
  createdAt: Date;
}
