
import { Entity, PrimaryGeneratedColumn,OneToMany , Column, ManyToMany } from "typeorm";
@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaInicio: string;
    
    @Column()
    fechaFin: string;

    @Column()
    titulo: string;

    @Column()
  fotos: string;

}