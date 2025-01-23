import { Controller, Get } from '@nestjs/common';
import { StyleService } from './style.service';
import { Style } from 'src/entities/Style';

@Controller('style')
export class StyleController {
  constructor(private readonly styleService: StyleService) {}

  @Get()
  findAll(): Promise<Style[]> {
    return this.styleService.findAll();
  }
}
