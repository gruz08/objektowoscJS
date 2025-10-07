class Uzytkownik {
  constructor(imie, email, haslo) {
    this.imie = imie;
    this.email = email;

    if (!Uzytkownik.sprawdzHaslo(haslo)) {
      throw new Error("Hasło musi mieć min. 8 znaków, litery i cyfry!");
    }
    this.haslo = haslo;
  }

  static sprawdzHaslo(haslo) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(haslo);
  }
}

const listaUzytkownikow = [];

document.getElementById("formularz").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const imie = document.getElementById("imie").value;
  const email = document.getElementById("email").value;
  const haslo = document.getElementById("haslo").value;

  try {
    const nowy = new Uzytkownik(imie, email, haslo);
    listaUzytkownikow.push(nowy);
    console.log("Użytkownik dodany:", nowy);
  } catch (err) {
    console.error("Błąd:", err.message);
  }

  console.log("Lista użytkowników:", listaUzytkownikow);
});