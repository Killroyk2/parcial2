import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from '../tracks/models/track.entity';
import { Performer } from '../performer/models/performer.entity';

import {Album } from './models/foto.entity';
import { AlbumController } from './foto.controller';
import { AlbumService } from './foto.service';
@Module({
  imports: [TypeOrmModule.forFeature([Album, Performer, Track])],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class FotoModule {}
