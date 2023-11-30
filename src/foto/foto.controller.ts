import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { FotoService } from './foto.service';
import { Album } from './models/foto.entity';

@Controller('fotos')
export class FotosController {
  constructor(private readonly fotosService: FotosService) {}

  @Post()
  create(@Body() album: Album) {
    return this.albumService.create(album);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.findOne(id);
  }

  @Get()
  findAll() {
    return this.albumService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.albumService.delete(id);
  }
}