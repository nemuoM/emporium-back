import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ChangementStatut } from "./ChangementStatut";
import { Statut } from "./Statut";
import { Client } from "./Client";
import { DetailsMontre } from "./DetailsMontre";

@Index("idClient", ["idClient"], {})
@Index("idStatut", ["idStatut"], {})
@Entity("commande", { schema: "db_emporium" })
export class Commande {
  @PrimaryGeneratedColumn({ type: "int", name: "idCommande" })
  idCommande: number;

  @Column("date", { name: "dateCmd" })
  dateCmd: string;

  @Column("int", { name: "idStatut" })
  idStatut: number;

  @Column("int", { name: "idClient" })
  idClient: number;

  @OneToMany(
    () => ChangementStatut,
    (changementStatut) => changementStatut.idCommande2
  )
  changementStatuts: ChangementStatut[];

  @ManyToOne(() => Statut, (statut) => statut.commandes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idStatut", referencedColumnName: "idStatut" }])
  idStatut2: Statut;

  @ManyToOne(() => Client, (client) => client.commandes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idClient", referencedColumnName: "idClient" }])
  idClient2: Client;

  @OneToMany(() => DetailsMontre, (detailsMontre) => detailsMontre.idCommande2)
  detailsMontres: DetailsMontre[];
}
