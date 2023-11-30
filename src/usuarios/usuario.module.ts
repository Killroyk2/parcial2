
import { Module } from '@nestjs/common';
import { PerformerController } from './usuario.controller';
import { PerformerService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Performer } from './models/usuario.entity';
import { Album } from '../albums/models/albums.entity';
import { PerformerAlbum } from './models/usuario.red.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Performer, Album, PerformerAlbum]), 
  ],
  controllers: [PerformerController],
  providers: [PerformerService],
})
export class PerformerModule {}
