import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig } from "../config/database.config";

export const ModelProvider = {
  provide: 'SEQUELIZE',
  inject: [DatabaseConfig],
  useFactory: async (config: DatabaseConfig) => {
    console.log(config);
    const sequelize = new Sequelize({
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
    sequelize.addModels([

    ]);
    await sequelize.sync();
    return sequelize;
  },
};