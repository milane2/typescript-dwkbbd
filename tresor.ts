import { Gegenstand } from "./gegenstand";
import { GegenstandNichtGefundenError } from "./gegenstandNichtGefundenError";

export class Tresor {
  
  /**
   * Typ ArrayList (vgl. Java) nicht vorhanden --> Array verwenden!
   */
   private gegenstaende: Gegenstand[];

   constructor() {
     this.gegenstaende = new Array();
   }
 
   // Gegenstand hinzufügen (addGegenstand)
addGegenstand(gegenstand : Gegenstand) {
  this.gegenstaende.push(gegenstand);
   /**
    * Da gegenstaende ein Array ist und keine ArrayList,
    * wird zum Hinzufügen anstelle der Methode add()
    * die Methode push() benötigt!
   


   //Gegenstand finden (getGegenstand) 
*/
}
getGegenstand( id : number) : Gegenstand {
for ( let i : number = 0 ; i <= this.gegenstaende.length; i++){
    if (id === this.gegenstaende[i].id){
      return this.gegenstaende[i];
      } else {
      throw new GegenstandNichtGefundenError(id);
    }
  }
}

      /** 
       * V2:
       * getGegenstand_v2( id :number) : Gegenstand{
        * for(let g :of ){
          * if(id === g.id){
            * return g;
          *}else{
          * throw new GegenstandNichtGefundenError(id)
          *}
        *}
      *} 
    */
      /** 
        V3:
       */


 getGegenstand_v3(id :number) : Gegenstand{
  let gefundenerGegenstand: Gegenstand = this.gegenstaende.find(g => id = g.id);
   if(gefundenerGegenstand !== undefined){
   return gefundenerGegenstand;
   } else{
      throw new GegenstandNichtGefundenError(id);
   }
 }
  /**_______________________________________________________________________________ */    
   /**
    * Drei verschiedene Varianten des Durchsuchens des Arrays möglich:
    * a) forEach-Schleife --> in typescript 'for ... of'
    *    --> vgl. https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#forof-statements
    * b) for-Zählerschleife mit Iteration
    *    --> vergleichbar mit der Umsetzung in Java
	* c) Methode find() auf das Array anwenden [DIE MODERNSTE VARIANTE!]
    *    --> vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    */

   //Gegenstand aus Tresor nehmen (removeGegenstand)
  removeGegenstand(gegenstand : Gegenstand){
    let gegenstandToRemove : Gegenstand = this.getGegenstand_v3(gegenstand.id);
    this.gegenstaende = this.gegenstaende.filter(g => g !== gegenstandToRemove);
}

   /**
    * 1. sinnvollerweise zunächst prüfen, ob der Gegenstand im Tresor ist
	  * (vgl. gewählte Variante für "Gegenstand finden", also für 'getGegenstand')
    * 2. wenn nicht gefunden, Fehler werfen (GegenstandNichtGefundenError),
    * ebenfalls wie in 'getGegenstand'
    * 3. Methode filter() auf das Array anwenden, um dieses neu aufzubauen
    * vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
    */
  /**_________________________________________________________________________________ */
   berechneGesamtwert(): number {
     let summeWerte: number = 0;
     this.gegenstaende.forEach(g => summeWerte += g.wert);
     return summeWerte;
   }

   //todo toString
   toString(): string {
     let text: string = "LISTE DER GEGENSTÄNDE";
     this.gegenstaende.forEach(g => text += "\n" + g.toString());
     return text;
   }

}