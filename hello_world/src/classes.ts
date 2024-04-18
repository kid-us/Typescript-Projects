// Creating Classes
class Account  {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor (id: number, owner: string, balance: number){
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if(amount <=0 ){
            throw new Error("Invalid Amount")
        }else{
            this._balance += amount
        }
        this.calculateTax();
    }

    getBalance(): number {
        return this._balance;
    }

    private calculateTax () {
    }
}

// Creating object instance

const account = new Account(1, "Mosh", 100);
account.nickname = "Lorem";
console.log(account.getBalance());