
import { Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn,Column } from "typeorm";
import { Usuario } from "./usuario.entity";
import {Red} from "../../redsocial/models/red.entity"
@Entity()
export class PerformerAlbum {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.redes)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @ManyToOne(() => Red, (red) => red.usuarios)
  @JoinColumn({ name: 'redId' })
  red: Red;

}
