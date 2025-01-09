import { Module } from '@nestjs/common';
import { MarqueService } from './marque.service';
import { MarqueController } from './marque.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marque } from 'src/entities/Marque';

@Module({
  imports:[TypeOrmModule.forFeature([Marque])],
  controllers: [MarqueController],
  providers: [MarqueService],
})
export class MarqueModule {}
