import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameEntity } from 'src/database/entity/game.entity';
import { GameDto } from './game.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() gameDto: GameDto): Promise<any> {
    return this.gameService.create(gameDto);
  }

  @Get()
  findAll(): Promise<GameEntity[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<GameEntity> {
    return this.gameService.findOne(id);
  }
}
