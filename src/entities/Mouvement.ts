import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Montre } from "./Montre";

@Entity("mouvement", { schema: "db_emporium" })
export class Mouvement {
  @PrimaryGeneratedColumn({ type: "int", name: "idMouvement" })
  idMouvement: number;

  @Column("varchar", { name: "libelle", nullable: true, length: 30 })
  libelle: string | null;

  @OneToMany(() => Montre, (montre) => montre.idMouvement2)
  montres: Montre[];
}
