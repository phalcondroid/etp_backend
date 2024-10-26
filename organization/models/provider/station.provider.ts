import { Station } from "../station.model";

export const organizationProviders = [
  {
    provide: 'STATION_REPOSITORY',
    useValue: Station,
  },
];