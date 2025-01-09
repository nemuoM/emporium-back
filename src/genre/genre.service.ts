import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from 'src/entities/Genre';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private genreRepo: Repository<Genre>
    ) { }
    
    findAll() {
        return this.genreRepo.find()
    }
}
