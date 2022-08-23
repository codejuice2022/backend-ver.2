import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MapEntity } from 'src/database/entity/map.entity';
import { MapDto } from './map.dto';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Post()
  create(@Body() mapDto: MapDto): Promise<any> {
    return this.mapService.create(mapDto);
  }

  @Get()
  findAll(): Promise<MapEntity[]> {
    return this.mapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MapEntity> {
    return this.mapService.findOne(decodeURIComponent(id));
  }
}
