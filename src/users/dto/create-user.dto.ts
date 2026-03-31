import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  age: number;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  password: string;

  @IsBoolean()
  isMarried: boolean;
}
