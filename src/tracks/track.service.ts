import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from './models/track.entity';
import { Album } from '../albums/models/albums.entity';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

  async create(albumId: string, track: Track): Promise<Track> {
    if (track.duration <= 0) {
      throw new Error('Track duration must be greater than 0');
    }
    const album = await this.albumRepository.findOne({where:{id:Number(albumId)}});
    if (!album) {
      throw new Error('Album does not exist');
    }
    track.album = album;
    return this.trackRepository.save(track);
  }

  findOne(id: string): Promise<Track> {
    return this.trackRepository.findOne({ where: { id: Number(id) } });
  }

  findAll(): Promise<Track[]> {
    return this.trackRepository.find();
  }
}