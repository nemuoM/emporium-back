import { Controller, Get } from '@nestjs/common';
import { MarqueService } from './marque.service';
import { Marque } from 'src/entities/Marque';

@Controller('marque')
export class MarqueController {
  constructor(private readonly marqueService: MarqueService) {}

  @Get()
  findAll(): Promise<Marque[]> {
    return this.marqueService.findAll();
  }
}
