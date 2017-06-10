'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function(){console.log(this.imie)}
}

var krystian = {
     imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function(){console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

//klasa

function Osoba(imie, nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wyswietlInfo = function(){
        console.log('Imię: ' + this.imie + ', ' + 'Nazwisko: ' + this.nazwisko);
    }
}

var krystian = new Osoba('Krystian', 'Dziopa');

krystian.wyswietlInfo();

var lukasz = new Osoba('Łukasz', 'Badocha');

lukasz.wyswietlInfo();

