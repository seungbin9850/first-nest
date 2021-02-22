import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createNewUser(@Body() req: CreateUserDTO) {
    await this.userService.createUser(req);
  }
}
