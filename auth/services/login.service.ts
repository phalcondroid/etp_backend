import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserNotFoundException } from '../exceptions/userNotFound.exception';
import { OrganizationManager } from 'src/organization/organization.manager';

@Injectable()
export class LoginService {

  constructor(
    private readonly organization: OrganizationManager,
    private readonly jwtService: JwtService) { }

  async doLogin(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.organization.getUserByUsr(username);
    if (!user) { throw new UserNotFoundException(); }
    const isMatch = await bcrypt.compare(user.password, pass);
    if (isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.usr };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
