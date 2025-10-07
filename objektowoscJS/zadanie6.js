class Artysta {
  constructor(imie) {
    if (new.target === Artysta) {
      throw new Error("Nie można utworzyć obiektu klasy abstrakcyjnej Artysta!");
    }
    this.imie = imie;
  }

  tworzDzielo() {
    throw new Error("Metoda abstrakcyjna! Nadpisz w klasie pochodnej.");
  }

  kontempluj() {
    console.log(`${this.imie} kontempluje swoje dzielo... `);
  }
}

class Rzezbiarz extends Artysta {
  tworzDzielo() {
    console.log(`${this.imie} rzeźbi posąg z marmuru`);
  }
}

class Malarz extends Artysta {
  tworzDzielo() {
    console.log(`${this.imie} maluje obraz olejny`);
  }
}

class Pisarz extends Artysta {
  tworzDzielo() {
    console.log(`${this.imie} pisze powiesc`);
  }
}

const artysci = [new Rzezbiarz("Michał"), new Malarz("Leonardo"), new Pisarz("Adam")];
artysci.forEach(a => {
  a.tworzDzielo();
  a.kontempluj();

});
