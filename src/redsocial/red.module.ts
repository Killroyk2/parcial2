import { Module } from '@nestjs/common';
import { RedController } from './red.controller';
import { RedService } from './red.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Red } from './models/red.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Red])],
  controllers: [RedController],
  providers: [  RedService]
})
export class RedModule {}
