import { Inject, Injectable } from "@nestjs/common";
import { Trafficlight } from "../models/trafficlight.model";
import { Op, Sequelize } from 'sequelize';

@Injectable()
export class GetTrafficLightService {
  constructor(
    @Inject('TRAFFICLIGHT_REPOSITORY')
    private lightRepository: typeof Trafficlight,
  ) { }

  public async getLights(lat: number, lng: number): Promise<Trafficlight[]> {
    return await this.lightRepository.findAll({
      where: Sequelize.where(
        Sequelize.fn(
          'ST_DWithin',
          Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', lng, lat), 4326),
          Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', Sequelize.col('longitude'), Sequelize.col('latitude')), 4326),
          200 // distance in meters
        ),
        true
      ),
    });
  }
}