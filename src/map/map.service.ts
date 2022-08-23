import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapEntity } from 'src/database/entity/map.entity';
import { Repository } from 'typeorm';
import { MapDto } from './map.dto';

@Injectable()
export class MapService {
  constructor(
    @InjectRepository(MapEntity)
    private mapRepo: Repository<MapEntity>,
  ) {}

  async create(mapDto: MapDto): Promise<any> {
    const map = this.mapRepo.create({ ...mapDto });

    const result = await this.mapRepo.save(map);
    return result;
  }
  async findAll(): Promise<MapEntity[]> {
    return this.mapRepo.find();
  }
  async findOne(id: string): Promise<MapEntity> {
    return this.mapRepo.findOne({ where: { id } });
  }
}
