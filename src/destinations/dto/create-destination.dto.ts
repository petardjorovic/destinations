import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    required: true,
    name: 'name',
    example: 'Barcelona trip',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name!: string;

  @ApiProperty({
    required: false,
    name: 'travelDate',
    example: '2026-02-22',
  })
  @IsOptional()
  @IsDateString()
  travelDate?: string;

  @ApiProperty({
    required: false,
    name: 'notes',
    example: 'Some note example',
  })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({
    required: true,
    name: 'userId',
    example: '123',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  userId!: number;
}
