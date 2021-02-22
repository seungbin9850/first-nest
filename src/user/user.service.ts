import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto';
import { AlreadyExistsUser } from 'src/exception';
import { passwordEncoding } from 'src/utils/crypto';
import { User } from '../entities';

@Injectable()
export class UserService {
  async createUser(req: CreateUserDTO) {
    try {
      //const password: string = await passwordEncoding(req.password);
      await User.create(req);
    } catch (e) {
      console.log(e.message);
      throw AlreadyExistsUser;
    }
  }
}
