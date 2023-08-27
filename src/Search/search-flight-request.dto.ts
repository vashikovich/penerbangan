import { IsString, IsInt, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class SearchFlightRequestDto {
  @IsString()
  o: string;

  @IsString()
  d: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  dt: Date;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  a: number;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  c: number;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  i: number;
}
