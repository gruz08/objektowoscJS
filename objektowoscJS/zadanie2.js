class Osoba {
  static przedstawSie(imie, nazwisko) {
    if (nazwisko) {
      return `Nazywam się ${imie} ${nazwisko}`;
    } else {
      return `Mam na imię ${imie}`;
    }
  }
}

console.log(Osoba.przedstawSie("Jan")); 
console.log(Osoba.przedstawSie("Jan", "Kowalski")); 