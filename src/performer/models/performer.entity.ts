
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Album } from "../../albums/models/albums.entity";
import { PerformerAlbum } from "./performer-album.entity";

@Entity()
export class Performer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    image: string;

    @Column()
    description: string;

    @ManyToMany(() => Album, album => album.performers)
    albums: PerformerAlbum[];
    
}