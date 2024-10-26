import { Trafficlight } from "../trafficlight.model";

export const trafficlightProviders = [
  {
    provide: 'TRAFFICLIGHT_REPOSITORY',
    useValue: Trafficlight,
  },
];