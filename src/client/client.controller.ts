import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from 'src/entities/Client';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }
  
  @Get()
  findAll(): Promise<Client[]>{
    return this.clientService.findAll()
  }
}
