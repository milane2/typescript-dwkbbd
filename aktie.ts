import { Gegenstand } from "./gegenstand";

export class aktie extends Gegenstand{


constructor(id: number, wert: number,public unternehmen: string, public nennwert: number){
  super(id,wert)
}

  toString() : string {
    let text : string = "\n\nAktie";
    text += super.toString(); 
    text += "\nUnternehmen: " + this.unternehmen + "\nNennwert: " + this.nennwert;
    return text;
  }

}