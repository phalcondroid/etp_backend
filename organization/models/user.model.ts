import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ underscored: true })
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

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}