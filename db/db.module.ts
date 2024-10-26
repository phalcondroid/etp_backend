import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';
import { ModelProvider } from './provider/model.provider';

@Module({
  providers: [
    DatabaseConfig,
    ModelProvider
  ],
})
export class DbModule { }
