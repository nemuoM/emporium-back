import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marque } from 'src/entities/Marque';
import { Repository } from 'typeorm';

@Injectable()
export class MarqueService {
  constructor(
    @InjectRepository(Marque)
    private marqueRepo: Repository<Marque>,
  ) {}

  findAll() {
    return this.marqueRepo.find();
  }
}
