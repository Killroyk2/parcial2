import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './models/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() usuario: Usuario) {
    return this.usuarioService.create(usuario);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
}
