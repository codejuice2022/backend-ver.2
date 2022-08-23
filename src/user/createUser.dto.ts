import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class createUserDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsDate()
  regDate: Date;
}
