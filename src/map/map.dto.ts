import { IsString } from 'class-validator';

export class MapDto {
  @IsString()
  data: string;
}
