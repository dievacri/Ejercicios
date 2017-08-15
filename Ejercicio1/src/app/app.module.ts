import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/*Components*/
import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { ParticipantesComponent } from './participantes/participantes.component';

/*Services*/
import { AppService } from './app.service';


/*Pipes*/
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    JugadorComponent,
    ParticipantesComponent,
    SortByPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AppService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
