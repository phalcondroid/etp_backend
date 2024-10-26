import { Model } from "sequelize";
import { AutoIncrement, Column, ForeignKey, PrimaryKey, Table } from "sequelize-typescript";
import { Organization } from "./organization.model";

@Table({ underscored: true, modelName: "stations" })
export class Station extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column
  name: string;

  @Column({
    field: "organization_id",
  })
  @ForeignKey(() => Organization)
  organizationId: number;

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