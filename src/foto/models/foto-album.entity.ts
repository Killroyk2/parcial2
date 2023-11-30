
import { Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn,Column } from "typeorm";
import { Foto } from "../../foto/models/foto.entity";
import { Album } from "../../album/models/album.entity";

@Entity()
export class FotoAlbum {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Foto, (foto) => foto.albums)
  @JoinColumn({ name: 'fotoId' })
  foto: Foto;

  @ManyToOne(() => Album, (album) => album.fotos)
  @JoinColumn({ name: 'albumId' })
  album: Album;

}
