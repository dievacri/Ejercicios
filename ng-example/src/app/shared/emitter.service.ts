import {Injectable, EventEmitter} from "@angular/core";

@Injectable()

export class EmitterService {
  // Event Store
  private _emitter: { [ID: string]: EventEmitter<any> } = {};

  // Set new event in store as key

  get(ID: string): EventEmitter<any> {
    if(!this._emitter[ID])
      this._emitter[ID] = new EventEmitter<any>();
    return this._emitter[ID];
  }
}

@Injectable()
export class EmitterServiceMock {
  emiterInstance: EventEmitter<any> = new EventEmitter<any>();
  get(): EventEmitter<any> {
    return this.emiterInstance;
  }
}
