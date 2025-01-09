import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Montre } from "./Montre";

@Entity("style", { schema: "db_emporium" })
export class Style {
  @PrimaryGeneratedColumn({ type: "int", name: "idStyle" })
  idStyle: number;

  @Column("varchar", { name: "libelle", nullable: true, length: 30 })
  libelle: string | null;

  @OneToMany(() => Montre, (montre) => montre.idStyle2)
  montres: Montre[];
}
