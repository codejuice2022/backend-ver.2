import { IsNumber, IsString, IsDate } from 'class-validator';

export class GameDto {
  @IsNumber()
  score: number;

  @IsString()
  center: string;

  @IsString()
  phone: string;

  @IsString()
  userName: string;
}
