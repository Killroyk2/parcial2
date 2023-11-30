import { Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToMany} from "typeorm";
import { Track } from "../../tracks/models/track.entity";
import { PerformerAlbum } from "../../performer/models/performer-album.entity";

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

 	@OneToMany(() => Track , track=>track.album) 
	tracks :Track[] ;

  @OneToMany(() => PerformerAlbum, performerAlbum => performerAlbum.album)
  performers: PerformerAlbum[];
}