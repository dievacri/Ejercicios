import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {IEquipo} from '../models/IEquipo';
import {AppService} from "../app.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit, OnDestroy {

  equipos: IEquipo[];
  subcripcion: Subscription;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.subcripcion = this.appService.getEquipos().subscribe((res) => {
      this.equipos = res;
    });
  }

  ngOnDestroy() {
    this.subcripcion.unsubscribe();
  }
}
