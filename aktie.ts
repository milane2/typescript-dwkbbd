import { Gegenstand } from "./gegenstand";

export class aktie extends Gegenstand{


constructor(id: number, wert: number,public unternehmen: string, public nennwert: number){
super(id,wert)
}

get unternehmen() {
  return this.unternehmen;
}

set unternehmen(){
  this.unternehmen = this.unternehmen;
}
//todo
get nennwert(){
  return this.nennwert;
}

set nennwert(nennwert:number){
this.nennwert = nennwert;
}
}