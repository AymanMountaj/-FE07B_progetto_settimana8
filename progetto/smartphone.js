//Prima classe
var FirstUser = /** @class */ (function () {
    function FirstUser(_carica, _numeroChiamate) {
        this.carica = _carica,
            this.numeroChiamate = _numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (importo) {
        this.carica = this.carica + importo;
    };
    FirstUser.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
// Seconda classe
var SecondUser = /** @class */ (function () {
    function SecondUser(_carica, _numeroChiamate) {
        this.carica = _carica,
            this.numeroChiamate = _numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (importo) {
        this.carica = this.carica + importo;
    };
    SecondUser.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
// Terza classe
var ThirdUser = /** @class */ (function () {
    function ThirdUser(_carica, _numeroChiamate) {
        this.carica = _carica,
            this.numeroChiamate = _numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (importo) {
        this.carica = this.carica + importo;
    };
    ThirdUser.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
// UTENTE 1
var primoUtente = new FirstUser(0, 0);
primoUtente.ricarica(50);
primoUtente.chiamata(5);
console.log('----Primo UTENTE------');
console.log('Valore della carica disponibile: ' + primoUtente.numero404());
console.log('Numero Chiamate: ' + primoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento delle chiamate:');
primoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + primoUtente.getNumeroChiamate());
// UTENTE 2
var secondoUtente = new SecondUser(20, 1);
secondoUtente.ricarica(50);
secondoUtente.chiamata(10);
console.log('----Secondo UTENTE------');
console.log('Valore della carica disponibile: ' + secondoUtente.numero404());
console.log('Numero Chiamate: ' + secondoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento delle chiamate:');
secondoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + secondoUtente.getNumeroChiamate());
//UTENTE 3
var terzoUtente = new ThirdUser(10, 5);
terzoUtente.ricarica(50);
terzoUtente.chiamata(20);
console.log('----Terzo UTENTE------');
console.log('Valore della carica disponibile: ' + terzoUtente.numero404());
console.log('Numero Chiamate: ' + terzoUtente.getNumeroChiamate());
console.log('Dopo l\'azzeramento delle chiamate:');
terzoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + terzoUtente.getNumeroChiamate());
