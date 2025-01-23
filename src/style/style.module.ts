import { Module } from '@nestjs/common';
import { StyleService } from './style.service';
import { StyleController } from './style.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Style } from 'src/entities/Style';

@Module({
  imports: [TypeOrmModule.forFeature([Style])],
  controllers: [StyleController],
  providers: [StyleService],
})
export class StyleModule {}
