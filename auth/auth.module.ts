import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DbModule } from 'src/db/db.module';
import { jwtConstants } from './config/secrets';
import { LogoutController } from './controllers/logout.controller';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { LogoutService } from './services/logout.service';
import { OrganizationManager } from 'src/organization/organization.manager';
import { OrganizationModule } from 'src/organization/organization.module';

@Module({
  imports: [
    DbModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    OrganizationModule
  ],
  controllers: [LogoutController, LoginController],
  providers: [
    LoginService,
    LogoutService
  ],
})
export class AuthModule { }
