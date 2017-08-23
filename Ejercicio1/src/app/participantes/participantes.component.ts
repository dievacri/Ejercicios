import { Component, OnInit, Input } from '@angular/core';
import {IEquipo} from '../models/IEquipo';
import {AppService} from "../app.service";

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  equipos: IEquipo[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.appService.getEquipos().subscribe((res) => {
      this.equipos = res;
    });
  }

}
