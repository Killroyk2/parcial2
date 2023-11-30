import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Foto} from './models/foto.entity';

@Injectable()
export class FotoService {
  constructor(
    @InjectRepository(Foto)
    private fotoRepository: Repository<Foto>,
  ) {}

  async create(foto: Foto): Promise<Foto> {
    if (foto.ISO >= 100 && foto.ISO <= 6400 && foto.velObturacion >= 2 && foto.velObturacion <= 250 && foto.apertura >= 1 && foto.apertura <= 32) {
      throw new Error('No se puede crear foto');
    }
    return this.fotoRepository.save(foto);
  }


  findOne(id: string): Promise<Foto> {
    return this.fotoRepository.findOne({
      where: { id: Number(id) }
    });
  }

  findAll(): Promise<Foto[]> {
    return this.fotoRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.fotoRepository.delete(id);
  }
  
}