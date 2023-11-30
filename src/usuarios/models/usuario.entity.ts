
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Album } from "../../albums/models/albums.entity";
import { PerformerAlbum } from "./usuario.red.entity";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    telefono: string;

    @ManyToMany(() => Album, album => album.performers)
    albums: PerformerAlbum[];
    
}