"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        else {
            this._balance += amount;
        }
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0) {
            throw new Error("Invalid Amount");
        }
        else
            [
                this._balance = amount
            ];
    }
}
const account = new Account(1, "Mosh", 100);
console.log(account.balance);
//# sourceMappingURL=classes.js.map