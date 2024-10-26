import { Module } from '@nestjs/common';
import { organizationProviders } from './models/provider/organization.provider';
import { userProviders } from './models/provider/user.provider';
import { DbModule } from 'src/db/db.module';
import { LoginController } from 'src/auth/controllers/login.controller';
import { LogoutController } from 'src/auth/controllers/logout.controller';
import { stationProviders } from './models/provider/station.provider';
import { OrganizationManager } from './organization.manager';
import { UserService } from './services/user.service';

@Module({
  imports: [
    DbModule
  ],
  controllers: [
    LoginController,
    LogoutController
  ],
  providers: [
    UserService,
    OrganizationManager,
    ...organizationProviders,
    ...userProviders,
    ...stationProviders,
  ],
  exports: [
    OrganizationManager
  ]
})
export class OrganizationModule { }
