
import { Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn,Column } from "typeorm";
import { Foto } from "./foto.entity";
import { Usuario } from "../../usuarios/models/usuario.entity";

@Entity()
export class PerformerAlbum {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Foto, (foto) => foto.usuarios)
  @JoinColumn({ name: 'fotoId' })
  foto: Foto;

  @ManyToOne(() => Usuario, (usuario) => usuario.fotos)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

}
