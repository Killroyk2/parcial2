import { Module } from '@nestjs/common';
import { TrackController } from './red.controller';
import { TrackService } from './red.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from './models/red.entity';
import { Album } from '../albums/models/albums.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Track, Album])],
  controllers: [TrackController],
  providers: [  TrackService]
})
export class TrackModule {}
