// Define a class Logger that takes a name file in its constructor and provides a method for writing message to that file.

class Logger {
    constructor(public name: string){}
    log(message: string) {
        console.log(message);
    }
}

let log = new Logger ("Write this message!")

// Given the person class below, create a getter for getting the full name of a person

class PersonName {
    constructor(public firstName: string, public lastName: string){}

    get fullName() {
        return this.firstName + "  " + this.lastName;
    }
}

// Create a new class Employees that extends PersonName and adds a new property called salary.

class Employees extends PersonName {
    constructor(public salary: number, firstName: string, lastName: string){
        super(firstName, lastName)
    }
}

// What is the difference between private and protected members
// # Protected members can be inherited by its child class but not for private members. 

// Given the data below, define an interface for representing employees

let employees = {
    name: "John Smith",
    salary: 30_000,
    address: {
        street: "Lorem",
        city: "Dolor",
        zipCode: 1000,
    },
};

interface  Address {
    street: string;
    city: string; 
    zipCode: number
};

interface Employer {
    name: string;
    salary: number;
    address: Address;
};