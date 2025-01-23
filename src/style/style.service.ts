import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Style } from 'src/entities/Style';
import { Repository } from 'typeorm';

@Injectable()
export class StyleService {
  constructor(
    @InjectRepository(Style)
    private styleRepo: Repository<Style>,
  ) {}

  findAll() {
    return this.styleRepo.find();
  }
}
