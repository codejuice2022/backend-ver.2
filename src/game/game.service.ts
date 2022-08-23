import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameEntity } from 'src/database/entity/game.entity';
import { Repository } from 'typeorm';
import { GameDto } from './game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepo: Repository<GameEntity>,
  ) {}

  async create(gameDto: GameDto): Promise<any> {
    const game = this.gameRepo.create({ ...gameDto });

    const result = await this.gameRepo.save(game);
    return result;
  }
  async findAll(): Promise<GameEntity[]> {
    return this.gameRepo.find();
  }
  async findOne(id: number): Promise<GameEntity> {
    return this.gameRepo.findOne({ where: { id } });
  }
}
