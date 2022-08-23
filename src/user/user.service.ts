import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entity/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async create(userDto: UserDto): Promise<any> {
    const isExist = await this.userRepo.findOne({
      where: { phone: userDto.phone },
    });
    if (isExist) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`이미 등록된 사용자입니다.`],
        error: 'Forbidden',
      });
    }
    const user = this.userRepo.create({ ...userDto });
    console.log(user);

    const result = await this.userRepo.save(user);
    return result;
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }
  async findOne(id: number): Promise<UserEntity> {
    return this.userRepo.findOne({ where: { id } });
  }
}
