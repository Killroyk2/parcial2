import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { AlbumModule } from './album/album.module';
import {FotoModule} from './foto/foto.module';
import {RedModule} from './redsocial/red.module';
import {UsuarioModule} from './usuarios/usuario.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', 
    }),
    DatabaseModule,
    AlbumModule,
    FotoModule,
    RedModule,
    UsuarioModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
