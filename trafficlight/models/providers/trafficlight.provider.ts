import { Trafficlight } from "../trafficlight.model";

export const organizationProviders = [
  {
    provide: 'TRAFFICLIGHT_REPOSITORY',
    useValue: Trafficlight,
  },
];