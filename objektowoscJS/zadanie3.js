const Osoba2 = {
  powitanie() {
    console.log(`Cześć, jestem ${this.imie}`);
  },
  sredniaOcen() {
    if (!this.oceny || this.oceny.length === 0) return 0;
    const suma = this.oceny.reduce((a, b) => a + b, 0);
    return suma / this.oceny.length;
  }
};

const Uczen = Object.create(Osoba2);
Uczen.imie = "Kasia";
Uczen.oceny = [5, 4, 3, 5];
Uczen.powitanie();
console.log(Uczen.sredniaOcen());