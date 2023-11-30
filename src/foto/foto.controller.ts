import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { FotoService } from './foto.service';
import { Foto } from './models/foto.entity';

@Controller('fotos')
export class FotosController {
  constructor(private readonly fotosService: FotoService) {}

  @Post()
  create(@Body() foto: Foto) {
    return this.fotosService.create(foto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotosService.findOne(id);
  }

  @Get()
  findAll() {
    return this.fotosService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.fotosService.remove(id);
  }
}