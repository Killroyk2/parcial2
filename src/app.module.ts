import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PerformerModule } from './performer/performer.module';
import { TrackModule } from './tracks/track.module';
import { AlbumsModule } from './albums/albums.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', 
    }),
    DatabaseModule,
    AlbumsModule,
    PerformerModule,
    TrackModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
