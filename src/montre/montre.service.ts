import { HttpCode, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Couleur } from 'src/entities/Couleur';
import { Genre } from 'src/entities/Genre';
import { Marque } from 'src/entities/Marque';
import { Matiere } from 'src/entities/Matiere';
import { Montre } from 'src/entities/Montre';
import { Mouvement } from 'src/entities/Mouvement';
import { Style } from 'src/entities/Style';
import { Repository } from 'typeorm';

@Injectable()
export class MontreService {
  constructor(
    @InjectRepository(Montre)
    private montreRepo: Repository<Montre>,
  ) {}

  async findAll() {
    const montres = await this.montreRepo.find({
      relations: [
        'idMarque2', // Marque
        'idGenre2', // Genre
        'idCouleur2', // Couleur
        'idStyle2', // Style
        'idMouvement2', // Mouvement
        'idMatiereCadran2', // Matière du cadran
        'idMatiereBracelet2', // Matière du bracelet
      ],
    });

    if (!montres) {
      throw new Error('Watch not found.');
    }

    return montres.map((montre) => ({
      id: montre.idMontre,
      image: montre.image,
      name: montre.nom,
      price: montre.prix,
      stock: montre.stock,
      brand: montre.idMarque ? montre.idMarque2.libelle : null,
    }));
  }
}
