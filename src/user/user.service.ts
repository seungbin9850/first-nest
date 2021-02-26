import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto';
import { AlreadyExistsUser } from 'src/exception';
import { User } from '../entities';

@Injectable()
export class UserService {
  async createUser(req: CreateUserDTO) {
    try {
      await User.create(req);
    } catch (e) {
      throw AlreadyExistsUser;
    }
  }
}
