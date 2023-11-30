
import { Module } from '@nestjs/common';
import { PerformerController } from './performer.controller';
import { PerformerService } from './performer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Performer } from './models/performer.entity';
import { Album } from '../albums/models/albums.entity';
import { PerformerAlbum } from './models/performer-album.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Performer, Album, PerformerAlbum]), 
  ],
  controllers: [PerformerController],
  providers: [PerformerService],
})
export class PerformerModule {}
