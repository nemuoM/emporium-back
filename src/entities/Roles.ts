import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";

@Entity("roles", { schema: "db_emporium" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "int", name: "idRole" })
  idRole: number;

  @Column("varchar", { name: "libelle", nullable: true, length: 20 })
  libelle: string | null;

  @OneToMany(() => Client, (client) => client.idRole2)
  clients: Client[];
}
