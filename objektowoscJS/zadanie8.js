class KalkulatorProsty {
  static dodaj(a, b) {
    return a + b;
  }

  static odejmij(a, b) {
    return a - b;
  }

  static pomnoz(a, b) {
    return a * b;
  }

  static podziel(a, b) {
    if (b === 0) return "Nie można dzielić przez zero!";
    return a / b;
  }
}

console.log(KalkulatorProsty.dodaj(5, 3));
console.log(KalkulatorProsty.odejmij(10, 4));
console.log(KalkulatorProsty.pomnoz(2, 6));
console.log(KalkulatorProsty.podziel(9, 3));
console.log(KalkulatorProsty.podziel(9, 0));
