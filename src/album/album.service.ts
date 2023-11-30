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
  
//delete album
  async remove(id: string): Promise<void> {
    await this.albumRepository.delete(id);
  }
  


  async addFotoToAlbum(albumId: number, fotoId: number): Promise<void> {
   /*
    const foto = await this.albumRepository.findOne({ where: { id: Number(performerId) } });
    const album = await this.albumRepository.findOne({ where: { id: albumId }, relations: ['performers'] });
  
    if (!performer || !album) {
      throw new Error('Performer or album not found');
    }
  
    if (album.performers.length >= 3) {
      throw new Error('Album cannot have more than three performers');
    }
  
    const performerAlbum = new PerformerAlbum();
    performerAlbum.performer = performer;
    performerAlbum.album = album;
  
    // Save the PerformerAlbum entity to the database
    await this.performerAlbumRepository.save(performerAlbum);
  
    const updatedAlbum = await this.albumRepository.findOne({ 
      where: { id: album.id }, 
      relations: ['performers.performer']  // Load the Performer entities
    });
  
    if (!updatedAlbum) {
      throw new Error('Failed to reload the album');
    }
    */
  }
}  
