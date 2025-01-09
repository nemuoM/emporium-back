import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Montre } from "./Montre";

@Entity("matiere", { schema: "db_emporium" })
export class Matiere {
  @PrimaryGeneratedColumn({ type: "int", name: "idMatiere" })
  idMatiere: number;

  @Column("varchar", { name: "libelle", nullable: true, length: 30 })
  libelle: string | null;

  @OneToMany(() => Montre, (montre) => montre.idMatiereCadran2)
  montres: Montre[];

  @OneToMany(() => Montre, (montre) => montre.idMatiereBracelet2)
  montres2: Montre[];
}
