import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChangementStatut } from "./ChangementStatut";
import { Commande } from "./Commande";

@Entity("statut", { schema: "db_emporium" })
export class Statut {
  @PrimaryGeneratedColumn({ type: "int", name: "idStatut" })
  idStatut: number;

  @Column("varchar", { name: "libelle", nullable: true, length: 25 })
  libelle: string | null;

  @OneToMany(
    () => ChangementStatut,
    (changementStatut) => changementStatut.idStatut2
  )
  changementStatuts: ChangementStatut[];

  @OneToMany(() => Commande, (commande) => commande.idStatut2)
  commandes: Commande[];
}
