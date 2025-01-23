import { Module } from '@nestjs/common';
import { StatutService } from './statut.service';
import { StatutController } from './statut.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Statut } from 'src/entities/Statut';

@Module({
  imports: [TypeOrmModule.forFeature([Statut])],
  controllers: [StatutController],
  providers: [StatutService],
})
export class StatutModule {}
