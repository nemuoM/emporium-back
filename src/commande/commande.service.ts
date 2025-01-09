import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Commande } from 'src/entities/Commande';
import { Repository } from 'typeorm';

@Injectable()
export class CommandeService {
    constructor(
        @InjectRepository(Commande)
        private cmdRepo: Repository<Commande>
    ) { }
    
    findAll() {
        return this.cmdRepo.find()
    }
}
