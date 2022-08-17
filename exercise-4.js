class BankAccount {
    constructor(initial) {
        this.initial = initial;
    }

    deposit(a) {

      this.initial += a; 
        
    }

    withdraw(b) {

      this.initial -= b;

    }

    view() {
    console.log(this.initial);

    }
    
}




const bankAccount = new BankAccount(1000);


bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();