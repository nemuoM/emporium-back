import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Montre } from 'src/entities/Montre';
import { Repository } from 'typeorm';

@Injectable()
export class MontreService {
  constructor(
    @InjectRepository(Montre)
    private montreRepo: Repository<Montre>,
  ) {}

  findAll() {
    return this.montreRepo.find();
  }
}
