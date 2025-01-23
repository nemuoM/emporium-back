import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Statut } from 'src/entities/Statut';
import { Repository } from 'typeorm';

@Injectable()
export class StatutService {
  constructor(
    @InjectRepository(Statut)
    private statutRepo: Repository<Statut>,
  ) {}

  findAll() {
    return this.statutRepo.find();
  }
}
