import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Album} from './models/foto.entity';

@Injectable()
export class FotoService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

  async create(album: Album): Promise<Album> {
    if (!album.name || !album.description) {
      throw new Error('Album name and description are empty');
    }
    return this.albumRepository.save(album);
  }

  async findOne(id: string): Promise<Album> {
    return this.albumRepository.findOne({
      where: { id: Number(id) },
      relations: ['tracks', 'performers.performer'],
    });
  }
  
  
  

  findAll(): Promise<Album[]> {
    return this.albumRepository.find();
  }

  async delete(id: string): Promise<void> {
    const album = await this.albumRepository.findOne({ where: { id: Number(id) }, relations: ['tracks'] });
    if (album.tracks.length > 0) {
      throw new Error('Cant delete album with tracks');
    }
    await this.albumRepository.delete(Number(id));
  }
  
}