import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Montre } from "./Montre";

@Entity("couleur", { schema: "db_emporium" })
export class Couleur {
  @PrimaryGeneratedColumn({ type: "int", name: "idCouleur" })
  idCouleur: number;

  @Column("varchar", { name: "libelle", nullable: true, length: 30 })
  libelle: string | null;

  @OneToMany(() => Montre, (montre) => montre.idCouleur2)
  montres: Montre[];
}
