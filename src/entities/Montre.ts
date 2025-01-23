import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DetailsMontre } from './DetailsMontre';
import { Marque } from './Marque';
import { Genre } from './Genre';
import { Couleur } from './Couleur';
import { Style } from './Style';
import { Mouvement } from './Mouvement';
import { Matiere } from './Matiere';

@Index('idCouleur', ['idCouleur'], {})
@Index('idGenre', ['idGenre'], {})
@Index('idMarque', ['idMarque'], {})
@Index('idMatiereBracelet', ['idMatiereBracelet'], {})
@Index('idMatiereCadran', ['idMatiereCadran'], {})
@Index('idMouvement', ['idMouvement'], {})
@Index('idStyle', ['idStyle'], {})
@Entity('montre', { schema: 'db_emporium' })
export class Montre {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idMontre' })
  idMontre: number;

  @Column('varchar', { name: 'image', nullable: true, length: 250 })
  image: string | null;

  @Column('varchar', { name: 'nom', nullable: true, length: 50 })
  nom: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 800 })
  description: string | null;

  @Column('float', { name: 'prix', nullable: true, precision: 7, scale: 2 })
  prix: number | null;

  @Column('date', { name: 'dateAjout', nullable: true })
  dateAjout: string | null;

  @Column('int', { name: 'stock', nullable: true })
  stock: number | null;

  @Column('int', { name: 'idMarque' })
  idMarque: number;

  @Column('int', { name: 'idGenre' })
  idGenre: number;

  @Column('int', { name: 'idCouleur' })
  idCouleur: number;

  @Column('int', { name: 'idStyle' })
  idStyle: number;

  @Column('int', { name: 'idMouvement' })
  idMouvement: number;

  @Column('int', { name: 'idMatiereCadran' })
  idMatiereCadran: number;

  @Column('int', { name: 'idMatiereBracelet' })
  idMatiereBracelet: number;

  @OneToMany(() => DetailsMontre, (detailsMontre) => detailsMontre.idMontre2)
  detailsMontres: DetailsMontre[];

  @ManyToOne(() => Marque, (marque) => marque.montres, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'idMarque', referencedColumnName: 'idMarque' }])
  idMarque2: Marque;

  @ManyToOne(() => Genre, (genre) => genre.montres, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'idGenre', referencedColumnName: 'idGenre' }])
  idGenre2: Genre;

  @ManyToOne(() => Couleur, (couleur) => couleur.montres, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'idCouleur', referencedColumnName: 'idCouleur' }])
  idCouleur2: Couleur;

  @ManyToOne(() => Style, (style) => style.montres, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'idStyle', referencedColumnName: 'idStyle' }])
  idStyle2: Style;

  @ManyToOne(() => Mouvement, (mouvement) => mouvement.montres, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'idMouvement', referencedColumnName: 'idMouvement' }])
  idMouvement2: Mouvement;

  @ManyToOne(() => Matiere, (matiere) => matiere.montres, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'idMatiereCadran', referencedColumnName: 'idMatiere' }])
  idMatiereCadran2: Matiere;

  @ManyToOne(() => Matiere, (matiere) => matiere.montres2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'idMatiereBracelet', referencedColumnName: 'idMatiere' },
  ])
  idMatiereBracelet2: Matiere;
}
