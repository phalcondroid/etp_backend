import { Module } from '@nestjs/common';
import { trafficlightProviders } from './models/providers/trafficlight.provider';

@Module({
  providers: [
    ...trafficlightProviders
  ]
})
export class TrafficlightModule { }
