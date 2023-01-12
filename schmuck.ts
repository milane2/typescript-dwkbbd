import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {


  constructor( id: number, wert: number, public bezeichnung: string) {
super(id, wert);
}
  get bezeichnung() { 
    return this.bezeichnung;
  }
  //todo
set bezeichnung(bezeichnung : string) {
this.bezeichnung = bezeichnung;
}

toString(): any{
let text : string = "\nbezeichnung" + this.bezeichnung;

}
}