import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TrackService } from './red.service';
import { Track } from './models/red.entity';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post(':albumId')
  create(@Param('albumId') albumId: string, @Body() track: Track) {
    return this.trackService.create(albumId, track);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackService.findOne(id);
  }

  @Get()
  findAll() {
    return this.trackService.findAll();
  }
}
