import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Commande } from "./Commande";
import { Statut } from "./Statut";

@Index("idStatut", ["idStatut"], {})
@Entity("changement_statut", { schema: "db_emporium" })
export class ChangementStatut {
  @Column("int", { primary: true, name: "idCommande" })
  idCommande: number;

  @Column("int", { primary: true, name: "idStatut" })
  idStatut: number;

  @Column("date", { name: "dateChangement" })
  dateChangement: string;

  @ManyToOne(() => Commande, (commande) => commande.changementStatuts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idCommande", referencedColumnName: "idCommande" }])
  idCommande2: Commande;

  @ManyToOne(() => Statut, (statut) => statut.changementStatuts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idStatut", referencedColumnName: "idStatut" }])
  idStatut2: Statut;
}
