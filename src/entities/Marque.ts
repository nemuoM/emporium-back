import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Montre } from "./Montre";

@Entity("marque", { schema: "db_emporium" })
export class Marque {
  @PrimaryGeneratedColumn({ type: "int", name: "idMarque" })
  idMarque: number;

  @Column("varchar", { name: "libelle", nullable: true, length: 30 })
  libelle: string | null;

  @OneToMany(() => Montre, (montre) => montre.idMarque2)
  montres: Montre[];
}
