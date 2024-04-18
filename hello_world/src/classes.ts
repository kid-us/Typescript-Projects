// Creating Classes
class Account  {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    //#### We don't need the upper lines of code if we fix our constructor parameter properties
    nickname?: string;

    constructor (
        public readonly id: number, 
        public owner: string, 
        private _balance: number){
        // We can write the parameter like this^ way instead of this
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    deposit(amount: number): void {
        if(amount <=0 ){
            throw new Error("Invalid Amount")
        }else{
            this._balance += amount
        }
        // this.calculateTax();
    }

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number) {
        if(amount < 0){
            throw new Error("Invalid Amount")
        }else[
            this._balance = amount
        ]
    }

    // This function only used inside this class we can't call it from the outside of the class.
    // private calculateTax () {
    // }
}

// Creating object instance
const account = new Account(1, "Mosh", 100);
console.log(account.balance);

// account.balance = 2;
