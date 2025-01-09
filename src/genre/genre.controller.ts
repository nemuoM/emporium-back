import { Controller, Get } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from 'src/entities/Genre';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) { }
  
  @Get()
  findAll(): Promise<Genre[]>{
    return this.genreService.findAll()
  }
}
