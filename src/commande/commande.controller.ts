import { Controller, Get } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { Commande } from 'src/entities/Commande';

@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Get()
  findAll(): Promise<Commande[]> {
    return this.commandeService.findAll();
  }
}
