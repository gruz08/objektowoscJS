class Psowate {
  constructor(imie) {
    this.imie = imie;
  }

  dajGlos() {
    console.log(`${this.imie}: *nieokreślony dźwięk psowatych*`);
  }
}

class Szczeniak extends Psowate {
  dajGlos() {
    console.log(`${this.imie}: Kłii (szczeniak)`);
  }
}

class Pies extends Psowate {
  dajGlos() {
    console.log(`${this.imie}: Hau! Hau!`);
  }
}

class Wilk extends Psowate {
  dajGlos() {
    console.log(`${this.imie}: Auu (wilk)`);
  }
}

const zwierzeta = [
  new Szczeniak("Burek"),
  new Pies("Reksio"),
  new Wilk("Ropert")
];

zwierzeta.forEach(z => z.dajGlos());

console.log(Object.getPrototypeOf(Szczeniak.prototype) === Psowate.prototype);
