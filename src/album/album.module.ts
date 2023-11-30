
import { Module } from '@nestjs/common';
import { PerformerController } from './album.controller';
import { PerformerService } from './album.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Performer } from './models/album.entity';
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
