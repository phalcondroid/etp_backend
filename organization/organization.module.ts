import { Module } from '@nestjs/common';
import { organizationProviders } from './models/provider/organizations.provider';
import { userProviders } from './models/provider/user.provider';
import { DbModule } from 'src/db/db.module';
import { LoginController } from 'src/auth/controllers/login.controller';
import { LogoutController } from 'src/auth/controllers/logout.controller';

@Module({
  imports: [
    DbModule
  ],
  controllers: [
    LoginController,
    LogoutController
  ],
  providers: [
    ...organizationProviders,
    ...userProviders
  ]
})
export class OrganizationModule { }
