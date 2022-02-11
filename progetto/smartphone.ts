interface Smartphone {
    //Propietà
    carica: number;
    numeroChiamate: number;
    //Metodi
    ricarica(importo: number):void;
    chiamata(minuti: number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():void;
}


//Prima classe
class FirstUser implements Smartphone {
    //Modificatori di accesso sulle proprietà
    carica: number;
    numeroChiamate: number;
    constructor(_carica:number, _numeroChiamate:number){
        this.carica = _carica,
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(importo: number): void {
        this.carica = this.carica + importo;
    }

    chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}
// Seconda classe
class SecondUser implements Smartphone {
    //Modificatori di accesso sulle proprietà
    carica: number;
    numeroChiamate: number;
    constructor(_carica:number, _numeroChiamate:number){
        this.carica = _carica,
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(importo: number): void {
        this.carica = this.carica + importo;
    }

    chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}
// Terza classe
class ThirdUser implements Smartphone {
    //Modificatori di accesso sulle proprietà
    carica: number;
    numeroChiamate: number;
    constructor(_carica:number, _numeroChiamate:number){
        this.carica = _carica,
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(importo: number): void {
        this.carica = this.carica + importo;
    }

    chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}
// UTENTE 1
const primoUtente = new FirstUser(0, 0);
primoUtente.ricarica(50);
primoUtente.chiamata(5);
console.log('----Primo UTENTE------');
console.log('Valore della carica disponibile: ' + primoUtente.numero404());
console.log('Numero Chiamate: ' + primoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento delle chiamate:');
primoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + primoUtente.getNumeroChiamate());
// UTENTE 2
const secondoUtente = new SecondUser(20, 1);
secondoUtente.ricarica(50);
secondoUtente.chiamata(10);
console.log('----Secondo UTENTE------');
console.log('Valore della carica disponibile: ' + secondoUtente.numero404());
console.log('Numero Chiamate: ' + secondoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento delle chiamate:');
secondoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + secondoUtente.getNumeroChiamate());

//UTENTE 3

const terzoUtente = new ThirdUser(10, 5);
terzoUtente.ricarica(50);
terzoUtente.chiamata(20);
console.log('----Terzo UTENTE------');
console.log('Valore della carica disponibile: ' + terzoUtente.numero404());
console.log('Numero Chiamate: ' + terzoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento delle chiamate:');
terzoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + terzoUtente.getNumeroChiamate());
