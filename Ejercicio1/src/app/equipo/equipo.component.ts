import {Component, OnDestroy, OnInit} from '@angular/core';
import { AppService } from '../app.service';
import { IEquipo } from '../models/IEquipo';
import { IJugador } from '../models/IJugador';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  host: {'class':'col-md-12'},
  styleUrls: ['./equipo.component.css'],
})
export class EquipoComponent implements OnInit, OnDestroy {

  equipos: IEquipo[];
  subcripcion: Subscription;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.subcripcion = this.appService.getEquipos().subscribe((res) => {
      this.equipos = res;
    });
  }

  getJugadores(jugadores: IJugador[], equipo: IEquipo) {
    equipo.jugadores = jugadores;
    this.appService.avisa(this.equipos);
  }

  ngOnDestroy() {
    this.subcripcion.unsubscribe();
  }
}
