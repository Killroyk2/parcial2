import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RedService } from './red.service';
import { Red } from './models/red.entity';

@Controller('redsocial')
export class RedController {
  constructor(private readonly redService: RedService) {}

//post para crear una red social
  @Post()
  create(@Body() red: Red) {
    return this.redService.create(red);
  }
  
}
