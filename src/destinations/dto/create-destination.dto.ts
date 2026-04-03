import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateDestinationDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name!: string;

  @IsOptional()
  @IsDateString()
  travelDate?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  userId!: number;
}
