import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class PatchStudentDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsInt()
  @IsOptional()
  age?: number;
}
