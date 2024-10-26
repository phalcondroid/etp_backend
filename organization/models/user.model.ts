import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Organization } from './organization.model';

@Table({ underscored: true, modelName: "users" })
export class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column
  name: string;

  @Column
  hash: string;

  @Column
  mutant: number;

  @Column
  status: number;

  @Column({
    field: "organization_id"
  })
  @ForeignKey(() => Organization)
  organizationId: number;

  @Column
  usr: string;

  @Column
  password: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}