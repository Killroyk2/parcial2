import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from '../album/models/album.entity';
import { Usuario } from '../usuarios/models/usuario.entity';
import { Foto } from '../foto/models/foto.entity';
import { Red } from '../redsocial/models/red.entity';

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
        entities: [Album, Usuario, Foto, Red],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
