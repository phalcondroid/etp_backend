import { Station } from "../station.model";

export const stationProviders = [
  {
    provide: 'STATION_REPOSITORY',
    useValue: Station,
  },
];