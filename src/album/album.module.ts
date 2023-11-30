
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Album } from './models/album.entity';
import {AlbumController} from '../album/album.controller';
import {AlbumService} from '../album/album.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Album]), 
  ],
  controllers: [AlbumController],
  providers: [  AlbumService],
})
export class AlbumModule {}
