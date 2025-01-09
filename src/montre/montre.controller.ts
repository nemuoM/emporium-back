import { Controller, Get } from '@nestjs/common';
import { MontreService } from './montre.service';
import { Montre } from 'src/entities/Montre';

@Controller('montre')
export class MontreController {
  constructor(private readonly montreService: MontreService) { }
  
  @Get()
  findAll(): Promise<Montre[]>{
    return this.montreService.findAll()
  }
}
