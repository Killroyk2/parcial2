
import { Entity, PrimaryGeneratedColumn,OneToMany , Column, ManyToMany } from "typeorm";
@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    fechaInicio: string;
    
    @Column({ nullable: true })
    fechaFin: string;
    @Column({ nullable: true })
    titulo: string;

    @Column({ nullable: true })
  fotos: string;

}