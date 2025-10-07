class SrodekTransportu {
  constructor(nazwa) {
    if (new.target === SrodekTransportu) {
      throw new Error("Nie można tworzyć obiektów klasy abstrakcyjnej!");
    }
    this.nazwa = nazwa;
  }

  przemieszczajSie() {
    throw new Error("Metoda abstrakcyjna musi być zaimplementowana w klasie potomnej!");
  }
}

class Samolot extends SrodekTransportu {
  przemieszczajSie() {
    console.log(`${this.nazwa} leci`);
  }
}

class Auto extends SrodekTransportu {
  przemieszczajSie() {
    console.log(`${this.nazwa} jedzie`);
  }
}

class Lodz extends SrodekTransportu {
  przemieszczajSie() {
    console.log(`${this.nazwa} płynie`);
  }
}


const samolot = new Samolot("Boeing");
samolot.przemieszczajSie();

const auto = new Auto("Skoda");
auto.przemieszczajSie();