import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './models/album.entity';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  create(@Body() album: Album) {
    return this.albumService.create(album);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.findOne(id);
  }
  //delete

  @Delete()
  delete(@Param('id') id: string) {
    return this.albumService.remove(id);
  }

}
