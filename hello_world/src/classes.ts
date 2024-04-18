// Creating Classes
// class Account  {
//     readonly id: number;
//     owner: string;
//     balance: number;
//     nickname?: string;

//     constructor (id: number, owner: string, balance: number){
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount: number): void {
//         if(amount <=0 ){
//             throw new Error("Invalid Amount")
//         }else{
//             this.balance += amount
//         }

//     }
// }

// // Creating object instance

// const account = new Account(1, "Mosh", 0);
// account.deposit(100);

// account.nickname = "Lorem";
// console.log(account);