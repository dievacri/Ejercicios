import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { IJugador } from '../models/IJugador';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  @Input() equipo: number;
  jugadores: IJugador[];
  jugador: IJugador = {
    id: null,
    player_name: '',
    id_equipo: null
  };
  edit: boolean = false;
  message: string;
  jugadorModal: NgbModalRef;
  @Output() result: EventEmitter<IJugador[]> = new EventEmitter<IJugador[]>();

  constructor(private appService: AppService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAll(this.equipo);
  }

  getAll(id_equipo: number) {
    this.appService.getJugadores(id_equipo).subscribe((res) => {
      this.jugadores = res;
      this.result.emit(res);
    });
  }

  open(jugadorModal: any, edit: boolean, jugador: IJugador) {
    this.edit = edit;
    if (edit) {
      this.jugador = jugador;
    }else{
      this.jugador.id_equipo = this.equipo;
    }

    this.jugadorModal = this.modalService.open(jugadorModal);
  }

  close() {
    this.jugador = {
      id: null,
      player_name: '',
      id_equipo: null
    };
    this.message = '';
    this.jugadorModal.close();
  }

  post(jugador: IJugador) {
    if (this.edit) {
      this.appService.updateJugadores(jugador).subscribe((res) => {
        this.close();
        this.getAll(this.equipo);
      });
    } else {
      if(this.jugadores.length < 11) {
        this.appService.postJugadores(jugador).subscribe((res) => {
          this.close();
          this.getAll(this.equipo);
        });
      }else{
        this.message = 'Ya no se puede registrar mas jugadores, el equipo ya se encuentra lleno.';
      }
    }
  }

  delete(id: number) {
    this.appService.deleteJugadores(id).subscribe((res) => {
      this.getAll(this.equipo);
    });
  }
}
