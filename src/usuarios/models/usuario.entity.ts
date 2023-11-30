
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    telefono: string;
    @Column()
  fotos: string;
  @Column()
  redes: string;
    
}