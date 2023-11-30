import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Usuario} from './models/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ) {}
  

  async create(usuario: Usuario): Promise<Usuario> {
    if (usuario.telefono.length == 10) {
      throw new Error('El numero debe tener 10 digitos');
    }
    return this.usuarioRepository.save(usuario);
  }

  findOne(id: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({
      where: { id: Number(id) }
    });
  }
  
  

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
}  
