import { Gegenstand } from "./gegenstand";


export class Schmuck extends Gegenstand {


  constructor( id: number, wert: number, public bezeichnung: string) {
    super(id, wert);
}

  toString() : string{
    let text : string = "\n\nSchmuckstück" ;
    text += super.toString();
    text+= "\nBerzeichnung: " + this.bezeichnung;
    return text;
  }
}