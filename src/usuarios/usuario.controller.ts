import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PerformerService } from './usuario.service';
import { Performer } from './models/usuario.entity';

@Controller('performers')
export class PerformerController {
  constructor(private readonly performerService: PerformerService) {}

  @Post()
  create(@Body() performer: Performer) {
    return this.performerService.create(performer);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performerService.findOne(id);
  }

  @Get()
  findAll() {
    return this.performerService.findAll();
  }

  @Post(':albumId/add-performer/:performerId')
  async addPerformerToAlbum(
    @Param('albumId') albumId: number,
    @Param('performerId') performerId: number,
  ) {
    try {
      await this.performerService.addPerformerToAlbum(albumId, performerId);
      return { message: 'Performer added to album successfully' };
    } catch (error) {
      return { error: error.message };
    }
  }
}
