class KontoBankowe {
  #saldo = 0; 

  constructor(poczatkoweSaldo = 0) {
    this.#saldo = poczatkoweSaldo;
  }

  deposit(amount) {
    if (amount > 0) this.#saldo += amount;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#saldo) this.#saldo -= amount;
  }

  get saldo() {
    return this.#saldo;
  }
}

const konto = new KontoBankowe(1000);
konto.deposit(500);
konto.withdraw(300);
console.log(konto.saldo);