import { Model } from "sequelize";
import { AutoIncrement, Column, PrimaryKey, Table } from "sequelize-typescript";
import { Organization } from "./organization.model";

@Table({ underscored: true })
export class Station extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column
  name: string;

  @Column({
    field: "organization_id"
  })
  organizationId: Organization;

  @Column
  lat: number;

  @Column
  lng: number;

  @Column
  status: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}