import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserEntity } from 'src/database/entity/user.entity';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: UserDto): Promise<any> {
    return this.userService.create(createUserDto);
  }

  @Get('aaa')
  find(): string {
    return 'this.userService.findAll();';
  }

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findOne(id);
  }
}
