import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './Client';
import { Montre } from './Montre';

@Entity('genre', { schema: 'db_emporium' })
export class Genre {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idGenre' })
  idGenre: number;

  @Column('varchar', { name: 'libelle', nullable: true, length: 30 })
  libelle: string | null;

  @OneToMany(() => Client, (client) => client.idGenre2)
  clients: Client[];

  @OneToMany(() => Montre, (montre) => montre.idGenre2)
  montres: Montre[];
}
