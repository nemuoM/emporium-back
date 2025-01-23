import { Controller, Get } from '@nestjs/common';
import { StatutService } from './statut.service';
import { Statut } from 'src/entities/Statut';

@Controller('statut')
export class StatutController {
  constructor(private readonly statutService: StatutService) {}

  @Get()
  findAll(): Promise<Statut[]> {
    return this.statutService.findAll();
  }
}
