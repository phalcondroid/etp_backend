import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig } from "../config/database.config";
import { Trafficlight } from "src/trafficlight/models/trafficlight.model";
import { User } from "src/organization/models/user.model";
import { Organization } from "src/organization/models/organization.model";
import { Station } from "src/organization/models/station.model";

export const ModelProvider = {
  provide: 'SEQUELIZE',
  inject: [DatabaseConfig],
  useFactory: async (config: DatabaseConfig) => {
    console.log("=======>>>>>>>>>", {
      dialect: 'postgres',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      logging: config.loggin,
      sync: {
        alter: config.syncAlter,
        force: config.syncForce
      }
    });
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      logging: true,
      sync: {
        alter: false,
        force: false,
      },
    });
    sequelize.addModels([
      Trafficlight,
      User,
      Organization,
    ]);
    await sequelize.sync();
    return sequelize;
  },
};