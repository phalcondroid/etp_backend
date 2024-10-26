import { Organization } from "../organization.model";

export const organizationProviders = [
  {
    provide: 'ORGANIZATION_REPOSITORY',
    useValue: Organization,
  },
];