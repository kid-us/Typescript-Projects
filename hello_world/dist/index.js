"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        else {
            this.balance += amount;
        }
    }
}
const account = new Account(1, "Mosh", 0);
account.deposit(100);
account.nickname = "Lorem";
console.log(account);
//# sourceMappingURL=index.js.map