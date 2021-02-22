import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;
}
