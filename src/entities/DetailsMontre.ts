import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Commande } from "./Commande";
import { Montre } from "./Montre";

@Index("idMontre", ["idMontre"], {})
@Entity("details_montre", { schema: "db_emporium" })
export class DetailsMontre {
  @Column("int", { primary: true, name: "idCommande" })
  idCommande: number;

  @Column("int", { primary: true, name: "idMontre" })
  idMontre: number;

  @Column("int", { name: "qte", nullable: true })
  qte: number | null;

  @ManyToOne(() => Commande, (commande) => commande.detailsMontres, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idCommande", referencedColumnName: "idCommande" }])
  idCommande2: Commande;

  @ManyToOne(() => Montre, (montre) => montre.detailsMontres, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idMontre", referencedColumnName: "idMontre" }])
  idMontre2: Montre;
}
