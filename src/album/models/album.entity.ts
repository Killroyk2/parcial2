
import { Entity, PrimaryGeneratedColumn,OneToMany , Column, ManyToMany } from "typeorm";
@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaInicio: Date;
    
    @Column()
    fechaFin: Date;

    @Column()
    titulo: string;

}