
import { Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn,Column } from "typeorm";
import { Performer } from "../../performer/models/performer.entity";
import { Album } from "../../albums/models/albums.entity";

@Entity()
export class PerformerAlbum {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Performer, (performer) => performer.albums)
  @JoinColumn({ name: 'performerId' })
  performer: Performer;

  @ManyToOne(() => Album, (album) => album.performers)
  @JoinColumn({ name: 'albumId' })
  album: Album;

}
