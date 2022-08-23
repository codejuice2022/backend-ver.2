import { IsNumber, IsString, IsDate } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsDate()
  regDate: Date;
}
