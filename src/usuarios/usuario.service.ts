import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Performer } from './models/usuario.entity';
import { Album } from '../albums/models/albums.entity';
import { PerformerAlbum } from './models/usuario.red.entity';

@Injectable()
export class PerformerService {
  constructor(
    @InjectRepository(Performer)
    private performerRepository: Repository<Performer>,
    @InjectRepository(Album) 
    private albumRepository: Repository<Album>,
    @InjectRepository(PerformerAlbum) 
    private performerAlbumRepository: Repository<PerformerAlbum>,  // Inject the PerformerAlbum repository
  ) {}
  

  async create(performer: Performer): Promise<Performer> {
    if (performer.description.length > 100) {
      throw new Error('Description exceeds 100 max characters');
    }
    return this.performerRepository.save(performer);
  }

  findOne(id: string): Promise<Performer> {
    return this.performerRepository.findOne({
      where: { id: Number(id) },
      relations: ['albums', 'albums.album', 'albums.album.tracks'],
    });
  }
  
  

  findAll(): Promise<Performer[]> {
    return this.performerRepository.find();
  }
  async addPerformerToAlbum(albumId: number, performerId: number): Promise<void> {
    const performer = await this.performerRepository.findOne({ where: { id: Number(performerId) } });
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
  }
}  
