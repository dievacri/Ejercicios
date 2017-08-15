import { Component, OnInit, Input } from '@angular/core';
import {IEquipo} from '../models/IEquipo';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  @Input() equipos: IEquipo[];

  constructor() { }

  ngOnInit() { }

}
