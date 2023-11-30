import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './models/album.entity';

@Injectable()
export class AlbumService {
  constructor(
   
    @InjectRepository(Album) 
    private albumRepository: Repository<Album>,

  ) {}
  

  async create(album: Album): Promise<Album> {
    if (album.titulo.length <=0) {
      throw new Error('No se puede album titulo vacio');
    }
    return this.albumRepository.save(album);
  }

  findOne(id: string): Promise<Album> {
    return this.albumRepository.findOne({
      where: { id: Number(id) },
      relations: ['albums'],
    });
  }
  

  async remove(id: string): Promise<void> {
    await this.albumRepository.delete(id);
  }
}  
