import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genre } from "./Genre";
import { Roles } from "./Roles";
import { Commande } from "./Commande";

@Index("idGenre", ["idGenre"], {})
@Index("idRole", ["idRole"], {})
@Entity("client", { schema: "db_emporium" })
export class Client {
  @PrimaryGeneratedColumn({ type: "int", name: "idClient" })
  idClient: number;

  @Column("varchar", { name: "nom", length: 20 })
  nom: string;

  @Column("varchar", { name: "prenom", length: 20 })
  prenom: string;

  @Column("varchar", { name: "mail", length: 80 })
  mail: string;

  @Column("varchar", { name: "mdp", nullable: true, length: 60 })
  mdp: string | null;

  @Column("int", { name: "telephone", nullable: true })
  telephone: number | null;

  @Column("varchar", { name: "adresse", nullable: true, length: 80 })
  adresse: string | null;

  @Column("char", { name: "cp", nullable: true, length: 5 })
  cp: string | null;

  @Column("varchar", { name: "ville", nullable: true, length: 20 })
  ville: string | null;

  @Column("int", { name: "idGenre" })
  idGenre: number;

  @Column("int", { name: "idRole" })
  idRole: number;

  @ManyToOne(() => Genre, (genre) => genre.clients, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idGenre", referencedColumnName: "idGenre" }])
  idGenre2: Genre;

  @ManyToOne(() => Roles, (roles) => roles.clients, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idRole", referencedColumnName: "idRole" }])
  idRole2: Roles;

  @OneToMany(() => Commande, (commande) => commande.idClient2)
  commandes: Commande[];
}
