import { Controller, ForbiddenException, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwtAuth.guard';
import { GetTrafficLightService } from '../services/getTrafficlight.service';
import { Trafficlight } from '../models/trafficlight.model';

@Controller('organizations/trafficlight')
export class GetTrafficLightController {

  constructor(private readonly trafficLight: GetTrafficLightService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getTrafficLightList(lat: number, lng: number): Promise<Trafficlight[]> {
    return await this.trafficLight.getLights(lat, lng);
  }
}
