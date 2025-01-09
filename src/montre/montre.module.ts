import { Module } from '@nestjs/common';
import { MontreService } from './montre.service';
import { MontreController } from './montre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Montre } from 'src/entities/Montre';

@Module({
  imports: [TypeOrmModule.forFeature([Montre])],
  controllers: [MontreController],
  providers: [MontreService],
})
export class MontreModule {}
