import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Album } from "../../albums/models/albums.entity";

@Entity()
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    duration: number;

    @ManyToOne(() => Album, album => album.tracks)
    album: Album;
}