import { Inject, Injectable } from "@nestjs/common";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) { }

  public getUserByUsr(usr: string): Promise<User> {
    return this.userRepository.findOne({
      where: { usr }
    });
  }
}