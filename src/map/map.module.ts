import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapEntity } from 'src/database/entity/map.entity';
import { MapController } from './map.controller';
import { MapService } from './map.service';

@Module({
  imports: [TypeOrmModule.forFeature([MapEntity])],
  providers: [MapService],
  controllers: [MapController],
  exports: [MapService],
})
export class MapModule {}
