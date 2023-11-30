import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import{Foto} from './models/foto.entity';
import {FotosController} from './foto.controller';
import {FotoService} from './foto.service';
@Module({
  imports: [TypeOrmModule.forFeature([Foto])],
  controllers: [FotosController],
  providers: [  FotoService]
})
export class FotoModule {}
