import { Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToMany} from "typeorm";

@Entity()
export class Foto {
 	@PrimaryGeneratedColumn() 
	id:number; 

	@Column() 
	ISO:number; 

	@Column() 
	velObturacion:number; 

	@Column() 
	apertura : number ; 

	@Column() 
	fecha:Date; 

	@Column()
  albums: string;

  @Column()
  usuarios: string;
}