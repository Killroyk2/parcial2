import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Album } from "../../albums/models/albums.entity";

@Entity()
export class Red {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    slogan: string;

    @ManyToOne(() => Album, album => album.tracks)
    album: Album;
}