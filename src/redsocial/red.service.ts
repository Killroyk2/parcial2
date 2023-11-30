import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Red } from './models/red.entity';
@Injectable()
export class RedService {
  constructor(
    @InjectRepository(Red)
    private redRepository: Repository<Red>
  
  ) {}

  async create(red: Red): Promise<Red> {
    if (red.slogan.length <=0 && red.slogan.length >= 20) {
      throw new Error('No se puede crear red social sin nombre');
    }
    return this.redRepository.save(red);
  }
}