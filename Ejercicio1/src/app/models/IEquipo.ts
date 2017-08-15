import { IJugador } from './IJugador';

export interface IEquipo {
  id: number;
  name: string;
  jugadores: IJugador[];
}
