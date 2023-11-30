import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from '../albums/models/albums.entity';
import { Performer } from '../performer/models/performer.entity';
import { Track } from '../tracks/models/track.entity';
import { PerformerAlbum } from '../performer/models/performer-album.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Album, Performer, Track, PerformerAlbum],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
